var canva;
var gameState="START";
var passer_6;
function preload(){
  c_door =loadImage("Images/closed_door.jpg");
  o_door = loadImage("Images/Opened_door.jpg");
  c =loadImage("Images/Corridor.jpg");
  house = loadImage("Images/H_house.jpg");
  hall=loadImage("Images/Hall2.jpg");
  Man= loadImage("Images/m.png");
  r1=loadImage("Images/Room_1.jpg");
  r2=loadImage("Images/Room_2.jpg");
  r3=loadImage("Images/Room_3.jpg");
  
}

function setup(){
  canvas = createCanvas(1000,800);
  man = createSprite(310,600);
  man.addImage(Man);
  man.scale=0.1;
  passer_1=createSprite(482,586,10,10);
  passer_1.visible=false;
  input=createInput("Enter code .Hint:India got Independence in this year");
  
  man.setCollider("rectangle",-150,0,500,1200);
  man.debug = false
  
}


function draw(){
  background(house);
  text(mouseX+','+mouseY,mouseX,mouseY);
  textSize(40);
  fill("red");
  text("--Grandpa's Treasure--",300,50);
   
  if ( gameState==="START" ){
    if(keyDown("s")){

    
    man.y = man.y-1;
    man.x= man.x+8
    man.scale=  man.scale-0.002;
    }
   
    
}
//if(gameState==="PLAY"){
  if(man.isTouching(passer_1)){
    gameState="PLAY";
     background(c_door);
     text(mouseX+','+mouseY,mouseX,mouseY);
     man.scale=0.3;
     input.style('1500', '700px');
     input.position(310,130);
    
  }
  var abc=input.value();
  if(abc==="1947"){
    passer_1.destroy();
    input.hide();

     background(o_door);
     text(mouseX+','+mouseY,mouseX,mouseY);
     man.scale=0.4;

     if (keyDown(UP_ARROW)){
      man.y = man.y-1;
     // man.x= man.x+1

      man.scale=  man.scale-0.002;
     }    
      
  }
 var passer_2 = createSprite(470,150,100,50);
  passer_2.visible=false;
  if (man.isTouching(passer_2)){
    background(c);
    text(mouseX+','+mouseY,mouseX,mouseY);
    man.scale=0.2;
  man_movement();
  passer_2.destroy();
}

  
 
  var passer_4 =createSprite(190,300,100,300)
  passer_4.visible=false;
if (man.overlap(passer_4)){
    background(r1);
    man.scale=0.3;
 
    text(mouseX+','+mouseY,mouseX,mouseY);
  man_movement();
}
passer_4.destroy();
var passer_5 =createSprite(710,350,30,30)
    passer_5.visible=false;
    passer_5.shapeColor="blue";
if (man.overlap(passer_5)){
  background(r2);

  man.scale=0.4;
console.log(man.x);
  text(mouseX+','+mouseY,mouseX,mouseY);
  man_movement();
  var invsprite1=createSprite(900,200,5,700);
  invsprite1.shapeColor="blue";
  man.collide(invsprite1)
  invsprite1.visible=false;
  man.setCollider("rectangle",0,0,500,1200);
  man.debug = false;
  passer_6.destroy();
}
//}

passer_6 =createSprite(520,265,1,1)
  passer_6.visible=false;
  passer_6.shapeColor="blue";
if (man.overlap(passer_6)){
  background(r3);
  passer_6.width=10;
  passer_6.height=10;
  passer_5.destroy();
var invsprite=createSprite(620,200,5,700);
invsprite.shapeColor="blue";
man.collide(invsprite)

invsprite.visible=false;
  man.scale=0.4;
console.log(man.x);
  text(mouseX+','+mouseY,mouseX,mouseY);
  man_movement();
}
 //passer_5.destroy();
 

 var edges= createEdgeSprites();
   man.collide(edges);
  drawSprites();
  
}
function man_movement(){
  if (keyDown(UP_ARROW)){
    man.scale=  man.scale-0.02;
 }
 if (keyDown(RIGHT_ARROW)){
    man.x =man.x+3;
 }
 if (keyDown(LEFT_ARROW)){
   man.x =man.x-3;
}
if (keyDown(DOWN_ARROW)){
    man.y =man.y+3;
} 
}
