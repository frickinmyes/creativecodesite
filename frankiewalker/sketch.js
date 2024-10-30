 //let choice= floor(random(4));
 let walker;

 function setup() {
   createCanvas(windowWidth, windowHeight);
   walker = new Walker();
   frameRate(60)
 }
 function draw() {
   background(0,7); 
   walker.step();
   walker.show();
 }
 
 
 class Walker {
   //properties
 
   constructor() {
     this.x= width/2;
     this.y= height/2;
     //this.speed= (random(100,200))
   }
   show(){
     stroke(this.x,this.y,10)
     fill(255,100,70)
     point(0)
     textSize(50)
     text('hi frankie!', this.x,this.y)
     strokeWeight(random(2,5))
     point(this.x,this.y)
   //show and step are arbitary methods that act as functions, they live inside classes
     
   }
   step(){
   let choice = floor(random(5));
 
 if (choice===0){
   this.x++;
 } else if (choice===1){this.x--;
 } else if (choice===2){this.y++;}
   else if (choice===3){this.y^2}
 else {this.y--}
 }
 }