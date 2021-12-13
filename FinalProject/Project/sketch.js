let fontRegular,fontRegular0;
let mySound;
var graphnumber;
function setup() {
  back = 0;
  
  createCanvas(windowWidth, windowHeight);
  background(17);
  frame = 60;
  C = new Decimals();
  // C.hello(width / 2-width/15, height / 4, min(width/15,height/15),0,0);
  // graphnumber = 0;
  // graphnumber = 1;
  // C.hello(width / 3+width/12, 3*height / 4, min(width/18,height/18),0,0);
    graphnumber = 8
    //i = 0;
    if (graphnumber == 0) {
      C.hello(width / 2-width/15, height / 4, min(width/15,height/15),0,0);
    }
    if (graphnumber == 1) {
      C.hello(width / 3+width/12, 3*height / 4, min(width/18,height/18),0,0);
    }
    if (graphnumber == 2) {
      C.hello(width / 3+ width/9, 3*height / 4, min(width/10,height/10),0,0);
    }
      if (graphnumber == 3) {
      C.hello(width / 3+ width/5, height /3, min(width/10,height/10),0,0);
    }
    if (graphnumber == 4) {
    C.hello(width /2-width/6, height/2, min(width/2,height/2),0,0);
    }
      if (graphnumber == 5) {
   C.hello(5*width /16, 8*height /12, min(width/50,height/50),0,0);
    }
      if (graphnumber == 6) {
    C.hello(8*width /16, 8*height /12, min(width/25,height/25),0,0);
    }
        if (graphnumber == 7) {
    C.hello(5*width /16, 5*height /12, min(width/20,height/20),0,0);
    }
          if (graphnumber == 8) {
    C.hello(7*width /16, 4*height /12, min(width/6,height/6),0,0);
    }
  frameRate(frame);
  mySound.loop();
}

function draw() {
  frameRate(frame);
  console.log(back)
  push();
  stroke(255)
  strokeWeight(0.01)
  fill(255)
  textSize(min(width/20,height/20))
  textFont(fontRegular);
  text("Charm of Circulating Decimals",width/20,height/14)
  pop();
  push();
  stroke(255)
  strokeWeight(0.01)
  fill(255)
  stroke(255)
  textFont(fontRegular0);
  textSize(min(width/40,height/40))
  text('frameRate',width/20,11*height/24)
  text(frame,width/20,height/2)
  text("A.101/107   S.101/103   D.107/101   F.1/7   G.1/3   H.1/49   J.1/169   K.1/29    L.1/73",width/20,15*height/16)
  text("(Press the Key to select the decimals you want)",width/20,25*height/26)
  
  pop();
  if(back == 0){
  background(17,2.5);
  }

  
  C.createArr(graphnumber);
  

}
// function mouseClicked(){

//   createCanvas(windowWidth, windowHeight);
//   background(17);
//  C = new Decimals();
//     graphnumber = int(random(0, 3));
//     //i = 0;
//     if (i == 0) {
//       C.hello(width / 2-width/15, height / 4, min(width/15,height/15),0,0);
//     }
//     if (i == 1) {
//       C.hello(width / 3+width/12, 3*height / 4, min(width/18,height/18),0,0);
//     }
//     if (i == 2) {
//       C.hello(width / 3+ width/9, 3*height / 4, min(width/10,height/10),0,0);
//     }
//     frameRate(15);


  
// }
function keyTyped() {
  if (key === 'a') {
    background(17)
  graphnumber = 0;
    C.hello(width / 2-width/15, height / 4, min(width/15,height/15),0,0);
  }
    if (key === 's') {
    background(17)
  graphnumber = 1;
    C.hello(width / 3+width/12, 3*height / 4, min(width/18,height/18),0,0);
  }
    if (key === 'd') {
    background(17)
  graphnumber = 2;
     C.hello(width / 3+ width/9, 3*height / 4, min(width/10,height/10),0,0);
  }
    if (key === 'f') {
    background(17)
  graphnumber = 3;
    C.hello(width / 3+ width/5, height /3, min(width/10,height/10),0,0);
  }
      if (key === 'g') {
   //frameRate(10);
    background(17)
  graphnumber = 4;
    C.hello(width /2-width/6, height/2, min(width/2,height/2),0,0);
  }
      if (key === 'h') {
    background(17)
  graphnumber = 5;
    C.hello(5*width /16, 8*height /12, min(width/50,height/50),0,0);
  }
        if (key === 'j') {
    background(17)
  graphnumber = 6;
    C.hello(8*width /16, 8*height /12, min(width/25,height/25),0,0);
  }
          if (key === 'k') {
    background(17)
   graphnumber = 7;
    C.hello(5*width /16, 5*height /12, min(width/20,height/20),0,0);
  }
            if (key === 'l') {
    background(17)
   graphnumber = 8;
    C.hello(7*width /16, 4*height /12, min(width/6,height/6),0,0);
  }
    if (key === 'z') {
  frame = 10;
  }
      if (key === 'x') {
  frame = 20;
  }
      if (key === 'c') {
  frame = 30;
  }
     if (key === 'v') {
  frame = 40;
  }
  if (key === 'b') {
  frame = 50;
  }
    if (key === 'n') {
  frame = 60;
  }
      if (key === 'q') {
  back = 0;
  }
        if (key === 'w') {
  back = 1;
  }
  


}
function keyPressed(){
      if (keyCode === UP_ARROW&&frame <60){
   frame = frame + 1;
  }
      if (keyCode === DOWN_ARROW&& frame > 0){
   frame = frame - 1;
  }
}

function preload() {
  fontRegular = loadFont('AlexBrush-Regular.ttf');
  fontRegular0 = loadFont('Nobile-Medium.ttf');
  soundFormats('mp3');
  mySound = loadSound('bensound-betterdays.mp3');
}



