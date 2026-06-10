export default class Lever {
    constructor(p) {
        this.p = p;
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

        if ((this.p.mouseX > this.x-15) && (this.p.mouseX < this.x+15) && (this.p.mouseY > this.y-5) && (this.p.mouseY < this.y+20)){
            if(this.outputValue == 1){
                this.outputValue = 0;
            }else{
                this.outputValue = 1;
            }
        }

        let myColor = this.p.color(0,0,0);
        this.p.stroke(myColor);
        this.p.strokeWeight(8);
        if(this.outputValue == 0){
            this.p.line(this.x-10,this.y-5,this.x+2,this.y+20);
            myColor = this.p.color(0,0,0);
        }else{
            this.p.line(this.x+10,this.y-5,this.x+2,this.y+20);
            myColor = this.p.color(255,0,0);
        }
        this.p.line(this.x-15,this.y+20,this.x+15,this.y+20);
        this.p.stroke(myColor);
        this.p.strokeWeight(3);
        this.p.line(this.x-5,this.y+18,this.outputX,this.outputY);
    }
}
