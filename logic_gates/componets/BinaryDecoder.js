import ComponetData from "./ComponetData.js";

export default class BinaryDecoder {
    
    constructor(p) {
        this.p = p;
        this.x = 0;
        this.y = 0;

        this.inputs = new Array(4).fill(0);
        this.componentDataArray = [];

        for (let i = 0; i < 8; i++) {
            this.componentDataArray.push(new ComponetData());
        }
    }

    Update(x, y, input1 = null, input2 = null, input4 = null, input8 = null){
        this.x = x;
        this.y = y;

        this.inputs[0] = input1;
        this.inputs[1] = input2;
        this.inputs[2] = input4;
        this.inputs[3] = input8;

        let binStr = "" + this.inputs[0].outputValue + this.inputs[1].outputValue + this.inputs[2].outputValue + this.inputs[3].outputValue
        let decNum = parseInt(binStr,2);

        this.p.fill(255, 255, 255);
        this.p.strokeWeight(3);
        this.p.stroke(0, 0, 0);
        

        let spacing = 15;
        for (let i = 0; i <= 3; i++){
            if(this.inputs[i].outputValue == 0){
                this.p.stroke(0, 0, 0);
            }else{
                this.p.stroke(255, 0, 0);
            }
            this.p.line(this.x, this.y + 6 + (i * spacing), this.x-20, this.y + 6 + (i * spacing));
            this.p.line(this.inputs[i].outputX, this.inputs[i].outputY, this.x-20, this.y + 6 + (i * spacing));
        }

        for (let i = 0; i <= 7; i++){
            this.componentDataArray[i].outputValue = 0;
            this.p.stroke(0, 0, 0);
            if(i+1 == decNum){
                this.componentDataArray[i].outputValue = 1; 
                this.p.stroke(255, 0, 0);
            }
            this.componentDataArray[i].outputX = this.x + 6 + (i * spacing)
            this.componentDataArray[i].outputY  = this.y-20
            this.p.line(this.componentDataArray[i].outputX, this.y, this.componentDataArray[i].outputX, this.componentDataArray[i].outputY);
        }
        this.p.stroke(0, 0, 0);
        this.p.rect(this.x, this.y, 120, 60);

        this.p.strokeWeight(2);
        this.p.fill(0, 0, 0);
        this.p.textSize(20);
        this.p.text('BTD', this.x+35, this.y+30);
        
    }

}
