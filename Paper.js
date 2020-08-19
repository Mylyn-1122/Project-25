class paper{
    constructor(x, y, radius){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.body = Bodies.circle(x, y, radius, options);
        this.width = radius;
        World.add(world, this.body);
        this.image = loadImage("images/paper.png");

    }

    display(){
        var pos = this.body.position;
        imageMode(RADIUS);
        image(this.image, pos.x, pos.y, this.width + 20, this.width + 20);
    }

}