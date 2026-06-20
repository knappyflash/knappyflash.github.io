import db from "../db/db.js";

const happyButton = document.getElementById("happyButton");
const sadButton = document.getElementById("sadButton");
const angryButton = document.getElementById("angryButton");
const scaredButton = document.getElementById("scaredButton");

happyButton.addEventListener("click", SendHappy);
sadButton.addEventListener("click", SendSad);
angryButton.addEventListener("click", SendAngry);
scaredButton.addEventListener("click", SendScared);

const pageTitle = "Face Online";
window.addEventListener("load", function () {
    console.log(pageTitle + " Page is loaded");
    changeTitle();
});
function changeTitle() {
  const headerFrame = parent.frames["header"];
  const title = headerFrame.document.getElementById("topTitle");
  title.textContent = pageTitle;
}

let myDb = new db();

let FaceMood = Object.freeze({
  HAPPY: "happy",
  SAD: "sad",
  SCARED: "scared",
  ANGRY: "angry"
});
let currentMood = FaceMood.HAPPY;

function SendHappy(){
  console.log("SendHappy");
  WriteData(FaceMood.HAPPY);
  currentMood = FaceMood.HAPPY;
}

function SendSad(){
  console.log("SendSad");
  WriteData(FaceMood.SAD);
  currentMood = FaceMood.SAD;
}

function SendAngry(){
  console.log("SendAngry");
  WriteData(FaceMood.ANGRY);
  currentMood = FaceMood.ANGRY;
}

function SendScared(){
  console.log("SendScared");
  WriteData(FaceMood.SCARED);
  currentMood = FaceMood.SCARED;
}

async function GetData(){
  let myData = await myDb.GetData("/face/mood");
  console.log("myData: ", myData);
  switch(myData){
    case "happy":
      currentMood = FaceMood.HAPPY;
      break;
    case "angry":
      currentMood = FaceMood.ANGRY;
      break;
    case "sad":
      currentMood = FaceMood.SAD;
      break;
    case "scared":
      currentMood = FaceMood.SCARED;
      break;
    default:
      currentMood = FaceMood.HAPPY;
  }
}

async function WriteData(mood){
  let myData = await myDb.WriteData("face", {mood: mood});
  console.log("myData: ", myData);
}

GetData();

