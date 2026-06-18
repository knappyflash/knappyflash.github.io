import Bulb from "../componets/Bulb.js";
import Lever from "../componets/Lever.js";
import Button from "../componets/Button.js";

export const DecimalToBinarySketch = (p) => {
  let bg = [150, 150, 200, 255];

  let button1 = new Button(p);
  let button2 = new Button(p);
  let button3 = new Button(p);
  let button4 = new Button(p);
  let button5 = new Button(p);
  let button6 = new Button(p);
  let button7 = new Button(p);
  let button8 = new Button(p);

  let bulb1 = new Bulb(p);
  let bulb2 = new Bulb(p);
  let bulb3 = new Bulb(p);
  let bulb4 = new Bulb(p);

  let isMousePressed = false;
  let isMouseClicked = false;

  let inputButton1 = null;
  let inputButton2 = null;
  let inputButton3 = null;
  let inputButton4 = null;

  p.setup = () => {
    const parent = document.getElementById("decimalToBinaryDiv");
    let w = parent.clientWidth;
    let h = parent.clientHeight;
    let canvas = p.createCanvas(w-20, h-20);
    canvas.parent("decimalToBinaryDiv");
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

    bulb1.Update(400,100,inputButton1);
    bulb2.Update(300,100,inputButton2);
    bulb3.Update(200,100,inputButton3);
    bulb4.Update(100,100,inputButton4);

    button1.Update(20,200,isMousePressed);
    button2.Update(75,200,isMousePressed);
    button3.Update(135,200,isMousePressed);
    button4.Update(195,200,isMousePressed);
    button5.Update(255,200,isMousePressed);
    button6.Update(320,200,isMousePressed);
    button7.Update(380,200,isMousePressed);
    button8.Update(440,200,isMousePressed);

    inputButton1 = null;
    inputButton2 = null;
    inputButton3 = null;
    inputButton4 = null;
    
    if(button1.outputValue == 1){
      inputButton1 = button1;
    }else if(button2.outputValue == 1){
      inputButton2 = button2;
    }else if(button3.outputValue == 1){
      inputButton1 = button3;
      inputButton2 = button3;
    }else if(button4.outputValue == 1){
      inputButton3 = button4;
    }else if(button5.outputValue == 1){
      inputButton1 = button5;
      inputButton3 = button5;
    }else if(button6.outputValue == 1){
      inputButton2 = button6;
      inputButton3 = button6;
    }else if(button7.outputValue == 1){
      inputButton1 = button7;
      inputButton2 = button7;
      inputButton3 = button7;
    }else if(button8.outputValue == 1){
      inputButton4 = button8;
    }

    p.fill(255, 255, 255);
    p.strokeWeight(3);
    p.stroke(0, 0, 0);
    p.textSize(25);
    p.text('Decimal To Binary', 20, 25);
    p.text('8            4             2            1', 92, 70);
    p.text('1      2       3      4       5       6       7       8', 30, 230);
  }
}