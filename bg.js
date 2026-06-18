const tileSize = 50;

window.addEventListener("resize", generateBackground);

window.addEventListener("load", function () {
  generateBackground();
});

const page = document.querySelector(".page");



let resizeTimer;
const observer = new ResizeObserver(() => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    generateBackground();
  }, 200);
});
observer.observe(document.querySelector(".page"));



function generateBackground() {
  // remove old background if it exists
  const oldBg = document.querySelector(".mc-bg");
  if (oldBg) oldBg.remove();

  const container = document.createElement("div");
  container.className = "mc-bg";

  // IMPORTANT:
  // use clientWidth/clientHeight so it matches the visible page area better
  const page = document.querySelector(".page");

  const viewWidth = page.clientWidth;
  const viewHeight = page.clientHeight;

  page.prepend(container);

  const cols = Math.ceil(viewWidth / tileSize);
  const rows = Math.ceil(viewHeight / tileSize);

  // force the grid to use the exact same column count as JS
  container.style.gridTemplateColumns = `repeat(${cols}, ${tileSize}px)`;
  container.style.gridAutoRows = `${tileSize}px`;

  const grid = [];

  // base terrain
  for (let y = 0; y < rows; y++) {
    grid[y] = [];

    for (let x = 0; x < cols; x++) {
      if (y === 0) {
        grid[y][x] = "mc_grass.png";
      } else if (y < 3) {
        grid[y][x] = "mc_dirt.png";
      } else {
        grid[y][x] = "mc_stone.png";
      }
    }
  }

  addVeinPatches(grid, cols, rows);

  // hard reset top layers so nothing can ever corrupt them
  for (let x = 0; x < cols; x++) {
    grid[0][x] = "mc_grass.png";
    if (rows > 1) grid[1][x] = "mc_dirt.png";
    if (rows > 2) grid[2][x] = "mc_dirt.png";
  }

  // render
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const tile = document.createElement("div");
      tile.className = "tile";
      tile.style.backgroundImage = `url("../images/mc_textures/${grid[y][x]}")`;


      container.appendChild(tile);
    }
  }

  document.querySelector(".page").prepend(container);
}

function addVeinPatches(grid, cols, rows) {
  const patchCount = Math.floor((cols * rows) / 20);

  for (let i = 0; i < patchCount; i++) {
    const startX = Math.floor(Math.random() * cols);
    const startY = Math.floor(Math.random() * Math.max(rows - 3, 1)) + 3;

    if (startY >= rows) continue;

    const texture = pickVeinTexture(startY, rows);
    const patchSize = Math.floor(Math.random() * 8) + 4;

    growPatch(grid, cols, rows, startX, startY, texture, patchSize);
  }
}

function growPatch(grid, cols, rows, startX, startY, texture, patchSize) {
  const visited = new Set();
  const cells = [[startX, startY]];
  let placed = 0;

  while (cells.length > 0 && placed < patchSize) {
    const index = Math.floor(Math.random() * cells.length);
    const [x, y] = cells.splice(index, 1)[0];
    const key = `${x},${y}`;

    if (visited.has(key)) continue;
    visited.add(key);

    if (x < 0 || x >= cols || y < 3 || y >= rows) continue;
    if (grid[y][x] !== "mc_stone.png") continue;

    grid[y][x] = texture;
    placed++;

    const neighbors = [
      [x + 1, y],
      [x - 1, y],
      [x, y + 1],
      [x, y - 1]
    ];

    for (const [nx, ny] of neighbors) {
      if (Math.random() < 0.8) {
        cells.push([nx, ny]);
      }
    }
  }
}

function pickVeinTexture(y, rows) {
  const depth = y / rows;
  const rand = Math.random();

  if (rand < 0.18) return "mc_granite.png";
  if (rand < 0.32) return "mc_diorite.png";
  if (rand < 0.46) return "mc_andesite.png";
  if (rand < 0.56) return "mc_gravel.png";
  if (rand < 0.63) return "mc_clay.png";
  if (rand < 0.77) return "mc_coal_ore.png";
  if (rand < 0.88) return "mc_iron_ore.png";
  if (rand < 0.94) return "mc_gold_ore.png";
  if (rand < 0.96) return "mc_redstone_ore.png";
  if (rand < 0.97) return "mc_lapis_lazuli_ore.png";
  if (rand < 1) return "mc_diamond_ore.png";
}