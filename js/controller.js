class Controller{
  constructor(game){
    this.paddle=game.paddle;
    window.addEventListener("keydown",function(){
      switch (event.keyCode) {
        case 39:
          this.paddle.moveRight();
          break;
        case 37:
          this.paddle.moveLeft();
          break;
        case 32:
          if(game.state==game.GAME_STATE.MENU || game.state==game.GAME_STATE.GAMEOVER){
            game.state=game.GAME_STATE.RUNNING;
            game.score=0;
            game.start();
          }
      }
    }.bind(this));
    window.addEventListener("keyup",function(){
      switch (event.keyCode) {
        case 39:
          this.paddle.stop();
          break;
        case 37:
          this.paddle.stop();
          break;
      }
    }.bind(this));
  }
}
