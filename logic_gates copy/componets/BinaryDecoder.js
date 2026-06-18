export default class BinaryDecoder {
    constructor(p) {
        this.p = p;
        this.x = 0;
        this.y = 0;

        this.input1_Value = 0;
        this.input1_X = 0;
        this.input1_Y = 0;

        this.input2_Value = 0;
        this.input2_X = 0;
        this.input2_Y = 0;

        this.input4_Value = 0;
        this.input4_X = 0;
        this.input4_Y = 0;

        this.input8_Value = 0;
        this.input8_X = 0;
        this.input8_Y = 0;


        this.output1Value = 0;
        this.output1X = 0;
        this.output1Y = 0;

        this.output2Value = 0;
        this.output2X = 0;
        this.output2Y = 0;

        this.output3Value = 0;
        this.output3X = 0;
        this.output3Y = 0;

        this.output4Value = 0;
        this.output4X = 0;
        this.output4Y = 0;

        this.output5Value = 0;
        this.output5X = 0;
        this.output5Y = 0;

        this.output6Value = 0;
        this.output6X = 0;
        this.output6Y = 0;

        this.output7Value = 0;
        this.output7X = 0;
        this.output7Y = 0;

        this.output8Value = 0;
        this.output8X = 0;
        this.output8Y = 0;
    }

    PrintProperties() {
        console.log("x: " + this.x + ", y:" + this.y + ", a: " + this.input1 + ", b: " + this.input2);
    }

    Update(x, y, input1 = null, input2 = null, input4 = null, input8 = null){
        this.x = x;
        this.y = y;

        this.input1_Value = 0;
        this.input1_X = this.x-15;
        this.input1_Y = this.y+40;

        this.input2_Value = 0;
        this.input2_X = this.x-15;
        this.input2_Y = this.y+30;

        this.input4_Value = 0;
        this.input4_X = this.x-15;
        this.input4_Y = this.y+20;

        this.input8_Value = 0;
        this.input8_X = this.x-15;
        this.input8_Y = this.y+10;
        
        if(input1){
            this.input1_Value = input1.outputValue;
            this.input1_X = input1.outputX;
            this.input1_Y = input1.outputY;
        }
        if(input2){
            this.input2_Value = input2.outputValue;
            this.input2_X = input2.outputX;
            this.input2_Y = input2.outputY;
        }

        this.output1X = this.x+20;
        this.output1Y = this.y-15;

        this.p.fill(255, 255, 255);
        this.p.strokeWeight(3);


        // input1
        if(this.input1_Value == 1){
            this.p.stroke(255,0,0);
        }else{
            this.p.stroke(0,0,0);
        }
        this.p.line(this.input1_X, this.input1_Y, this.x-15, this.y+40);
        this.p.line(this.x-15, this.y+40, this.x+5, this.y+40);


        // input2
        if(this.input2_Value == 1){
            this.p.stroke(255,0,0);
        }else{
            this.p.stroke(0,0,0);
        }
        this.p.line(this.input2_X, this.input2_Y, this.x-15, this.y+30);
        this.p.line(this.x-15, this.y+30, this.x+5, this.y+30);

        // inputC
        if(this.input2_Value == 1){
            this.p.stroke(255,0,0);
        }else{
            this.p.stroke(0,0,0);
        }
        this.p.line(this.input2_X, this.input2_Y, this.x-15, this.y+20);
        this.p.line(this.x-15, this.y+20, this.x+5, this.y+20);

        // inputD
        if(this.input2_Value == 1){
            this.p.stroke(255,0,0);
        }else{
            this.p.stroke(0,0,0);
        }
        this.p.line(this.input2_X, this.input2_Y, this.x-15, this.y+10);
        this.p.line(this.x-15, this.y+10, this.x+5, this.y+10);
        

        //  output1
        if((this.input1_Value == 1)&&(this.input2_Value == 1)){
            this.output1Value = 1;
            this.p.stroke(255, 0, 0);
        }else{
            this.output1Value = 0;
            this.p.stroke(0, 0, 0);
        }
        this.p.line(this.output1X, this.output1Y+15, this.output1X, this.output1Y);

        // binary decoder
        this.p.stroke(0, 0, 0);
        this.p.rect(this.x, this.y, 120, 60);
      
        
        
    }
}
