// Simple A* pathfinding algorithm on a grid
function heuristic(a, b) {
    return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
}

function findPath(map, start, goal) {
    const open = [];
    const closed = new Set();
    const key = (x, y) => `${x},${y}`;

    open.push({ pos: start, g: 0, f: heuristic(start, goal), parent: null });

    while (open.length > 0) {
        open.sort((a, b) => a.f - b.f);
        const current = open.shift();
        const [cx, cy] = current.pos;

        if (cx === goal[0] && cy === goal[1]) {
            const path = [];
            let node = current;
            while (node) {
                path.unshift(node.pos);
                node = node.parent;
            }
            return path;
        }

        closed.add(key(cx, cy));

        const neighbors = [
            [cx + 1, cy],
            [cx - 1, cy],
            [cx, cy + 1],
            [cx, cy - 1]
        ];

        for (const [nx, ny] of neighbors) {
            if (ny < 0 || ny >= map.length || nx < 0 || nx >= map[0].length) continue;
            if (map[ny][nx] === 1) continue;
            if (closed.has(key(nx, ny))) continue;

            const g = current.g + 1;
            const existing = open.find(n => n.pos[0] === nx && n.pos[1] === ny);
            if (existing) {
                if (g < existing.g) {
                    existing.g = g;
                    existing.f = g + heuristic([nx, ny], goal);
                    existing.parent = current;
                }
            } else {
                open.push({ pos: [nx, ny], g, f: g + heuristic([nx, ny], goal), parent: current });
            }
        }
    }

    return [];
}
