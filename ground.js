class Ground{
  constructor(x,y,w,h){
    var ground_prop={isStatic : true}
    this.body = Bodies.rectangle(x,y,w,h,ground_prop);
    this.width=w;
    this.height=h;
    World.add(world,this.body);


  }

  display(){
     var pos = this.body.position;
     rectMode(CENTER);
     fill("rgb(102,51,0)");
     rect(pos.x,pos.y,this.width,this.height);

  }
}