class Game{
  constructor(context,game_height,game_width){
      this.GAME_WIDTH=game_width;
      this.GAME_HEIGHT=game_height;
      this.ctx=context;
      this.bricks=[];
      this.ball=undefined;
  }

  start(){
    this.paddle=new Paddle(this);
    this.ball=new Ball(this,this.paddle);
    this.bricks=[];
    this.level=new Level();
    this.bricks=this.level.buildLevel();
  }

  checkHit(){
    this.bricks.forEach(function(block){
      if(this.ball.position.y<block.position.y+block.height &&
        this.ball.position.y+this.ball.size>block.position.y &&
        this.ball.position.x<=block.position.x+block.width &&
        this.ball.position.x+this.ball.size>=block.position.x){
          block.hit=true;
          this.ball.speed.y=-this.ball.speed.y;
        }
    }.bind(this))
    this.bricks=this.bricks.filter(function(block){
      return !block.hit;
    }.bind(this));
  }



  update(){
    this.ball.update();
    this.checkHit();
  };

  render(){
    this.ctx.clearRect(0,0,this.GAME_WIDTH,this.GAME_HEIGHT);
    this.ball.render(this.ctx);
    this.paddle.render(this.ctx);
    this.bricks.forEach(function(block,index){
      block.render(this.ctx);
    }.bind(this))
  }

}
