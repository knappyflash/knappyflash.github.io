const pageTitle = "Logic Gates";
window.addEventListener("load", function () {
    console.log(pageTitle + " Page is loaded");
    changeTitle();
});
function changeTitle() {
  const headerFrame = parent.frames["header"];
  const title = headerFrame.document.getElementById("topTitle");
  title.textContent = pageTitle;
}


let canvSize = [200, 250];
let bg = [255, 0, 0, 100];
let myState = 1;

function setup() {
  let canvas = createCanvas(canvSize[0], canvSize[1]);
  canvas.parent("logicgateDiv");
  background(bg[0], bg[1], bg[2], bg[3]);
  DrawButton(68, 20, false);
  DrawButton(30, 100, false);
  DrawButton(100, 100, false);

  fill(255, 255, 255);
  textSize(30);
  text('AND Gate', 25, 200);
}

function draw() {
  // not needed for static version
}

function mousePressed() {
  console.log("Mouse Pressed");
}

function mouseReleased() {
  console.log("Mouse Relased");
  console.log("myState: " + myState);
  switch (myState) {
    case 0:
      DrawButton(68, 20, false);
      DrawButton(30, 100, false);
      DrawButton(100, 100, false);
      myState=1;
      break;
    case 1:
      DrawButton(68, 20, false);
      DrawButton(30, 100, false);
      DrawButton(100, 100, true);
      myState=2;
      break;
    case 2:
      DrawButton(68, 20, false);
      DrawButton(30, 100, true);
      DrawButton(100, 100, false);
      myState=3;
      break;
    case 3:
      DrawButton(68, 20, true);
      DrawButton(30, 100, true);
      DrawButton(100, 100, true);
      myState=0;
      break;
    default:
      console.log('Unknown animal.');
  }
}

function DrawButton(x, y, isOn){
  strokeWeight(4);
  stroke(0, 0, 0);
  if (isOn){
    fill(255, 0, 0);
  } else {
    fill(200,200,200);
  }
  rect(x, y, 60, 60);
}