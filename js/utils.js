function randomNumber(min,max){
  var min= Math.ceil(min);
  var max=Math.floor(max);
  return Math.floor((Math.random()*(max-min))+min);
}

function getRandomColor(){
  let color="#";
  for(var i=0;i<3;i++){
    color+=randomNumber(10,99).toString();
  }
  return color;
}
