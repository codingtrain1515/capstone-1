var pc;
var walls;
var wallImg;

function preload(){
  wallImg = loadImage('images/tk.jpg')
}


function setup() {
    createCanvas(windowWidth,windowHeight);
    pc = createSprite(width/2,height/2,10,10);
    walls = new  Group();
  }
  
  function draw() {
    background(220);
    createWalls();
    drawSprites();
 
  }
  function keyPressed(){
      if(keyCode ==38){
        pc.y-=5;
      }

  }

  function createWalls(){
      var Topwall =createSprite(width/2,0,width,10);
      var Bottomwall =createSprite(width/2,windowHeight,width,10);
      var Leftwall =createSprite(0,width/2,10,width);
      var Rightwall =createSprite(width,width/2,10,width);
      
     


      walls.add(Topwall);
      walls.add(Bottomwall);
      walls.add(Leftwall);
      walls.add(Rightwall);
  }

  window.addEventListener('mousemove',function(e){
        console.log(`x:${e.x} | y: ${e.y}`)
  })