// Lets put text on the input and outputs lines

export default class AndGate {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.a = 0;
        this.b = 0;
        this.output = 0;
    }

    PrintProperties() {
        console.log("x: " + this.x + ", y:" + this.y + ", a: " + this.a + ", b: " + this.b);
    }

    Update(x, y, a, b){
        this.x = x;
        this.y = y;
        this.a = a;
        this.b = b;
        console.log("Drawing AndGate: x: " + this.x + ", y: " + this.y + ", isOn: " + this.isOn);

        strokeWeight(8);
        if(this.a == 1){
            stroke(255, 0, 0);
        }else{
            stroke(0, 0, 0);
        }
        line(this.x-40, this.y+20, this.x, this.y+20);

        if(this.b == 1){
            stroke(255, 0, 0);
        }else{
            stroke(0, 0, 0);
        }
        line(this.x-40, this.y+60, this.x, this.y+60);

        if((this.a == 1)&&(this.b == 1)){
            this.output = 1;
            stroke(255, 0, 0);
        }else{
            this.output = 0;
            stroke(0, 0, 0);
        }
        line(this.x+80, this.y+38, this.x+110, this.y+38);

        stroke(0, 0, 0);
        fill(100, 110, 110);
        strokeWeight(15);
        ellipse(this.x+40, this.y+40, 80, 80);
        rect(this.x, this.y, 40, 80);
        noStroke();
        ellipse(this.x+40, this.y+40, 80, 80);
        rect(this.x, this.y, 40, 80);
        
        fill(255, 255, 255);
        stroke(0, 0, 0);
        strokeWeight(8);
        textSize(20);
        text("AND", this.x+15, this.y+45);
    }
}
