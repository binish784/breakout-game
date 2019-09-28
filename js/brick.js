class Brick{
  constructor(x,y){
    this.height=15;
    this.width=60;
    this.colors=["red","blue","green","yellow","pink"];
    this.color=this.colors[randomNumber(0,6)];
    this.position={
      x:x,
      y:y
    }
    this.doubleHit=(randomNumber(0,10)<9) ? false : true;
    this.hit=false;
  }

  render(ctx){
    if(this.doubleHit){
      ctx.fillStyle=this.color;
      ctx.fillRect(this.position.x,this.position.y,this.width,this.height);
      ctx.strokeStyle="white";
      ctx.strokeRect(this.position.x,this.position.y,this.width,this.height);
    }else{
      ctx.strokeStyle=this.color;
      ctx.strokeRect(this.position.x,this.position.y,this.width,this.height);
    }
  }

}
