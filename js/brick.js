class Brick{
  constructor(x,y){
    this.height=15;
    this.width=52;
    this.color="red";
    this.position={
      x:x,
      y:y
    }
    this.hit=false;
  }

  render(ctx){
    ctx.strokeStyle=this.color;
    ctx.strokeRect(this.position.x,this.position.y,this.width,this.height);
  }

}
