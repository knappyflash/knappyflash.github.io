const pageTitle = "Cellular Automata";
window.addEventListener("load", function () {
    console.log(pageTitle + " Page is loaded");
    changeTitle();
});
function changeTitle() {
  const headerFrame = parent.frames["header"];
  const title = headerFrame.document.getElementById("topTitle");
  title.textContent = pageTitle;
}

let canvSize = [750, 400];
let bg = [255, 0, 0, 100];
let grid = [];
let cellSize = 10;
let colorOn, colorOff;

let cols = canvSize[0] / cellSize;
let rows = canvSize[1] / cellSize;

let buttonCount = 8;
let buttonSize = canvSize[0] / buttonCount;
let buttons = [];

function setup() {
  ResetGrid();
  grid[0][37] = 1;
  RunAutomata();
}

function draw() {
  // not needed for static version
}

function ResetGrid(){
  for (let row = 0; row < rows; row++) {
    grid[row] = [];
    for (let col = 0; col < cols; col++) {
      grid[row][col] = 0;
    }
  }

    buttons[0] = 0;
    buttons[1] = 1;
    buttons[2] = 1;
    buttons[3] = 1;
    buttons[4] = 1;
    buttons[5] = 0;
    buttons[6] = 0;
    buttons[7] = 0;
}

function RunAutomata(){
  let canvas = createCanvas(canvSize[0], canvSize[1] + 100);
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




  strokeWeight(4);
  stroke(100, 100, 100);
  
  for (let buttonNum = 0; buttonNum < buttonCount; buttonNum++) {
    if (buttons[buttonNum] == 0){
      fill(colorFirstRowOff);
    } else{
      fill(colorFirstRowOn);
    }
    rect(buttonNum * buttonSize, 395, buttonSize, 100);
  }  
}


function NextState(left, center, right) {
  left ??= 0;
  center ??= 0;
  right ??= 0;
  let str = "" + left + center + right;
  switch (str) {
    case "000": return buttons[0];
    case "001": return buttons[1];
    case "010": return buttons[2];
    case "011": return buttons[3];
    case "100": return buttons[4];
    case "101": return buttons[5];
    case "110": return buttons[6];
    case "111": return buttons[7];
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

  if ((mouseY > 400) && (mouseY < 400+buttonSize)){
    let buttonNum = Math.floor(mouseX / buttonSize);
    if (buttons[buttonNum] == 0){
      buttons[buttonNum] = 1;
    } else{
      buttons[buttonNum] = 0;
    }
    
    console.log(buttons[buttonNum]);
    RunAutomata();
  }

}

function mouseReleased() {
}