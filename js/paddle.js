class Paddle{
  constructor(game){
    this.GAME_WIDTH=game.GAME_WIDTH;
    this.GAME_HEIGHT=game.GAME_HEIGHT;
    this.height=20;
    this.width=80;
    this.color="#ffda24";
    this.max_speed=15;
    this.speed=0;
    this.position={
      x:this.GAME_WIDTH/2-this.width/2,
      y:560
    }
  }

  moveRight(){
    this.speed=this.max_speed;
  }

  moveLeft(){
    this.speed=-this.max_speed;
  }

  resetPosition(){
    this.position={
      x:this.GAME_WIDTH/2-this.width/2,
      y:560
    }
  }

  stop(){
    this.speed=0;
  }

  update(){
    this.position.x+=this.speed;
    if(this.position.x<0){
      this.position.x=0;
    }else if(this.position.x+this.width>this.GAME_WIDTH){
      this.position.x=this.GAME_WIDTH-this.width;
    }
  }

  render(ctx){
    ctx.fillStyle=this.color;
    ctx.fillRect(this.position.x,this.position.y,this.width,this.height);
  }
}
