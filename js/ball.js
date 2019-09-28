class Ball{
  constructor(game,paddle){
    this.position={
      x:250,
      y:300
    }
    this.speed={
      x:5,
      y:-5
    }
    this.max_speed=7;
    this.increaseRate=1000;
    this.increaseTimer=this.increaseRate;
    this.paddle=paddle;
    this.GAME_WIDTH=game.GAME_WIDTH;
    this.GAME_HEIGHT=game.GAME_HEIGHT;
    this.size=10;
    this.color="blue";
  }

  resetPosition(){
    this.position={
      x:380,
      y:480
    }
    this.speed={
      x:5,
      y:-5
    }
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

  increaseSpeed(){
    this.increaseTimer-=1;

    if(this.increaseTimer==0){
      if(Math.abs(this.speed.x)!=this.max_speed){
        if(this.speed.x<0){
          this.speed.x-=1;
        }else{
          this.speed.x+=1;
        }
      }

      if(Math.abs(this.speed.y)!=this.max_speed){
        if(this.speed.y<0){
          this.speed.y-=1;
        }else{
          this.speed.y+=1;
        }
      }

      this.increaseTimer=this.increaseRate;
    }
  }

  update(){
    this.position.x+=this.speed.x;
    this.position.y+=this.speed.y;
    this.collide();
    if(this.position.y+this.size>=this.GAME_HEIGHT){
      game.state=game.GAME_STATE.GAMEOVER;
    }
    this.increaseSpeed();
  }

  render(ctx){
    ctx.fillStyle=this.color;
    ctx.fillRect(this.position.x,this.position.y,this.size,this.size);
  }
}
