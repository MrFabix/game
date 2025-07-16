const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const TILE_SIZE = 50;
const unit = new Unit(0, 0);
unit.moveTo([4, 4]);

function drawMap() {
    for (let y = 0; y < mapData.length; y++) {
        for (let x = 0; x < mapData[y].length; x++) {
            ctx.fillStyle = mapData[y][x] === 1 ? '#666' : '#ddd';
            ctx.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE - 2, TILE_SIZE - 2);
        }
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawMap();
    ctx.fillStyle = 'blue';
    ctx.fillRect(unit.x * TILE_SIZE, unit.y * TILE_SIZE, TILE_SIZE - 2, TILE_SIZE - 2);
}

function gameLoop() {
    unit.update();
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();
