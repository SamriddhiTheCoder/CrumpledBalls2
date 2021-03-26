class Ground{
    constructor(x, y, width, height) {
        var options = {
            isStatic : true,
            restitution : 0.8,
            friction : 1.0,
            density : 1.0
        }

      this.body = Bodies.rectangle(x, y, 1000, 20, options);
      this.width = 1000;
      this.height = 20;
      
      World.add(world, this.body);
    }

    display(){
        push();
        var pos = this.body.position;
        rectMode(CENTER);
        fill("yellow");
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
}
