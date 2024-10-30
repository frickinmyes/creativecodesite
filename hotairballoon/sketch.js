let p;
let balloonimg;
let peacefulfieldimg;
function preload(){
balloonimg = loadImage("CuteBalloon.png");
peacefulfieldimg = loadImage ("skybackdrop.jpg")}

function setup() {
  frameRate(18)
  createCanvas(654,900);
  p= new Particle();
  imageMode(CORNER)
  fullscreen()
  //image(peacefulfieldimg,windowWidth,windowHeight, peacefulfieldimg.width,peacefulfieldimg.height);
}

function draw() {
  background(255);
  image(peacefulfieldimg,0,0);
  p.update();
  p.show();
  
}

class Particle{
  
  constructor(){
  this.position= createVector(random(width),random(height/4));
  this.velocity = createVector(random(-2,2),random(-2,2))
  }
  
  //update() is where all the math happens
  update(){
    this.position.add(this.velocity);
  }

  //show is where we display the particle based on what happens in update
show() {
  image(balloonimg,this.position.x, this.position.y,70,70);
}

agecheck(){
  //check top wall
  if(this.position.y<0){
    this.velocity.y*=-1;// reverse the y direction(if its negative, it beceomes positive, and vice versa)
  }
  //check bottom wall
  if (this.position.y>height){
    this.velocity.y*=-1
  }
  //check right
  if(this.position.x<0){
    this.velocity.x*=-1
  }
  //checkleft
  if(this.position.x>width){
    this.velocity.x*=-1
  }
}
}