export default class NotGate {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.inputValue = 0;
        this.inputX = 0;
        this.inputY = 0;
        this.outputValue = 0;
        this.outputX = 0;
        this.outputY = 0;
    }

    // PrintProperties() {
        // console.log("x: " + this.x + ", y:" + this.y + ", a: " + this.inputA + ", b: " + this.inputB);
    // }

    Update(x, y, input){
        this.x = x;
        this.y = y;
        this.inputA_Value = input.outputValue;
        this.inputX = input.outputX;
        this.inputY = input.outputY;
        this.outputValue = 1 - input.outputValue
        this.outputX = this.x+75;
        this.outputY = this.y-30;

        let inputColor = color(50,50,100);
        let outputColor = color(255, 0, 0);

        if (this.outputValue === 1) {
            outputColor = color(255, 0, 0);
            inputColor = color(0,0,0);
        } else {
            outputColor = color(0, 0, 0);
            inputColor = color(255,0,0);
        }

        // wire to terminal
        stroke(inputColor);
        strokeWeight(3);
        line(this.inputX, this.inputY, this.x-25, this.y-30);
        line(this.x, this.y-30, this.x-25, this.y-30);
        stroke(0,0,0);
        fill(255,255,255);
        triangle(this.x, this.y, this.x, this.y-50, this.x+50, this.y-30);
        fill(outputColor);
        ellipse(this.x+50, this.y-30, 10, 10);
        stroke(outputColor);
        line(this.x+55, this.y-30, this.x+75, this.y-30);
    }
}
