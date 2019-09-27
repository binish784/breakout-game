let GAME_WIDTH=600;
let GAME_HEIGHT=600;
let FRAME_RATE=1000/30;

let canvas= document.getElementById("canvas");
let context= canvas.getContext("2d");

let game = new Game(context,GAME_HEIGHT,GAME_WIDTH);

game.start();

let controller= new Controller(game.paddle);

function update(){
    game.update();
}

function render(){
    game.render();
}


let engine= new Engine(FRAME_RATE,update,render);



engine.start();
