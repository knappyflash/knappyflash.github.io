export default class Bulb {
    constructor(p) {
        this.p = p;
        this.x = 0;
        this.y = 0;
        this.inputValue = 0;
        this.inputX = 0;
        this.inputY = 0;
    }

    PrintProperties() {
        console.log("x: " + this.x + ", y:" + this.y + ", input: " + this.input);
    }

    Update(x, y, input){
        this.x = x;
        this.y = y;
        this.inputX = input.outputX;
        this.inputY = input.outputY;
        this.inputValue = input.outputValue;
        let bublColor = this.p.color(255, 255, 100);
        let filamentColor = this.p.color(255, 100, 100);
        let inputColor = this.p.color(255, 255, 100);
        let inputWireColor = this.p.color(50,50,100);

        if(this.inputValue == 1){
            bublColor = this.p.color(255, 255, 100);
            filamentColor = this.p.color(255, 100, 100);
            inputColor = this.p.color(255, 0, 0);
            inputWireColor = this.p.color(255,100,100);
        }else{
            bublColor = this.p.color(100, 110, 110);
            filamentColor = this.p.color(0, 0, 0);
            inputColor = this.p.color(100, 110, 110);
            inputWireColor = this.p.color(50,50,100);
        }

        // wire to terminal
        this.p.stroke(inputWireColor);
        this.p.strokeWeight(3);
        this.p.line(this.inputX, this.inputY, this.x, this.y+62)

        // bulb Terminals
        this.p.fill(inputColor);
        this.p.stroke(0, 0, 0);
        this.p.strokeWeight(8);
        this.p.ellipse(this.x, this.y+62, 20, 20);
        this.p.fill(100, 110, 110);
        this.p.rect(this.x-20, this.y+20, 40, 40);
        this.p.strokeWeight(3);
        this.p.line(x-20,y+50,x+10,y+65);
        this.p.line(x-20,y+40,x+20,y+60);
        this.p.line(x-20,y+30,x+20,y+50);
        this.p.line(x-20,y+20,x+20,y+40);

        // bulb
        this.p.strokeWeight(8);
        this.p.fill(bublColor);
        this.p.stroke(filamentColor);
        this.p.ellipse(this.x, this.y, 60, 60);
        this.p.strokeWeight(3);
        this.p.line(x+5,y+30,x+10,y);
        this.p.line(x-5,y+30,x-10,y);
        this.p.noFill()
        this.p.ellipse(this.x-5, this.y, 10, 20);
        this.p.ellipse(this.x, this.y, 10, 20);
        this.p.ellipse(this.x+5, this.y, 10, 20);
        this.p.stroke(0, 0, 0);
        this.p.strokeWeight(8);
        this.p.ellipse(this.x, this.y, 60, 60);
    }
}
