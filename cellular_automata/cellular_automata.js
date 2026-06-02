let canvSize = [750, 410];
let bg = [255, 0, 0, 100];
let grid = [];
let cellSize = 10;
let colorOn;
let colorOff;

function setup() {
  let canvas = createCanvas(canvSize[0], canvSize[1]);
  canvas.parent("cellularAutomataDiv");
  background(bg[0], bg[1], bg[2], bg[3]);

  colorOn = color(255, 204, 0);
  colorOff = color(88, 255, 237);
  
  for (i = 0; i < (canvSize[0] / cellSize); i++) {
      grid[0, i] = Math.floor(Math.random() * 2);
      if (grid[0, i] == 0) {
        fill(colorOn);
      } else {
        fill(colorOff);
      }
      rect(i*cellSize, 0, cellSize, cellSize);
  }

  for (j = 0; j < (canvSize[1] / cellSize); j++) {
    for (i = 0; i < (canvSize[0] / cellSize); i++) {
      grid[j+1, i-1] = grid[j, i] ;
      if (grid[j, i] == 0) {
        fill(colorOn);
      } else {
        fill(colorOff);
      }
      rect(i*cellSize, j*cellSize, cellSize, cellSize);
    }
  }
}

function draw() {
  // clear();
  //  background(bg[0], bg[1], bg[2], bg[3]);
}
