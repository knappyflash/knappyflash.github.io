import Bulb from "../Componets/Bulb.js";
import Clock from "../Componets/Clock.js";

export const ClockSketch = (p) => {
  
  let bg = [150, 150, 200, 255];
  let isMousePressed = false;
  let bulb = new Bulb(p);
  let clock = new Clock(p);
  p.setup = () => {
    const parent = document.getElementById("clockDiv");
    const w = parent.clientWidth;
    const h = parent.clientHeight;
    const canvas = p.createCanvas(w-20, h-20);
    canvas.parent("clockDiv");
    p.background(bg[0], bg[1], bg[2], bg[3]);
    p.frameRate(1);
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
      clock.Update(100,190,0);
      bulb.Update(250,125,clock);

      p.fill(255, 255, 255);
      p.strokeWeight(3);
      p.stroke(0, 0, 0);
      p.textSize(50);
      p.text('Clock', 175, 50);
  }
}