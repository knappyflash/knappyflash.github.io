export default class Bulb {
    constructor() {
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
        console.log(this.input);
        let bublColor = color(255, 255, 100);
        let filamentColor = color(255, 100, 100);
        let inputColor = color(255, 255, 100);
        let inputWireColor = color(50,50,100);

        if(this.inputValue == 1){
            bublColor = color(255, 255, 100);
            filamentColor = color(255, 100, 100);
            inputColor = color(255, 0, 0);
            inputWireColor = color(255,100,100);
        }else{
            bublColor = color(100, 110, 110);
            filamentColor = color(0, 0, 0);
            inputColor = color(100, 110, 110);
            inputWireColor = color(50,50,100);
        }

        // wire to terminal
        stroke(inputWireColor);
        strokeWeight(3);
        line(this.inputX, this.inputY, this.x, this.y+62)

        // bulb Terminals
        fill(inputColor);
        stroke(0, 0, 0);
        strokeWeight(8);
        ellipse(this.x, this.y+62, 20, 20);
        fill(100, 110, 110);
        rect(this.x-20, this.y+20, 40, 40);
        strokeWeight(3);
        line(x-20,y+50,x+10,y+65);
        line(x-20,y+40,x+20,y+60);
        line(x-20,y+30,x+20,y+50);
        line(x-20,y+20,x+20,y+40);

        // bulb
        strokeWeight(8);
        fill(bublColor);
        stroke(filamentColor);
        ellipse(this.x, this.y, 60, 60);
        strokeWeight(3);
        line(x+5,y+30,x+10,y);
        line(x-5,y+30,x-10,y);
        noFill()
        ellipse(this.x-5, this.y, 10, 20);
        ellipse(this.x, this.y, 10, 20);
        ellipse(this.x+5, this.y, 10, 20);
        stroke(0, 0, 0);
        strokeWeight(8);
        ellipse(this.x, this.y, 60, 60);
    }
}
