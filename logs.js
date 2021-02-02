class Log extends Base {
    constructor(x, y,h,a) {
   super(x,y,20,h,a);
   this.image=loadImage("img/wood2.png");
   Matter.Body.setAngle(this.body,a);

    }
  }

