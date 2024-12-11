//global variables
let song = [];
let playingSong;
let afterSong;
let lastSong;
let durationPlayed;
let fft; //p5 object allows for sound analysis
let colors = [
  "#ed3441",
  "#ffd630",
  "#329fe3",
  "#ffffff",
  "#2ec4b6",
  "#c4071d",
  "#ff9f1c",
  "#174717",
  "#247ba0",
];
let startPos = [];
let walkers = [];
/////////////////////////////////////////////////////////////////////////////////////////

function preload() {
  song.push(loadSound("media/jstfrnds.mp3"));
  song.push(loadSound("media/JeepEagles.mp3"));
  song.push(loadSound("media/OnandOn.mp3"));
  song.push(loadSound("media/song3.mp3"));
  song.push(loadSound("media/Gravitate.mp3"));
  song.push(loadSound("media/Loner.mp3"));
  song.push(loadSound("media/NoContext.mp3"));
  song.push(loadSound("media/produced.mp3"));
}

function doubleClicked() {
  // clear();
  // createCanvas(windowWidth, windowHeight);
  // background(0);
  playingSong = random(song);
  playingSong.play();
  playingSong.duration();
  console.log(playingSong.duration());
}

function keyPressed() {
 // Check if the song is playing
 if (playingSong.isPlaying()) {
  playingSong.pause();
  console.log("paused");
} else {
  playingSong.play();
}
}

////////////////////////////////////////////////////////////////////////////////////////

function setup() {
  //pixelDensity(0.5);
  createCanvas(windowWidth, windowHeight);
  background(0);

  startPos = [
    [random(width), random(height)], // anywhere
    [width, 0], // top right
    [0, 0], // top left
    [width, height], // bottom right
    [0, height], // bottom left (i do not like this one add constraints)
    [width / 2, height / 2], // middle
    [0, random(height)], // anywhere on the left side
    [width, random(height)], // anywhere on the right side
    [random(width), 0], // anywhere on the top
    [random(width), height], // anywhere on the bottom
    [width / 2, height], // bottom middle
    [0, width / 2], // left side middle
    [width, height / 2], // right side middle
    [width / 2, 0], // top middle
  ];

  let chosenStartPos = random(startPos); // Randomly pick a start position from array above
  console.log(windowWidth, windowHeight);
  console.log(chosenStartPos);

  // Create a random number of walkers initially, push them into the array, then draw after
  let numWalkers = floor(random(5, 70));
  for (let i = 0; i < numWalkers; i++) {
    let frequencyIndex = floor(random(256)); // There are 256 frequency bins in fft
    walkers.push(
      new Walker(chosenStartPos[0], chosenStartPos[1], frequencyIndex)
    );
  } // Assign FFT bin to each walker as they are created and pushed

  console.log(numWalkers);

  fft = new p5.FFT(0, 256); // (array of indices "bins"-- range of tones searched for in program)
}

////////////////////////////////////////////////////////////////////////////////////

function draw() {
  for (let i = 0; i < walkers.length; i++) {
    walkers[i].step();
    walkers[i].display();
  }
}

//////////////////////////////////////////////////////////////////////////////////////
//class for walker object
class Walker {
  //properties
  constructor(startX, startY, frequencyIndex) {
    this.x = startX;
    this.y = startY;
    this.color = random(colors); // assign color to each walker
    this.frequencyIndex = frequencyIndex; //to grab from fft data set
    this.stopWalking = false; // is the frequency playing rn
  }
  
  ///////////////////////////////////////////////////////////////////////////////////////
  display() {
    let spectrum = fft.analyze();
    let amp = spectrum[this.frequencyIndex]; // Get the amp of frequency

    stroke(this.color);
    strokeWeight(1);
    fill(this.color);
    point(this.x, this.y); 
  }

  //update{}

  step() {
    let spectrum = fft.analyze();
    let amp = spectrum[this.frequencyIndex]; // Get the amp of frequency
    let stopWalking;

    ///// otional stop if you dont hear it//////
    // if (amp < 5) {
    //   this.stopWalking = true;
    // } else {
    //   this.stopWalking = false;
    // }

    if (this.stopWalking === false) {
      let direction = map(amp, 1, 255, 1, 6); // control "speed" with dramatic range
      let choice = floor(random(5));

      if (choice === 0) {
        this.x += direction;
      } else if (choice === 1) {
        this.x -= direction;
      } else if (choice === 2) {
        this.y -= direction;
      } else if (choice === 3) {
        this.y += direction;
      } else if (choice === 4) {
        // Do nothing --dynamicism
      }
    }

    //check walls
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }
}

// sorta FULLY OPERATIONAL WOOOO!
//vvvvvvvv otpional initiations from experimentation vvvvvvvv

// blur with pixel density
// line and point
// stop walking if
// change color palette? 1/2/3
// change direction
// change song key
// when song ends play next song x milliseconds later
// when song changes clear canvas and start draw cycle again with differnet color scheme
// if mouse is around walker avoid it
// strokeweight change
//low end bump
//masks?

//vvvvvvv//

// if two songs end up playing becuase of a double click-- the button function will not pause the first initial song
//after paused, if playing song =/= a continuation of paused song clear the canvas girl start over
