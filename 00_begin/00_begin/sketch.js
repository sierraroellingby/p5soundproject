'use strict';


let funkSound;
let happySound;
let smoothSound;
let guitarSound;
function preload() {
  soundFormats("mp3");
  funkSound = loadSound("assets/music_zapsplat_funk_brothers.mp3");
  happySound = loadSound("assets/jes_smith_music_a_bright_day.mp3");
  smoothSound = loadSound("assets/music_zapsplat_be_mine.mp3");
  guitarSound = loadSound("assets/bizarre-guitar-daniel_simon.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 0, 255);




fill(255, 0, 0);
rect(500, 70, 50, 600, 10);
fill(255, 128, 0);
rect(550, 70, 50, 600, 10);
fill(255, 247, 0);
rect(600, 70, 50, 600, 10);
fill(36, 196, 0);
rect(650, 70, 50, 600, 10);
fill(8, 8, 255);
rect(700, 70, 50, 600, 10);
fill(152, 8, 255);
rect(750, 70, 50, 600, 10);

}

function draw() {
//show();


}

function mousePressed(){
  //red key
  if (mouseX > 500 && mouseX < 550 && mouseY > 70 && mouseY < 600){
  guitarSound.play();
  }
  //orange key
  if (mouseX > 550 && mouseX < 600 && mouseY >70 && mouseY < 600){
    funkSound.play();
  }
  //yellow key

  if (mouseX > 600 && mouseX < 650 && mouseY >70 && mouseY < 600){
    happySound.play();
  }
  //green key

  //blue key
  if (mouseX > 550 && mouseX < 600 && mouseY >70 && mouseY < 600){
    smoothSound.play();
  }
  //purple key


  //if statements, inside play sound
}
//function funkSound(){
  //if mousePressed
//}
