// let f1; //global
// let f2;
let eyeImg;
function preload() {
  eyeImg = loadImage("Eyes_cartoon.png")
}

function setup() {
  createCanvas(400, 400);
  f1 = new Face(); //memory store din computer that defiens f as our face
  f2 = new Face();
  frameRate(3);
  //assumed calsses an function automatcally turn blue
  //new is a invocational word that fall the constrcutr function
}

function draw() {

  let f = new Face
  background(220);
  //"." syntax is accessing the prepoerties of something
  f.display();
  //console.log(f.size)
}
//blueprint for a face object
class Face {
  //properties

  constructor() {
    //a function that
    this.size = random(30, 60);
    this.x = random(width);
    this.y = random(height);
    this.skinColor = color(random(256), random(256), random(256));
    this.eyeHeight = (10, 30);
    this.eyeDistane = random(10, 50);
    this.eyeSize = random(4, 12);
    this.eyeColor = color(random(256), random(256), random(256));
  }
  //random (256)= 0-255.99999999999
  //methods
  display() {
    //draw the face
    fill(this.skinColor);
    ellipse(this.x, this.y, this.size);

    //draw the eyes
    // fill(this.eyeColor);
    // ellipse(
    //   this.x - this.eyeDistance / 2,
    //   this.y - this.eyeHeight,
    //   this.eyeSize
    // );
    // ellipse(
    //   this.x + this.eyeDistance / 2,
    //   this.y - this.eyeHeight,
    //   this.eyeSize
    // );

    //fill(0)

    //uniform eyesvvvvvv
    // ellipse(this.x+10,this.y,10,15)
    // ellipse(this.x-10,this.y,10,15)

    // cute confused eyesvvvvvvvv
    //   fill(random(70))
    //   ellipse(this.x+10,this.y,this.size/4)
    //   ellipse(this.x-10,this.y-4,this.size/4)


    image(eyeImg, this.x + 10, this.y, this.size / 4)
    //ellipse(this.x-10,this.y-4,this.size/4)
  }
}
