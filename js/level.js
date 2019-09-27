class Level{

  constructor(){
    this.bricks=[];
    this.level1=[
      [1,0,0,1,1,0,1,1,0,1],
      [1,1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1],
      [1,0,0,1,1,1,1,1,0,1],
    ]
  }

  buildLevel(){
    this.level1.forEach(function(row,rowIndex){
      row.forEach(function(value,index){
        if(value==1){
          this.bricks.push(new Brick(35+index*52,rowIndex*15+100));
        }0
      }.bind(this));
    }.bind(this));
    return this.bricks;
  }

}
