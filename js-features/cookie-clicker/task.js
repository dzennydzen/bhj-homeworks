const cookie = document.getElementById('cookie');
const clicker = document.getElementById('clicker__counter');
const button = document.getElementById('reset_button');
const speed = document.getElementById('speed__counter');
let startTime = null;

button.onclick = function() {
    clicker.textContent = 0;
    speed.textContent = 0;
    cookie.width = 200;
}

cookie.onclick = function() {
    const currentTime = performance.now();

    if (!startTime) {
        startTime = currentTime;
    }

    clicker.textContent++;

    const totalTime = (currentTime - startTime) / 1000;
    const clicksPerSec = +(clicker.textContent / totalTime).toFixed(2);
    
    clicker.textContent == 1 ? speed.textContent = 0 : speed.textContent = clicksPerSec;
  
    if (clicker.textContent % 2 === 0) {
        cookie.width -= 20;
    } else {
        cookie.width += 20;
    }
}