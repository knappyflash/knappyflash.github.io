import Bulb from "../Componets/Bulb.js";
import Clock from "../Componets/Clock.js";
import Lever from "../Componets/Lever.js";

export const ClockSketch = (p) => {
  
  let bg = [150, 150, 200, 255];
  let isMousePressed = false;
  let bulb = new Bulb(p);
  let clock = new Clock(p);
  let lever = new Lever(p);
  p.setup = () => {
    const parent = document.getElementById("clockDiv");
    const w = parent.clientWidth;
    const h = parent.clientHeight;
    const canvas = p.createCanvas(w-20, h-20);
    canvas.parent("clockDiv");
    p.background(bg[0], bg[1], bg[2], bg[3]);
    p.frameRate(30);
    UpdateLogic();
  }

  p.draw = () => {
    UpdateLogic();
  }

  p.mousePressed = () => {
    isMousePressed = true;
  }

  p.mouseReleased = () => {
    isMousePressed = false;
  }

  
  function UpdateLogic(){
      p.background(bg[0], bg[1], bg[2], bg[3]);
      
      lever.Update(60,170,isMousePressed);
      clock.Update(200,190,lever,500);
      bulb.Update(400,155,clock);

      p.fill(255, 255, 255);
      p.strokeWeight(3);
      p.stroke(0, 0, 0);
      p.textSize(50);
      p.text('Clock', 175, 50);
  }
}