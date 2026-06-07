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
        console.log("Drawing AndGate: x: " + this.x + ", y: " + this.y + ", isOn: " + this.isOn);
        stroke(0, 0, 0);
        strokeWeight(8);
        line(this.x-40, this.y+20, this.x, this.y+20);
        line(this.x-40, this.y+60, this.x, this.y+60);
        strokeWeight(15);
        fill(255, 255, 255);
        ellipse(this.x+40, this.y+40, 80, 80);
        rect(this.x, this.y, 40, 80);
        noStroke();
        ellipse(this.x+40, this.y+40, 80, 80);
        rect(this.x, this.y, 40, 80);
        stroke(0, 0, 0);
        fill(255, 255, 255);
        textSize(30);
        strokeWeight(8);
        text('0', this.x+28, this.y+50);
    }
}
