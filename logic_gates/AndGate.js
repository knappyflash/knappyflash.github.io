// Lets put text on the input and outputs lines

export default class AndGate {
    constructor(x, y, isOn) {
        this.x = x;
        this.y = y;
        this.isOn = isOn;
    }

    PrintProperties() {
        console.log("x: " + this.x + ", y:" + this.y + ", isOn: " + this.isOn);
    }

    Draw(x, y, isOn){
        let myOutput = 0;
        this.x = x;
        this.y = y;
        this.isOn = isOn;
        console.log("Drawing AndGate: x: " + this.x + ", y: " + this.y + ", isOn: " + this.isOn);
        if(this.isOn){
            myOutput = 1;
            fill(255, 100, 100);
        } else{
            myOutput = 0;
            fill(50, 50, 50);
        }
        stroke(0, 0, 0);
        strokeWeight(8);
        line(this.x-40, this.y+20, this.x, this.y+20);
        line(this.x-40, this.y+60, this.x, this.y+60);
        line(this.x+80, this.y+38, this.x+110, this.y+38);
        strokeWeight(15);
        ellipse(this.x+40, this.y+40, 80, 80);
        rect(this.x, this.y, 40, 80);
        noStroke();
        ellipse(this.x+40, this.y+40, 80, 80);
        rect(this.x, this.y, 40, 80);
        fill(255, 255, 255);
        stroke(0, 0, 0);
        textSize(30);
        strokeWeight(8);
        text(myOutput, this.x+110, this.y+49);
    }
}
