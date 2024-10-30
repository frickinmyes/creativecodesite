 //let choice= floor(random(4));
 let walker;
 let trunksimg;
 function preload(){
 trunksimg= loadImage("treetrunks.png")
 }

 function setup() {
   createCanvas(windowWidth, windowHeight);
   walker = new Walker();
   frameRate(20)
   trunksimg.resize(windowWidth,windowHeight);
   imageMode(CORNER)
   fullscreen()
 }
 function draw() {
   background(0,10); 
   image(trunksimg,0,0);
   walker.step();
   walker.show();
 }
 
 
 class Walker {
   //properties
 
   constructor() {
     this.x= width/2;
     this.y= height/2;
     this.speed=(random(10,20))
   }
   show(){
     stroke(255,255,80)
     //point(0)
     //text('myes', this.x,this.y)
    strokeWeight(random(3,5))
     point(this.x,this.y)
     //ellipse(this,x,this.y,5,10)
   //show and step are arbitary methods that act as functions, they live inside classes
     
   }
   step(){
     
     let rX= random(-this.speed,this.speed)
     let rY= random(this.speed,-this.speed)
     
     this.x+=rX
     this.y+=rY
     
 
   let choice = floor(random(5));
 
 if (choice===0){
   this.x++;
 } else if (choice===1){this.x--;
 } else if (choice===2){this.y++;}
   else if (choice===3){this.y^2}
 else {this.y--}}
  }
 