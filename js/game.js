class Game{
  constructor(context,game_height,game_width){
      this.GAME_WIDTH=game_width;
      this.GAME_HEIGHT=game_height;
      this.ctx=context;
      this.bricks=[];
      this.ball=undefined;
      this.currentLevel=2;
      this.paddle=new Paddle(this);
      this.ball=new Ball(this,this.paddle);
      this.level=new Level();
      this.levels=this.level.getLevels();
    }

  reset(){
    this.paddle.resetPosition();
    this.ball.resetPosition();
  }

  start(){
    this.reset();
    this.bricks=[];
    this.bricks=this.level.buildLevel(this.currentLevel);
  }

  checkHit(){
    this.bricks.forEach(function(block){
      if(this.ball.position.y<block.position.y+block.height &&
        this.ball.position.y+this.ball.size>block.position.y &&
        this.ball.position.x<=block.position.x+block.width &&
        this.ball.position.x+this.ball.size>=block.position.x){
          if(block.doubleHit){
            block.doubleHit=false;
          }else{
            block.hit=true;
          }
          this.ball.speed.y=-this.ball.speed.y;
        }
    }.bind(this))
    this.bricks=this.bricks.filter(function(block){
      return !block.hit;
    }.bind(this));
    if(this.bricks.length==0){
      if(this.currentLevel+1<this.levels.length){
        this.currentLevel++;
      }else{
        this.currentLevel=0;
      }
      console.log(this.currentLevel);
      this.start();
    }
  }



  update(){
    this.paddle.update();
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
