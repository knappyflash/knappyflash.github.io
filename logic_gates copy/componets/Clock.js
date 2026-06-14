export default class Clock {
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
        this.lastSavedTime = Date.now ();
    }

    Update(x, y, input = null, ms){
        this.x = x;
        this.y = y;

        this.inputX = this.x-25;
        this.inputY = this.y;

        this.outputX = this.x+75;
        this.outputY = this.y;

        if(this.GetElapsedTime() > ms){
            this.outputValue = 1 - this.outputValue;
            this.lastSavedTime = Date.now ();
        }
        
        this.inputX = input.outputX;
        this.inputY = input.outputY;
        if(input.outputValue == 1){
            this.outputValue = 0;
        }

        let inputColor = this.p.color(50,50,100);
        let outputColor = this.p.color(255, 0, 0);

        if (this.outputValue === 1) {
            outputColor = this.p.color(255, 0, 0);
            inputColor = this.p.color(0,0,0);
        } else {
            outputColor = this.p.color(0, 0, 0);
            inputColor = this.p.color(255,0,0);
        }

        // wire to terminal
        this.p.stroke(inputColor);
        this.p.strokeWeight(3);
        this.p.line(this.inputX, this.inputY, this.x-25, this.y);
        this.p.line(this.x, this.y, this.x-25, this.y);
        this.p.stroke(0,0,0);
        this.p.fill(255,255,255);

        // clock
        this.p.ellipse(this.x+20, this.y-30, 10, 5);
        this.p.circle(this.x+20, this.y, 50);
        this.p.line(this.x+20, this.y, this.x+20, this.y-12);
        this.p.line(this.x+20, this.y, this.x+37, this.y);
        
        // output wire
        this.p.fill(outputColor);
        this.p.stroke(outputColor);
        this.p.line(this.x+45, this.y, this.x+75, this.y);
    }

    GetElapsedTime(){
            let elapsedTime = (Date.now() - this.lastSavedTime);
            return elapsedTime;
        }

}
