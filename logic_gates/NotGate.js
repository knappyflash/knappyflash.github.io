export default class NotGate {
    constructor(p) {
        this.p = p;
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

    Update(x, y, input = null){
        this.x = x;
        this.y = y;

        this.inputA_Value = 0;
        this.inputX = this.x-25;
        this.inputY = this.y-30;
        this.outputValue = 1
        
        if(input){
            this.inputA_Value = input.outputValue;
            this.inputX = input.outputX;
            this.inputY = input.outputY;
            this.outputValue = 1 - input.outputValue
        }
        
        this.outputX = this.x+75;
        this.outputY = this.y-30;

        let inputColor = this.p.color(50,50,100);
        let outputColor = this.p.color(255, 0, 0);

        if (this.outputValue === 1) {
            outputColor = this.p.color(255, 0, 0);
            inputColor = this.p.color(0,0,0);
        } else {
            outputColor = this.p.color(0, 0, 0);
            inputColor = this.p.color(255,0,0);
        }

        // wire to terminal
        this.p.stroke(inputColor);
        this.p.strokeWeight(3);
        this.p.line(this.inputX, this.inputY, this.x-25, this.y-30);
        this.p.line(this.x, this.y-30, this.x-25, this.y-30);
        this.p.stroke(0,0,0);
        this.p.fill(255,255,255);
        this.p.triangle(this.x, this.y-5, this.x, this.y-55, this.x+50, this.y-30);
        this.p.fill(outputColor);
        this.p.ellipse(this.x+50, this.y-30, 10, 10);
        this.p.stroke(outputColor);
        this.p.line(this.x+55, this.y-30, this.x+75, this.y-30);
    }
}
