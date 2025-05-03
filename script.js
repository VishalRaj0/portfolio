const btn = document.querySelector('.btn');
btn.onclick = Counter;
const clicks = document.querySelector('.clicks');
clicks.id = document.querySelector('clicks');

var a = 0;

function Counter() {
    a += 1;
    clicks.innerHTML = a;
}
<button class="btn">Click</button>
<p>Clicks: <a class="clicks">0</a></p>const btn = document.querySelector('.btn');
btn.onclick = Counter;
const clicks = document.querySelector('.clicks');
clicks.id = document.querySelector('clicks');

var a = 0;

function Counter() {
    a += 1;
    clicks.innerHTML = a;
}
