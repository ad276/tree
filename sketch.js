var garden,rabbit,apple,orangeLeaf,redLeaf;

var gardenImg,rabbitImg,carrotImg,orangeImg,redImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  
  appleImg = loadImage("apple.png");
orangeLeaf = loadImage("orangeLeaf.png");
  redImg = loadImage("redImg.png");
}
function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  //boy moving on Xaxis with mouse
  rabbit.X=world.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}
var select_spirtes=Math.round(random(1,3));

if(frameCount% 80==0){
 if (select_spirtes==1){
   createApples(),
 }else if(select_spirtes==2){
   createOrange();
 }else  if (select_sprites==3){
   createRed();
 }
}
}  
   function=createApples(){
  apple=createSprite(random(50,350),40,10,10);
apple.addImage(appleImg);
apple.scal=0.07;
apple.velocity Y =3;
apple.lifetime=150;

}
    
function=createApples(){
  apple=createSprite(random(50,350),40,10,10);
orangeL.addImage(orangeImg);
orangel.scale=0.08;
orangeL.velocity Y =3;
orangeL.lifetime=150;


}   
function=createRed(){
 redL=createSprite(random(50,350),40,10,10);
redL.addImage(redImg);
redL.scale=0.06;
redL.velocity Y =3;
redL.lifetime=150;

}    
    
    
    
    
    
    
    
    
