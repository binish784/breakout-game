class Game{
  constructor(context,game_height,game_width){
      this.GAME_WIDTH=game_width;
      this.GAME_HEIGHT=game_height;
      this.ctx=context;
      this.ball=undefined;
      this.score=0;
      this.currentLevel=0;
      this.paddle=new Paddle(this);
      this.ball=new Ball(this,this.paddle);
      this.level=new Level();
      this.levels=this.level.getLevels();
      this.GAME_STATE={
        MENU:0,
        GAMEOVER:1,
        PAUSED:2,
        RUNNING:3
      };

      this.state=this.GAME_STATE.MENU;

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
    this.bricks.forEach(function(block,index){
      if(this.ball.position.y<block.position.y+block.height &&
        this.ball.position.y+this.ball.size>block.position.y &&
        this.ball.position.x<=block.position.x+block.width &&
        this.ball.position.x+this.ball.size>=block.position.x){
          if(block.doubleHit){
            block.doubleHit=false;
          }else{
            block.hit=true;
          }
          this.ball.color=block.color;
          this.score+=1;
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
      this.start();
    }
  }



  update(){

    if(this.state!==this.GAME_STATE.RUNNING) return;

    this.ball.update();
    this.paddle.update();
    this.checkHit();

  };

  render(){

    if(this.state===this.GAME_STATE.MENU){
        this.bricks.forEach(function(block,index){
          block.render(this.ctx);
        }.bind(this))
        this.ctx.fillStyle="#00000038";
        this.ctx.fillRect(0,0,this.GAME_WIDTH,this.GAME_HEIGHT);
        this.ctx.font="50px arial";
        this.ctx.fillStyle="white";
        this.ctx.fillText("BREAK-OUT",150,350);
        this.ctx.font="20px arial";
        this.ctx.fillText("SPACE TO START",200,420);
        this.ball.render(this.ctx);
        this.paddle.render(this.ctx);
        return;
    }

    if(this.state===this.GAME_STATE.GAMEOVER){
        this.renderScore();
        this.bricks.forEach(function(block,index){
          block.render(this.ctx);
        }.bind(this))
        this.ctx.fillStyle="#00000038";
        this.ctx.fillRect(0,0,this.GAME_WIDTH,this.GAME_HEIGHT);
        this.ctx.fillStyle="white";
        this.ctx.font="25px arial";
        this.ctx.fillText("GAME OVER",220,290);
        this.ctx.font="15px arial";
        this.ctx.fillText("Press space to restart",220,350);
        return;
    }


    this.ctx.clearRect(0,0,this.GAME_WIDTH,this.GAME_HEIGHT);
    this.ball.render(this.ctx);
    this.paddle.render(this.ctx);
    this.bricks.forEach(function(block,index){
      block.render(this.ctx);
    }.bind(this))
    this.renderScore();
  }

  renderScore(){
    this.ctx.fillStyle="white";
    this.ctx.font="30px arial";
    this.ctx.fillText(this.score,10,40);
  }

}
