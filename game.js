const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const worker = new Worker(0, 0);
worker.moveTo([4, 4]);

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'blue';
    ctx.fillRect(worker.x * 50, worker.y * 50, 48, 48);
}

function gameLoop() {
    worker.update();
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();
