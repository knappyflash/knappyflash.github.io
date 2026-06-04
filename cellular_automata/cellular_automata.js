let canvSize = [750, 401];
let bg = [255, 0, 0, 100];
let grid = [];
let cellSize = 10;
let colorOn, colorOff;

let cols = canvSize[0] / cellSize;
let rows = canvSize[1] / cellSize;

function setup() {
  ClearGrid();
  grid[0][37] = 1;
  RunAutomata();
}

function draw() {
  // not needed for static version
}

function ClearGrid(){
  for (let row = 0; row < rows; row++) {
    grid[row] = [];
    for (let col = 0; col < cols; col++) {
      grid[row][col] = 0;
    }
  }
}

function RunAutomata(){
  let canvas = createCanvas(canvSize[0], canvSize[1]);
  canvas.parent("cellularAutomataDiv");
  background(bg[0], bg[1], bg[2], bg[3]);

  colorOn = color(255, 204, 0);
  colorOff = color(88, 255, 237);
  colorFirstRowOn = color(255, 255, 255);
  colorFirstRowOff = color(0, 0, 0);
  strokeWeight(1);

  for (let row = 0; row < rows - 1; row++) {
    for (let col = 0; col < cols; col++) {
      let left   = (col > 0) ? grid[row][col - 1] : 0;
      let center = grid[row][col];
      let right  = (col < cols - 1) ? grid[row][col + 1] : 0;
      grid[row + 1][col] = NextState(left, center, right);

      if (row == 0){
        
        stroke(100, 100, 100);
        fill(center === 1 ? colorFirstRowOn : colorFirstRowOff);
      } else{
        stroke('black');
        fill(center === 1 ? colorOn : colorOff);
      }
      
      rect(col * cellSize, row * cellSize, cellSize, cellSize);
    }
  }
}

function NextState(left, center, right) {
  left ??= 0;
  center ??= 0;
  right ??= 0;
  let str = "" + left + center + right;
  switch (str) {
    case "000": return 0;
    case "001": return 1;
    case "010": return 1;
    case "011": return 1;
    case "100": return 1;
    case "101": return 0;
    case "110": return 0;
    case "111": return 0;
  }
}

function mousePressed() {
  if ((mouseY > 0) && (mouseY < cellSize)){
    let col = Math.floor(mouseX / cellSize);
    if (grid[0][col] == 0){
      grid[0][col] = 1
    } else{
      grid[0][col] = 0
    }
    RunAutomata();
  }
}

function mouseReleased() {
}