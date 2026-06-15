import Bulb from "../componets/Bulb.js";
import Lever from "../componets/Lever.js";
import Monostable from "../componets/Monostable.js";
import TFlipFlop from "../componets/TFlipFlop.js";

export const BinaryCounter = (p) => {
  
  let bg = [150, 150, 200, 255];
  let bulb1 = new Bulb(p);
  let lever = new Lever(p);
  let monostable1 = new Monostable(p);
  let tFlipFlop1 = new TFlipFlop(p);

  let isMousePressed = false;
  let isMouseClicked = false;

  p.setup = () => {
    const parent = document.getElementById("binaryCounterDiv");
    let w = parent.clientWidth;
    let h = parent.clientHeight;
    let canvas = p.createCanvas(w-20, h-20);
    canvas.parent("binaryCounterDiv");
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
    p.background(bg[0], bg[1], bg[2], bg[3]);

    lever.Update(30,135,isMouseClicked);

    monostable1.Update(75,155,lever,500);
    tFlipFlop1.Update(200,155,monostable1,500);

    p.fill(255, 255, 255);
    p.strokeWeight(3);
    p.stroke(0, 0, 0);
    p.textSize(20);
    p.text('Binary Counter', 5, 20);
  }
}