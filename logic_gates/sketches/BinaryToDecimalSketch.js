import Bulb from "../componets/Bulb.js";
import Lever from "../componets/Lever.js";
import BinaryDecoder from "../componets/BinaryDecoder.js";

export const BinaryToDecimalSketch = (p) => {
  let bg = [150, 150, 200, 255];

  let lever1 = new Lever(p);
  let lever2 = new Lever(p);
  let lever3 = new Lever(p);
  let lever4 = new Lever(p);

  let bulb1 = new Bulb(p);
  let bulb2 = new Bulb(p);
  let bulb3 = new Bulb(p);
  let bulb4 = new Bulb(p);
  let bulb5 = new Bulb(p);
  let bulb6 = new Bulb(p);
  let bulb7 = new Bulb(p);
  let bulb8 = new Bulb(p);

  let binaryDecoder1 = new BinaryDecoder(p);

  let isMousePressed = false;
  let isMouseClicked = false;


  p.setup = () => {
    const parent = document.getElementById("binaryToDecimalDiv");
    let w = parent.clientWidth;
    let h = parent.clientHeight;
    let canvas = p.createCanvas(w-20, h-20);
    canvas.parent("binaryToDecimalDiv");
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

    bulb1.Update(100,50,binaryDecoder1.componentDataArray[0]);
    bulb2.Update(150,50,binaryDecoder1.componentDataArray[1]);
    bulb3.Update(200,50,binaryDecoder1.componentDataArray[2]);
    bulb4.Update(250,50,binaryDecoder1.componentDataArray[3]);
    bulb5.Update(300,50,binaryDecoder1.componentDataArray[4]);
    bulb6.Update(350,50,binaryDecoder1.componentDataArray[5]);
    bulb7.Update(400,50,binaryDecoder1.componentDataArray[6]);
    bulb8.Update(450,50,binaryDecoder1.componentDataArray[7]);

    lever1.Update(50,130,isMouseClicked);
    lever2.Update(50,170,isMouseClicked);
    lever3.Update(50,210,isMouseClicked);
    lever4.Update(50,250,isMouseClicked);

    binaryDecoder1.Update(200,200,lever1,lever2,lever3,lever4);
    

    p.fill(255, 255, 255);
    p.strokeWeight(3);
    p.stroke(0, 0, 0);
    p.textSize(20);
    p.text('Binary To Decimal', 10, 20);

    p.text('1       2       3       4       5       6       7       8', 93, 80);

    p.text('8', 10, 150);
    p.text('4', 10, 190);
    p.text('2', 10, 230);
    p.text('1', 10, 270);

  }
}