class Slingshot {
    constructor(body1, point2) {
        var options = {
            bodyA: body1,
            pointB: point2,
            stiffness: 0.03,
            lenght: 10
        }
        this.Sling = Constraint.create(options);
        this.Sling1 = loadImage("img/sling1.png");
        this.Sling2 = loadImage("img/sling2.png");
        this.Sling3 = loadImage("img/sling3.png");
        World.add(world, this.Sling);
    }

    fly() {
        this.Sling.bodyA = null;
    }

    attach(body1) {
        this.Sling.bodyA = body1;
    }


    display() {
        if (this.Sling.bodyA) {

            var pointA = this.Sling.bodyA.position;
            var pointB = this.Sling.pointB;

            push();
            stroke("rgb(48,22,8)");
            strokeWeight(12);
            if (pointA.x > 235) {
                image(this.Sling3, pointA.x + 30, pointA.y - 10, 15, 30);
                line(pointA.x + 25, pointA.y - 10, pointB.x + 35, pointB.y);
                line(pointA.x + 80, pointA.y, pointB.x - 15, pointB.y);
            }
            else {
                image(this.Sling3, pointA.x - 25, pointA.y - 10, 15, 30);
                line(pointA.x - 25, pointA.y - 10, pointB.x + 35, pointB.y);
                line(pointA.x - 25, pointA.y, pointB.x - 15, pointB.y);
            }

            pop();

        }
       // image(this.Sling1, 230, 98, 50, 200);
       // image(this.Sling2, 198, 115, 50, 100);

    }
} 