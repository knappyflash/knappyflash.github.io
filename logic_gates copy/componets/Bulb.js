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

    Update(x, y, input = null, inputValue = -1){
        this.x = x;
        this.y = y;

        this.inputX = this.x;
        this.inputY = this.y;
        this.inputValue = 0;

        if(inputValue > -1){
            this.inputValue = inputValue;
        }

        if(input){
            this.inputX = input.outputX;
            this.inputY = input.outputY;
            this.inputValue = input.outputValue;
        }

        let bublColor = this.p.color(255, 255, 100);
        let filamentColor = this.p.color(255, 100, 100);
        let inputColor = this.p.color(255, 255, 100);
        let inputWireColor = this.p.color(50,50,100);
        let bgColor = this.p.color(150, 150, 200);

        if(this.inputValue == 1){
            bublColor = this.p.color(255, 255, 100);
            filamentColor = this.p.color(255, 100, 100);
            inputColor = this.p.color(255, 0, 0);
            inputWireColor = this.p.color(255,0,0);
        }else{
            bublColor = bgColor;
            filamentColor = this.p.color(0, 0, 0);
            inputColor = this.p.color(100, 110, 110);
            inputWireColor = this.p.color(0,0,0);
        }

        this.p.strokeWeight(3);

        // wire to terminal
        this.p.stroke(inputWireColor);
        this.p.line(this.inputX, this.inputY, this.x, this.y+36)

        // bulb
        this.p.fill(bublColor);
        this.p.stroke(filamentColor);
        this.p.ellipse(this.x, this.y, 30, 40);
        this.p.line(x+3,y+20,x+8,y);
        this.p.line(x-3,y+20,x-8,y);
        this.p.noFill()
        this.p.ellipse(this.x-5, this.y, 5, 10);
        this.p.ellipse(this.x, this.y, 5, 10);
        this.p.ellipse(this.x+5, this.y, 5, 10);
        this.p.stroke(0, 0, 0);
        this.p.ellipse(this.x, this.y, 30, 40);

        // bulb Terminals
        this.p.fill(inputColor);
        this.p.stroke(0, 0, 0);
        this.p.ellipse(this.x, this.y+31, 10, 10);
        this.p.fill(100, 110, 110);
        this.p.rect(this.x-10, this.y+15, 20, 15);
    }
}
