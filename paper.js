class Paper{
    constructor(x, y, radius) {
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }

      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      this.image = loadImage('paper.png');
      
      World.add(world, this.body);
    }

    display(){
        var angle = this.body.angle;
        var pos = this.body.position;

        push ();
        translate (this.body.position.x, this.body.position.y);
        rotate (angle);
        
        imageMode(CENTER);
        image(this.image, 0, 0, 45, 45);
        pop();

    }
}