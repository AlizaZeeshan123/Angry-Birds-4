class Slingshot{
    constructor(body1,point){
        var options = {
            bodyA:body1,
            pointB:point,
            length:10,
            stiffness:0.04
        }
        this.sling = Matter.Constraint.create(options)
        World.add(world,this.sling)
        this.pointB = point
    }
    display(){
        //line(x1,y1,x2,y2)
        push()
        strokeWeight(4)
        if(this.sling.bodyA){
            line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y)
        }
        pop()
    }
    remove(){
        this.sling.bodyA = null
    }
}