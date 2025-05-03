const btn = document.querySelector('.btn');
btn.onclick = Counter;
const clicks = document.querySelector('.clicks');
clicks.id = document.querySelector('clicks');

var a = 0;

function Counter() {
    a += 1;
    clicks.innerHTML = a;
}