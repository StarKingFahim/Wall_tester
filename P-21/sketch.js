var bullet, wall; 
var bulletImg;
//var safeimg,lethalimg,averageimg,mainimg;
var speed, weight, thickness; 
//var crash,crashSound;
var damage;

function preload()
{

 bulletImg=loadImage("bullet.png");
 //safeimg=loadImage("safe car.jpg");
 //averageimg=loadImage("average car.jpg");
 //lethalimg=loadImage("Lethal Car.jpg");

 //crashSound=loadSound("crash.wav");

}

function setup() 
{

  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  
  bullet=createSprite(50, 200, 50,20);
  bullet.shapeColor="white";
  bullet.addImage(bulletImg);
  bullet.mirrorX(-1);
  bullet.scale=0.5;
  bullet.velocityX=speed;

  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=(80,80,80);

 //crash.addSound(crashSound);
  
   damage=0.5*weight*Math.pow(speed,2)/Math.pow(thickness,3);


}

function draw() 
{
  background("black");


//wall.width/2 is the default and the width is decreased to give the illusion of collision

  if (bullet.x+bullet.width>=wall.x )
    {
    bullet.velocityX=0;

    if(damage>10)
    {
      wall.shapeColor="red";
    }
    else if(damage<=10)
    {
      wall.shapeColor="green";
    }

  }

  drawSprites();
}