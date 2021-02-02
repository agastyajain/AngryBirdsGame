class Bird extends Base {
    constructor(x, y) {
        super(x, y, 60, 60);
        this.image = loadImage("img/bird.png");
        this.smokeImage = loadImage("img/smoke.png");
        this.Trajectory = [];
    }
    display() {
        super.display();
        var pos = this.body.position;
        var pos1 = [pos.x, pos.y];
        this.Trajectory.push(pos1);
        if (this.body.speed > 5 && pos.x > 230) {
            for (var i = 0; i < this.Trajectory.length; i++) {
                image(this.smokeImage, this.Trajectory[i][0], this.Trajectory[i][1], 10, 10);
            }
        }
    }
}

