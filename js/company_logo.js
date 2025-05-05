document.addEventListener("DOMContentLoaded", function () {
    const canvases = document.querySelectorAll(".pixel-canvas");
    canvases.forEach((canvas) => {
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;

    const pixelSize = 5;
    const cols = canvas.width / pixelSize;
    const rows = canvas.height / pixelSize;

    const tempCanvas = document.createElement("canvas");
    tempCanvas.width = cols;
    tempCanvas.height = rows;
    const tempCtx = tempCanvas.getContext("2d");
    tempCtx.imageSmoothingEnabled = false;

    const img = new Image();
    img.src = canvas.dataset.src;

    img.onload = () => {
      tempCtx.drawImage(img, 0, 0, cols, rows);

      let frame = 0;

      function animate() {
        const imageData = tempCtx.getImageData(0, 0, cols, rows);
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let y = 0; y < rows; y++) {
          const offset = Math.floor(Math.sin(frame * 0.1 + y * 0.2) * 3);

          for (let x = 0; x < cols; x++) {
            const index = (y * cols + x) * 4;
            const r = imageData.data[index];
            const g = imageData.data[index + 1];
            const b = imageData.data[index + 2];
            const a = imageData.data[index + 3] / 255;

            ctx.fillStyle = `rgba(${r},${g},${b},${a})`;
            ctx.fillRect(
              (x * pixelSize) + offset,
              y * pixelSize,
              pixelSize,
              pixelSize
            );
          }
        }

        frame++;
        requestAnimationFrame(animate);
      }

      animate();
    };
  });
});