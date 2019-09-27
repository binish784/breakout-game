class Controller{
  constructor(paddle){
    window.addEventListener("keydown",function(){
      switch (event.keyCode) {
        case 39:
          paddle.moveRight();
          break;
        case 37:
          paddle.moveLeft();
          break;
      }
    })
  }
}
