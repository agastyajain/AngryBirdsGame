class Pig extends Base {
    constructor(x, y) {
        super(x, y, 80, 80);
        this.image = loadImage("img/enemy.png");
        this.visibility = 255;

    }

    display() {
        if (this.body.speed < 2) {
            super.display();
        } else {
            World.remove(world, this.body);
            push();
            tint(255, this.visibility);
            this.visibility = this.visibility - 2;
            image(this.image, this.body.position.x, this.body.position.y, 80, 80);
            pop();
        }
    }

     score(){
      if(this.visibility<0 && this.visibility>-500){
          score=score+1;
      }
     }
}