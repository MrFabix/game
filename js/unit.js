class Unit {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.path = [];
    }

    moveTo(target) {
        this.path = findPath(mapData, [this.x, this.y], target);
    }

    update() {
        if (this.path.length > 0) {
            let [nx, ny] = this.path.shift();
            this.x = nx;
            this.y = ny;
        }
    }
}
