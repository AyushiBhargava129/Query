

function preload(){
  issImage = loadImage("Docking-undocking/iss.png");
  backgroundImg = loadImage("Docking-undocking/spacebg.jpg");
  spacecraftImg = loadImage("Docking-undocking/spacecraft1.png");
  spacecraftImg2 = loadImage("Docking-undocking/spacecraft2.png");
  spacecraftImg3 = loadImage("Docking-undocking/spacecraft3.png");
  spacecraftImg4 = loadImage("Docking-undocking/spacecraft4.png");
}


function setup() {
  createCanvas(800,400);
  iss = createSprite(300, 200, 50, 50);
  iss.addImage("issImage", issImage);
  iss.scale = 0.5;

  spacecraft = createSprite(250, 300, 50, 50);
  spacecraft.addImage("spacecraftImage", spacecraftImg );
  spacecraft.addImage("spacecraftImg2",spacecraftImg2);
  spacecraft.addImage("spacecraftImg3", spacecraftImg3);
  spacecraft.addImage("spacecraftImg4", spacecraftImg4);
  spacecraft.scale = 0.15;
  spacecraft.debug = true;
}

function draw() {
  background(backgroundImg); 
  
  spacecraft.x = spacecraft.x + random(-1, 1);

  if(keyDown("left")){
    spacecraft.x = spacecraft.x - 2;
    spacecraft.changeImage("spacecraftImg3", spacecraftImg3);
  }
  if(keyDown("right")){
    spacecraft.x = spacecraft.x + 2;
    spacecraft.changeImage("spacecraftImg4", spacecraftImg4);
  }
  if(keyDown("up")){
    spacecraft.y = spacecraft.y - 2;
    spacecraft.changeImage("spacecraftImg2",spacecraftImg2);
  }
  if(keyDown("down")){
    spacecraft.y = spacecraft.y + 2;
    spacecraft.changeImage("spacecraftImg2",spacecraftImg2);
  }

  if(spacecraft.y <= (iss.y+180) && spacecraft.x <= (iss.x-10)){
    textSize(25);
    fill("white");
    text("Docking successful!",200, 300);
    spacecraft.changeImage("spacecraftImage", spacecraftImg);
  }
  drawSprites();
}