export const faceSketch = (p) => {
  let bg = [32, 255, 251, 255];

  let isMousePressed = false;
  let isMouseClicked = false;

  p.setup = () => {
    const parent = document.getElementById("faceDiv");
    let w = parent.clientWidth;
    let h = parent.clientHeight;
    let canvas = p.createCanvas(w, h);
    canvas.parent("faceDiv");
    p.background(bg[0], bg[1], bg[2], bg[3]);
    p.frameRate(30);
  }

  p.draw = () => {
    UpdateLogic();
    isMouseClicked = false;
  }

  p.mousePressed = () => {
    isMousePressed = true;
    isMouseClicked = true;
  }

  p.mouseReleased = () => {
    isMousePressed = false;
  }

  function UpdateLogic(){
    switch (currentMood){
      case FaceMood.HAPPY:
        DrawHappy();
        break;
      case FaceMood.SAD:
        DrawSad();
        break;
      case FaceMood.ANGRY:
        DrawAngry();
        break;
      case FaceMood.SCARED:
        DrawScared();
        break;
    }
    
  }

  function DrawHappy(){
    p.background(bg[0], bg[1], bg[2], bg[3]);
    
    // shirt
    p.strokeWeight(3);
    p.fill(255,0,0);
    p.ellipse(200, 350, 100, 300);

    // head
    p.fill(255,178,114);
    p.strokeWeight(3);
    p.stroke(0, 0, 0);
    p.ellipse(200, 200, 150, 200);

    // eyes
    p.fill(255,255,255);
    p.ellipse(170, 180, 50, 20);
    p.ellipse(230, 180, 50, 20);

    // puple
    p.fill(0,0,0);
    p.circle(170, 180, 10);
    p.circle(230, 180, 10);


    // hair
    p.noFill();
    p.strokeWeight(8);
    p.stroke(136, 76, 26);
    p.ellipse(160, 130, 50, 5);
    p.ellipse(170, 120, 50, 5);
    p.ellipse(180, 110, 50, 5);
    p.ellipse(190, 105, 50, 5);
    p.ellipse(208, 110, 50, 5);
    p.ellipse(210, 120, 50, 5);
    p.ellipse(220, 120, 50, 5);
    p.ellipse(230, 130, 50, 5);
    

    // eyebrows
    p.line(160,160,190,150)
    p.line(210,150,240,160)

    // mouth
    let x1 = 300;
    let y1 = 250;
    let x2 = 170;
    let y2 = 250;
    let x3 = 230;
    let y3 = 250;
    let x4 = 200;
    let y4 = -100;
    p.stroke(0, 0, 0);
    
    p.curve(x1, y1, x2, y2, x3, y3, x4, y4);
  }

  function DrawSad(){
    p.background(bg[0], bg[1], bg[2], bg[3]);

    // shirt
    p.strokeWeight(3);
    p.fill(255,0,0);
    p.ellipse(200, 350, 100, 300);

    // head
    p.fill(255,178,114);
    p.strokeWeight(3);
    p.stroke(0, 0, 0);
    p.ellipse(200, 200, 150, 200);

    // eyes
    p.fill(255,255,255);
    p.ellipse(170, 180, 50, 20);
    p.ellipse(230, 180, 50, 20);

    // puple
    p.fill(0,0,0);
    p.circle(160, 185, 10);
    p.circle(220, 185, 10);

    // hair
    p.noFill();
    p.strokeWeight(8);
    p.stroke(136, 76, 26);
    p.ellipse(160, 130, 50, 5);
    p.ellipse(170, 120, 50, 5);
    p.ellipse(180, 110, 50, 5);
    p.ellipse(190, 105, 50, 5);
    p.ellipse(208, 110, 50, 5);
    p.ellipse(210, 120, 50, 5);
    p.ellipse(220, 120, 50, 5);
    p.ellipse(230, 130, 50, 5);
    

    // eyebrows
    p.line(160,170,190,160)
    p.line(210,160,240,170)

    // mouth
    let x1 = 300;
    let y1 = 250;
    let x2 = 170;
    let y2 = 250;
    let x3 = 230;
    let y3 = 250;
    let x4 = 200;
    let y4 = 300;
    p.stroke(0, 0, 0);
    
    p.curve(x1, y1, x2, y2, x3, y3, x4, y4);
  }

  function DrawAngry(){
    p.background(bg[0], bg[1], bg[2], bg[3]);

    // shirt
    p.strokeWeight(3);
    p.fill(255,0,0);
    p.ellipse(200, 350, 100, 300);

    // head
    p.fill(255,178,114);
    p.strokeWeight(3);
    p.stroke(0, 0, 0);
    p.ellipse(200, 200, 150, 200);

    // eyes
    p.fill(255,255,255);
    p.ellipse(170, 180, 50, 20);
    p.ellipse(230, 180, 50, 20);

    // puple
    p.fill(0,0,0);
    p.circle(170, 180, 10);
    p.circle(230, 180, 10);

    // hair
    p.noFill();
    p.strokeWeight(8);
    p.stroke(136, 76, 26);
    p.ellipse(160, 130, 50, 5);
    p.ellipse(170, 120, 50, 5);
    p.ellipse(180, 110, 50, 5);
    p.ellipse(190, 105, 50, 5);
    p.ellipse(208, 110, 50, 5);
    p.ellipse(210, 120, 50, 5);
    p.ellipse(220, 120, 50, 5);
    p.ellipse(230, 130, 50, 5);
    

    // eyebrows
    p.line(160,160,190,170)
    p.line(210,170,240,160)

    // mouth
    // p.fill(255,255,255);
    let x1 = 300;
    let y1 = 250;
    let x2 = 170;
    let y2 = 250;
    let x3 = 230;
    let y3 = 250;
    let x4 = 200;
    let y4 = 300;
    p.stroke(0, 0, 0);
    
    p.curve(x1, y1, x2, y2, x3, y3, x4, y4);
  }

  function DrawScared(){
    p.background(bg[0], bg[1], bg[2], bg[3]);

    // shirt
    p.strokeWeight(3);
    p.fill(255,0,0);
    p.ellipse(200, 350, 100, 300);

    // head
    p.fill(255,178,114);
    p.strokeWeight(3);
    p.stroke(0, 0, 0);
    p.ellipse(200, 200, 150, 200);

    // eyes
    p.fill(255,255,255);
    p.ellipse(170, 180, 50, 40);
    p.ellipse(230, 180, 50, 40);

    // puple
    p.fill(0,0,0);
    p.circle(170, 180, 10);
    p.circle(230, 180, 10);

    // hair
    p.noFill();
    p.strokeWeight(8);
    p.stroke(136, 76, 26);
    p.ellipse(160, 130, 50, 5);
    p.ellipse(170, 120, 50, 5);
    p.ellipse(180, 110, 50, 5);
    p.ellipse(190, 105, 50, 5);
    p.ellipse(208, 110, 50, 5);
    p.ellipse(210, 120, 50, 5);
    p.ellipse(220, 120, 50, 5);
    p.ellipse(230, 130, 50, 5);
    

    // eyebrows
    p.line(160,160,190,150)
    p.line(210,150,240,160)

    // mouth
    p.fill(0,0,0);
    p.strokeWeight(3);
    p.stroke(0, 0, 0);
    p.ellipse(200, 250, 50, 20);
  }
}

new p5(faceSketch);