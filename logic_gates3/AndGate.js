export default class AndGate {
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
        this.inputA_Value = inputA.outputValue;
        this.inputA_X = inputA.outputX;
        this.inputA_Y = inputA.outputY;
        this.inputB_Value = inputB.outputValue;
        this.inputB_X = inputB.outputX;
        this.inputB_Y = inputB.outputY;
        this.outputX = this.x+95;
        this.outputY = this.y+28;

        this.p.fill(255, 255, 255);
        this.p.strokeWeight(3);

        // inputA
        if(this.inputA_Value == 1){
            this.p.stroke(255,0,0);
        }else{
            this.p.stroke(0,0,0);
        }
        this.p.line(this.inputA_X, this.inputA_Y, this.x-15, this.y+15);
        this.p.line(this.x-15, this.y+15, this.x+5, this.y+15);


        // inputB
        if(this.inputB_Value == 1){
            this.p.stroke(255,0,0);
        }else{
            this.p.stroke(0,0,0);
        }
        this.p.line(this.inputB_X, this.inputB_Y, this.x-15, this.y+45);
        this.p.line(this.x-15, this.y+45, this.x+5, this.y+45);
        

        //  output
        if((this.inputA_Value == 1)&&(this.inputB_Value == 1)){
            this.outputValue = 1;
            this.p.stroke(255, 0, 0);
        }else{
            this.outputValue = 0;
            this.p.stroke(0, 0, 0);
        }
        this.p.line(this.x+70, this.y+28, this.outputX, this.outputY);

        // and gate
        this.p.strokeWeight(8);
        this.p.stroke(0, 0, 0);
        this.p.ellipse(this.x+40, this.y+30, 60, 60);
        this.p.rect(this.x+10, this.y, 30, 60);
        this.p.noStroke();
        this.p.ellipse(this.x+40, this.y+30, 60, 60);
        this.p.rect(this.x+10, this.y, 30, 60);
        
    }
}
