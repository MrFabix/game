# Simple Isometric Game

This project demonstrates a minimal grid-based game using plain JavaScript.

## Structure
- `index.html` – entry page loading all scripts
- `js/` – game source files
  - `map.js` – simple map representation
  - `a_star.js` – pathfinding implementation
  - `unit.js` – movable unit logic
  - `game.js` – main loop and rendering
- `css/style.css` – basic styling

## Running
Open `index.html` in a browser. The unit will automatically move from the
start position to the goal using A* pathfinding.
