class Ball{
  constructor(game,paddle){
    this.position={
      x:250,
      y:300
    }
    this.speed={
      x:5,
      y:5
    }
    this.paddle=paddle;
    this.GAME_WIDTH=game.GAME_WIDTH;
    this.GAME_HEIGHT=game.GAME_HEIGHT;
    this.size=10;
    this.color="blue";
  }

  collide(){
    if(this.position.x<0 || this.position.x+this.size>this.GAME_WIDTH){
      this.speed.x=-this.speed.x;
    }
    if(this.position.y<0 || this.position.y+this.size>this.GAME_HEIGHT){
      this.speed.y=-this.speed.y;
    }
    if(this.position.y<this.paddle.position.y+this.paddle.height &&
      this.position.y+this.size>this.paddle.position.y &&
      this.position.x<=this.paddle.position.x+this.paddle.width &&
      this.position.x+this.size>=this.paddle.position.x)
      {
          this.speed.y=-this.speed.y;
      }

  }

  update(){
    this.position.x+=this.speed.x;
    this.position.y+=this.speed.y;
    this.collide();
  }

  render(ctx){
    ctx.fillStyle=this.color;
    ctx.fillRect(this.position.x,this.position.y,this.size,this.size);
  }
}
