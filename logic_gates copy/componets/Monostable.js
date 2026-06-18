export default class Monostable {
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
        this.iterationCounter = 0;
        this.inputColor = this.p.color(0, 0, 0);
        this.outputColor = this.p.color(0, 0, 0)
    }

    Update(x, y, input = null){
        this.x = x;
        this.y = y;

        this.inputX = this.x-25;
        this.inputY = this.y;

        this.outputX = this.x+75;
        this.outputY = this.y;

        this.inputX = input.outputX;
        this.inputY = input.outputY;
        this.outputValue = 0;

        if(input.outputValue == 1){
            this.inputColor = this.p.color(255, 0, 0);
            this.outputColor = this.p.color(0, 0, 0)
            if(this.iterationCounter < 1){
                this.outputValue = 1;
                this.outputColor = this.p.color(255, 0, 0)
                this.iterationCounter ++;
            }
        }else{
            this.inputColor = this.p.color(0, 0, 0);
            this.iterationCounter = 0;
        }

        // wire to terminal
        this.p.stroke(this.inputColor);
        this.p.strokeWeight(3);
        this.p.line(this.inputX, this.inputY, this.x-25, this.y);
        this.p.line(this.x, this.y, this.x-25, this.y);
        this.p.stroke(0,0,0);
        this.p.fill(255,255,255);

        // monostable
        this.p.rect(this.x, this.y-25, 55, 55);
        this.p.fill(0, 0, 0);
        this.p.strokeWeight(1);
        this.p.stroke(0, 0, 0);
        this.p.textSize(10);
        this.p.text('MONO', this.x+10, this.y);
        this.p.text('STABLE', this.x+5, this.y+10);

        // output wire
        this.p.strokeWeight(3);
        this.p.fill(this.outputColor);
        this.p.stroke(this.outputColor);
        this.p.line(this.x+55, this.y, this.x+75, this.y);
    }

}
