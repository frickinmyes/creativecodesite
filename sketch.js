let M, Y, E, S;
let colors = [
  "#FF4C4C","#FF993A", "#FFCA27", "#89D66F","#50D2FC","#338AFF","#6147FF"
	];
let fontStyles = ["normal","italic"];
let fontFamilies = [
  "Arial Black", "Times New Roman", "Roboto", "Times","American Typewriter","Roboto Mono", "Arial", "Gill Sans", "Baskerville", "Helvetica", "Courier New", "Verdana", "Georgia", "Palatino","Garamond",  "Bookman", "Impact", "Ubuntu Condensed", "Lato",];

let offsetY = 400;
let offsetX = 17;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(8);
  background(0);
  spellmyes();
}

function draw() {
  formatDiv(letter1);
  formatDiv(letter2);
  formatDiv(letter3);
  formatDiv(letter4);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}

function spellmyes() {
  letter1 = createDiv("M");
  formatDiv(letter1);
  letter1.position(width / 2 - offsetX * 2, height / 2 - offsetY);
  letter2 = createDiv("Y");
  formatDiv(letter2);
  letter2.position(width / 2 - offsetX, height / 2 - offsetY);
  letter3 = createDiv("E");
  formatDiv(letter3);
  letter3.position(width / 2, height / 2 - offsetY);
  letter4 = createDiv("S");
  formatDiv(letter4);
  letter4.position(width / 2 + offsetX, height / 2 - offsetY);
}

function formatDiv(div) {
  div.style("font-family", random(fontFamilies));
  div.style("color", random(colors));
  div.style("font-size", "30px");
  div.style("width", "center");
  div.style("text-align", "center");
  div.style("line-height", "192px");
}