//global variables

//for cursor
let cx = 0;
let cy = 0;

//building planets and aesthetic
let planets=[];
let woodcutshade;

//databases printed information for "map"
let systinfnumbers=[];
let systinfletters=[];

//color scheme
let scheme=[[80, 55, 43],[70, 129, 137],[98, 10, 4],[248, 205, 119],[202, 117, 43],[252, 122, 87],[133, 255, 199],[133, 172, 199]]

//print to see how system reads code
console.log(scheme)




function preload() {
  tex1 = loadImage('planet_textures/tex1.png');
  tex2 = loadImage('planet_textures/tex2.png');
  tex3 = loadImage('planet_textures/tex3.png');
  tex4 = loadImage('planet_textures/tex4.png');
  tex5 = loadImage('planet_textures/tex5.png');
  tex6 = loadImage('planet_textures/tex6.png');
  tex7 = loadImage('planet_textures/tex7.png');
  tex8 = loadImage('planet_textures/tex8.png');
}



function setup() {
  createCanvas(400, 400);
    noCursor();
  
  imageMode(CENTER);
  
  
  //how many planets will appear
  let randomPlanets= floor(random(1,9))
  
  for (let i=0;i<randomPlanets;i++) {
    let tempPlanet = new Planet()
    planets.push(tempPlanet);
  }
   let randomNum = (random(1000,99999999)); 
  systinfnumbers.push(randomNum);
  let randomLet = (random["AZ","DGH","GJK"]); 
  systinfletters.push(randomLet);
  
}


function draw() {
  sin(frameCount * 0.01);
 background(0,36,57,90)
  
  //display my classes
  for (let i=0;i<planets.length;i++){
    planets[i].display()   
  }
  

  
  //try and access array of textures
  image(tex3,0,0)
  tex3.resize(900,900);
  
   let maskGraphics = createGraphics(tex3.width, tex3.height);
  maskGraphics.noStroke();
  maskGraphics.ellipse(maskGraphics.width / 2, maskGraphics.height / 2, tex3.width, tex3.height);
  
  maskedImg = tex3.get();
  maskedImg.mask(maskGraphics);
  
  //database information comic display
  rect(width/4,random(300,301),width/2,50)
  fill(5)
  textStyle(BOLDITALIC);
  textSize(16)
  stroke(255);
  text(systinfnumbers,width/4+20,327)
  tint(200,60)
  
    //hpw cursor looks and moves
  //noStroke();
  cx = lerp(cx, mouseX, 0.07);
  cy = lerp(cy, mouseY, 0.07);
  ellipse(cx, cy, 10, 10);
}

//blueprint for the planets
class Planet{
  //physical properties size shape postiton color
  constructor() {
    this.size = random(80, windowWidth/2);
    this.x = random(width);
    this.y = random(height);
    this.soilColor = random(scheme)
    }
  
  
  display() {
    //draw the planet
   fill(this.soilColor);
    ellipse(this.x, this.y, this.size);
    stroke(0);
    strokeWeight(3);
   let interpolate = mouseX;
strokeWeight(noise(map(interpolate,0,1,1000,2000)));
 }
}