export default class Button {
    constructor(p) {
        this.p = p;
        this.x = 0;
        this.y = 0;
        this.outputValue = 0;
        this.outputX = 0;
        this.outputY = 0;
        this.isMousePressed = false;
    }

    PrintProperties() {
        console.log("x: " + this.x + ", y:" + this.y + ", outputValue: " + this.outputValue);
    }

    Update(x, y, isMousePressed){
        this.x = x;
        this.y = y;
        this.outputX = this.x+20;
        this.outputY = this.y;
        this.isMousePressed = isMousePressed;

        if (this.isMousePressed){
            if ((this.p.mouseX > this.x) && (this.p.mouseX < this.x+40) && (this.p.mouseY > this.y-20) && (this.p.mouseY < this.y)){
                this.ButtonDown();
                return
            }
        }
        this.ButtonUp();
    }

    ButtonDown(){
        this.outputValue = 1;
        this.p.stroke(0, 0, 0);
        this.p.fill(255,255,255)
        this.p.quad(this.x, this.y, this.x+40, this.y, this.x+35, this.y-10, this.x+5, this.y-10);
        this.p.fill(255,0,0)
        this.p.ellipse(this.x+20, this.y-7, 20, 5);
    }

    ButtonUp(){
        this.outputValue = 0;
        this.p.stroke(0, 0, 0);
        this.p.fill(255,255,255)
        this.p.quad(this.x, this.y, this.x+40, this.y, this.x+35, this.y-10, this.x+5, this.y-10);
        this.p.rect(this.x+10, this.y-16, 20, 10);
        this.p.fill(0,0,0)
        this.p.ellipse(this.x+20, this.y-16, 20, 5);
    }
}
