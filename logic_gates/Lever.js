export default class Lever {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.outputValue = 0;
        this.outputX = 0;
        this.outputY = 0;
    }

    PrintProperties() {
        console.log("x: " + this.x + ", y:" + this.y + ", outputValue: " + this.outputValue);
    }

    Update(x, y){
        this.x = x;
        this.y = y;
        this.outputX = this.x+15;
        this.outputY = this.y+20;

        if ((mouseX > this.x-15) && (mouseX < this.x+15) && (mouseY > this.y-5) && (mouseY < this.y+20)){
            if(this.outputValue == 1){
                this.outputValue = 0;
            }else{
                this.outputValue = 1;
            }
        }

        let myColor = color(0,0,0);
        stroke(myColor);
        strokeWeight(8);
        if(this.outputValue == 0){
            line(this.x-10,this.y-5,this.x+2,this.y+20);
            myColor = color(0,0,0);
        }else{
            line(this.x+10,this.y-5,this.x+2,this.y+20);
            myColor = color(255,0,0);
        }
        line(this.x-15,this.y+20,this.x+15,this.y+20);
        stroke(myColor);
        strokeWeight(3);
        line(this.x-5,this.y+18,this.outputX,this.outputY);
    }
}
