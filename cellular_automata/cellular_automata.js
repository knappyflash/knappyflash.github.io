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
      // grid[0, i] = Math.floor(Math.random() * 2);
      grid[0, i] = 0;
  }

  grid[0, 30] = 1;
  grid[0, 32] = 1;

  for (j = 0; j < (canvSize[1] / cellSize); j++) {
    for (i = 0; i < (canvSize[0] / cellSize); i++) {
      grid[j+1, i] = NextState(grid[j, i-1], grid[j, i], grid[j, i+1]);
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

function NextState(left, center, right) {
  left ??= 0;
  center ??= 0;
  right ??= 0;
  let str = "" + left + center + right;
  switch (str) {
    case "000":
      return 0;
    case "001":
      return 1;
    case "010":
      return 1;
    case "011":
      return 1;
    case "100":
      return 1;
    case "101":
      return 0;
    case "110":
      return 0;
    case "111":
      return 0;
    default:
      console.log("Unknown leftCenterRight NextState.");
  }
}