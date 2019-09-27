class Paddle{
  constructor(game){
    this.GAME_WIDTH=game.GAME_WIDTH;
    this.GAME_HEIGHT=game.GAME_HEIGHT;
    this.position={
      x:150,
      y:560
    }
    this.height=20;
    this.width=80;
    this.color="green";
    this.speed=15;
  }

  moveRight(){
    if((this.position.x+this.width)<this.GAME_WIDTH){
      this.position.x+=this.speed;
    }
  }

  moveLeft(){
    if(this.position.x>0){
      this.position.x-=this.speed;
    }
  }

  render(ctx){
    ctx.fillStyle=this.color;
    ctx.fillRect(this.position.x,this.position.y,this.width,this.height);
  }
}
