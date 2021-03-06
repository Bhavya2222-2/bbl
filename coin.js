class Coin{
    constructor(x, y, width, height, angle) {
        var options = {
            isStatic:true
        }
        this.body = Bodies.circle(x, y, width, height,40);
        this.width = width;
        this.height = height;
        this.image = loadImage("coins01.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
    }