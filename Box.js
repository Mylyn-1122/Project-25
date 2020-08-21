class DustBin{
    constructor(x, y, width, height){
        var option ={
            isStatic:true,
            friction:0.5,
            density:1.2
        }
        this.left = Bodies.rectangle(x - 60, y - 50, height, width, option);
        this.right = Bodies.rectangle(x + 60, y - 50, height, width, option);
        this.bottom = Bodies.rectangle(x, y, width, height, option);
        this.width = width;
        this.height = height;
        World.add(world, this.left);
        World.add(world, this.right);
        World.add(world, this.bottom);
        Matter.Body.setAngle(this.left, 0);
        Matter.Body.setAngle(this.right, 0);
        this.image = loadImage("images/dustbingreen.png");
    }
    display(){
        imageMode(CENTER);
        fill(200);
        stroke(200);
        rect(this.left.position.x, this.left.position.y, 20, 100);
        rect(this.right.position.x, this.right.position.y, 20, 100);
        imageMode(CENTER);
        image(this.image, this.bottom.position.x, this.bottom.position.y - 50, this.width + 20, this.height + 80);


    }
}
