export default class NorGate {
    constructor(p) {
        this.p = p;
        this.x = 0;
        this.y = 0;
        this.inputA_Value = 0;
        this.inputA_X = 0;
        this.inputA_Y = 0;
        this.inputB_Value = 0;
        this.inputB_X = 0;
        this.inputB_Y = 0;
        this.outputValue = 0;
        this.outputX = 0;
        this.outputY = 0;
    }

    PrintProperties() {
        console.log("x: " + this.x + ", y:" + this.y + ", a: " + this.inputA + ", b: " + this.inputB);
    }

    Update(x, y, inputA = null, inputB = null){
        this.x = x;
        this.y = y;

        this.inputA_Value = 0;
        this.inputA_X = this.x;
        this.inputA_Y = this.y+15;
        this.inputB_Value = 0;
        this.inputB_X = this.x;
        this.inputB_Y = this.y+45;
        let bgColor = this.p.color(150, 150, 200, 255);
        let outputColor = this.p.color(0, 0, 0);
        
        if(inputA){
            this.inputA_Value = inputA.outputValue;
            this.inputA_X = inputA.outputX;
            this.inputA_Y = inputA.outputY;
        }
        if(inputB){
            this.inputB_Value = inputB.outputValue;
            this.inputB_X = inputB.outputX;
            this.inputB_Y = inputB.outputY;
        }

        this.outputX = this.x+90;
        this.outputY = this.y+28;

        this.p.fill(255, 255, 255);
        this.p.strokeWeight(3);
        

        //  output
        if((this.inputA_Value == 1)||(this.inputB_Value == 1)){
            this.outputValue = 0;
            outputColor = this.p.color(0, 0, 0);
        }else{
            this.outputValue = 1;
            outputColor = this.p.color(255, 0, 0);
        }
        this.p.stroke(outputColor);
        this.p.line(this.x+70, this.y+28, this.outputX, this.outputY);

        // and gate
        this.p.stroke(0, 0, 0);
        this.p.ellipse(this.x+40, this.y+30, 60, 60);
        this.p.rect(this.x+10, this.y, 30, 60);

        this.p.noStroke();
        this.p.rect(this.x+38, this.y+2, 5, 56);
        this.p.stroke(0, 0, 0);

        this.p.fill(bgColor);
        this.p.ellipse(this.x+10, this.y+30, 30, 60);
        this.p.noStroke();
        this.p.rect(this.x-7, this.y-1, 15, 62);

        this.p.fill(outputColor);
        this.p.stroke(0, 0, 0);
        this.p.ellipse(this.x+75, this.y+28, 10, 10);


        // inputA
        if(this.inputA_Value == 1){
            this.p.stroke(255,0,0);
        }else{
            this.p.stroke(0,0,0);
        }
        this.p.line(this.inputA_X, this.inputA_Y, this.x, this.y+15);
        this.p.line(this.x, this.y+15, this.x+21, this.y+15);


        // inputB
        if(this.inputB_Value == 1){
            this.p.stroke(255,0,0);
        }else{
            this.p.stroke(0,0,0);
        }
        this.p.line(this.inputB_X, this.inputB_Y, this.x, this.y+45);
        this.p.line(this.x, this.y+45, this.x+21, this.y+45);

    }
}
