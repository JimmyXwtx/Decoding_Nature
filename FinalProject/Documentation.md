## Documentation of Project The Charm of Circulating Decimals
### Project Intro:
We are all familiar with cyclic decimals in our daily life. Have you ever imagined that the cycle period of each recurring decimal may be a key factor in drawing a beautiful graph? In this project, each graph is made up of line segments of the same length. Each line is drawn on top of the previous one. And the angle is rotated according to the number of digits of the cyclic decimal, and finally, the wonderful image is drawn.
### Proejct basic Working Principle
![image](https://github.com/JimmyXwtx/Decoding_Nature/blob/main/FinalProject/decoding%20nature%20final%20Presentation.png)
### Proejet Presentation
![image](https://github.com/JimmyXwtx/Decoding_Nature/blob/main/FinalProject/pic01.png)
![image](https://github.com/JimmyXwtx/Decoding_Nature/blob/main/FinalProject/pic02.png)
![image](https://github.com/JimmyXwtx/Decoding_Nature/blob/main/FinalProject/pic03.png)
![image](https://github.com/JimmyXwtx/Decoding_Nature/blob/main/FinalProject/pic04.png)
### Project link: [Project](https://editor.p5js.org/JimmyXwtx/full/QK7VJbula)
### How to interact
Use the keyboard to find your favorite graph;

The second line in of the keyboard;

From A to L;

A.101/107   S.101/103   D.107/101   F.1/7   G.1/3   H.1/49   J.1/169   K.1/29    L.1/73;

Z. franeRate = 10; B. franeRate = 20; C. franeRate = 30; V. franeRate = 40; B. franeRate = 50; B. franeRate = 60; 

UpArrow = + frameRate || DownArrow = - frameRate;

Use Q and W to see interesting updates;

### Proejet Progress
#### Process 1

```
//var ages = [9,8,0,5,8,2,5,2,4,2,7,1,8,4,4,6,6,0,1,9,4,1,7,4,7,5,7,2,8,1,5,5,3,3]; //101/103
var ages = [9,4,3,9,2,5,2,3,3,6,4,4,8,5,9,8,1,3,0,8,4,1,1,2,1,4,9,5,3,2,7,1,0,2,8,0,3,7,3,8,3,1,7,7,5,7,0,0,9,3,4,5,7]; //101/103
//var ages = [3]
function setup(){
  createCanvas(windowWidth,windowHeight);
  background(17)
 // frameRate(0);
  
  i = 0;
  c = 0;
  d = windowWidth/50;
  X1 = width/4+100
  Y1 = height/3;
  X2 = width/4+100 + d
  Y2 = height/3;
}
function draw(){
  background(17,2);
  if(i <= 1){
  //console.log(ages[i]);
  a = ages[i]  
  i++;  
  }
  if(i == 1){
    i = 0;
  }
  c = c + a;
  console.log(c);
  if(c <= 1200000){
  stroke(129,216,208);
  //strokeWeight(2)
  line(X1,Y1,X2,Y2);
  X1 = X2;
  Y1 = Y2;
  X2 = X2 + 200*cos(c);
  Y2 = Y2 + 200*sin(c);
  }

  
}
```
In this code, I tried to figure out how can I applied the array to draw the multiple lines.

#### Process 2
```
var graphnumber;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(17);
  frame = 5;
  C = new Decimals();
  // C.hello(width / 2-width/15, height / 4, min(width/15,height/15),0,0);
  // graphnumber = 0;
  // graphnumber = 1;
  // C.hello(width / 3+width/12, 3*height / 4, min(width/18,height/18),0,0);
    graphnumber = int(random(0, 4));
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
  frameRate(frame);
}

function draw() {
 
  //background(17, 2);
  
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
function keyClicked(){
  if(frame == 5){
  frame = 60
  frameRate(frame);
  }
 //    if(frame == 60){
 // frame = 5
 // frameRate(frame);
 //  }
  
}

```
```
var a;
var Length;
var X1;
var Y1;
var X2;
var Y2;
var i;
var c;
var colo;

class Decimals {
  hello(cc,dd,ee,ff,gg) {
    // Length = min(width / 20, height / 20);
    // X1 = random(width / 4, (3 * width) / 4);
    // Y1 = random(height / 3, height / 2);
    X1 = cc;
    Y1 = dd
    Length = ee;
    X2 = X1 + Length;
    Y2 = Y1;
    i = ff;
    c = gg;
  
  }

  // createArr(xxx,X1,Y1,Length){
  createArr(xxx) {
    var array01 = [9,4,3,9,2,5,2,3,3,6,4,4,8,5,9,8,1,3,0,8,4,1,1,2,1,4,9,5,3,2,7,1,0,2,8,0,3,7,3,8,3,1,7,7,5,7,0,0,9,3,4,5,7];
    var array02 = [9,8,0,5,8,2,5,2,4,2,7,1,8,4,4,6,6,0,1,9,4,1,7,4,7,5,7,2,8,1,5,5,3,3]; //101/103 33
    var array03 = [0,5,9,4]; //101/103 4
    var array04 = [1,4,2,8,5,7]; //1/7 33
    //var col = ['#F16745','#FFC65D','#7BC8A4','#4CC3D9'];
    var col = ["#1CD8D2", "#93EDC7", "#FFFFFF"];

    if (xxx == 0) {
      push();
      stroke(255);
      textSize(20);
      text(
        "Press F5 to see different one [101/107=0.943925233644859813084112149532710280373831775700934579439252336448598130841121495327102803738317757]",
        width / 12,
        height / 10
      );
      pop();
      if (i < 52) {
        a = array01[i];
        //console.log(a)
        i++;
       
      }

      if (i == 52) {
        i = 0;
      }
      c = c + a;
      if (c <= 12000) {
        strokeWeight(2);
        stroke(129, random(150, 220), random(208, 255));
        colo = int(random(0, 2));
        //console.log(col[colo])
        //stroke(col[colo])
        line(X1, Y1, X2, Y2);
        X1 = X2;
        Y1 = Y2;
        X2 = X2 + Length * cos(c);
        Y2 = Y2 + Length * sin(c);
        
      }
    }
    
    
    if (xxx == 1) {
      push();
      stroke(255);
      textSize(20);
      text(
        "Press F5 to see different one [101/103=0.9805825242718446601941747572815533]",
        width / 12,
        height / 10
      );
      pop();
      if (i < 33) {
        a = array02[i];

        i++;
        
      }

      if (i == 33) {
        i = 0;
      }
      c = c + a;
      if (c <= 12000) {
        strokeWeight(2);
        stroke(129, random(150, 220), random(208, 255));
        colo = int(random(0, 2));
        //console.log(col[colo])
        //stroke(col[colo])
        line(X1, Y1, X2, Y2);
        X1 = X2;
        Y1 = Y2;
        X2 = X2 + Length * cos(c);
        Y2 = Y2 + Length * sin(c);
      }
    }
    
    
        if (xxx == 2) {
      push();
      stroke(255);
      textSize(20);
      text(
        "Press F5 to see different one [107/101 =0.0594]",
        width / 12,
        height / 10
      );
      pop();
      if (i < 4) {
        a = array03[i];

        i++;
        
      }

      if (i == 4) {
        i = 0;
      }
      c = c + a;
      if (c <= 12000) {
        strokeWeight(2);
        stroke(129, random(150, 220), random(208, 255));
        colo = int(random(0, 2));
        //console.log(col[colo])
        //stroke(col[colo])
        line(X1, Y1, X2, Y2);
        X1 = X2;
        Y1 = Y2;
        X2 = X2 + Length * cos(c);
        Y2 = Y2 + Length * sin(c);
      }
    }
    
    
            if (xxx == 3) {
      push();
      stroke(255);
      textSize(20);
      text(
        "Press F5 to see different one [1/7 =0.142857]",
        width / 12,
        height / 10
      );
      pop();
      if (i < 5) {
        a = array04[i];

        i++;
        
      }

      if (i == 5) {
        i = 0;
      }
      c = c + a;
      if (c <= 12000) {
        strokeWeight(2);
        stroke(129, random(150, 220), random(208, 255));
        colo = int(random(0, 2));
        //console.log(col[colo])
        //stroke(col[colo])
        line(X1, Y1, X2, Y2);
        X1 = X2;
        Y1 = Y2;
        X2 = X2 + Length * cos(c);
        Y2 = Y2 + Length * sin(c);
      }
    }
    
    
  }
}
```
Make this function into class;
#### Process 3
```
var a;
var Length;
var X1;
var Y1;
var X2;
var Y2;
var i;
var c;
var colo;
var colo0;

class Decimals {
  hello(cc,dd,ee,ff,gg) {
    // Length = min(width / 20, height / 20);
    // X1 = random(width / 4, (3 * width) / 4);
    // Y1 = random(height / 3, height / 2);
    X1 = cc;
    Y1 = dd
    Length = ee;
    X2 = X1 + Length;
    Y2 = Y1;
    i = ff;
    c = gg;
  
  }

  // createArr(xxx,X1,Y1,Length){
  createArr(xxx) {
    var array01 = [9,4,3,9,2,5,2,3,3,6,4,4,8,5,9,8,1,3,0,8,4,1,1,2,1,4,9,5,3,2,7,1,0,2,8,0,3,7,3,8,3,1,7,7,5,7,0,0,9,3,4,5,7];
    var array02 = [9,8,0,5,8,2,5,2,4,2,7,1,8,4,4,6,6,0,1,9,4,1,7,4,7,5,7,2,8,1,5,5,3,3]; //101/103 33
    var array03 = [0,5,9,4]; //101/103 4
    var array04 = [1,4,2,8,5,7]; //1/7 33
    var array05 = [3]; //1/7 33
    var array06 = [0,2,0,4,0,8,1,6,3,2,6,5,3,0,6,1,2,2,4,4,8,9,7,9,5,9,1,8,3,6,7,3,4,6,9,3,8,7,7,5,5,1];
    var array07 = [0,0,5,9,1,7,1,5,9,7,6,3,3,1,3,6,0,9,4,6,7,4,5,5,6,2,1,3,0,1,7,7,5,1,4,7,9,2,8,9,9,4,0,8,2,8,4,0,2,3,6,6,8,6,3,9,0,5,3,2,5,4,4,3,7,8,6,9,8,2,2,4,8,5,2,0,7,1]
    var array08 = [0,3,4,4,8,2,7,5,8,6,2,0,6,8,9,6,5,5,1,7,2,4,1,3,7,9,3,1]
   var array09 = [0,1,3,6,9,8,6,3]

    
    var col0 = ['#F16745','#FFC65D','#7BC8A4','#4CC3D9'];
    var col = ["#1CD8D2", "#93EDC7", "#FFFFFF"];

    if (xxx == 0) {
      push();
      stroke(255)
      stroke(255);
      strokeWeight(0.01)
      textSize(min(width/40,height/40));
      fill(255)
      textFont(fontRegular0)
      text(
        "[101/107=0.943925233644859813084112149532710280373831775700934579439252336448598130841121495327102803738317757]",
        width / 20,
        height / 9
      );
      pop();
      if (i < 52) {
        a = array01[i];
        //console.log(a)
        i++;
       
      }

      if (i == 52) {
        i = 0;
      }
      c = c + a;
      if (c <= 120000) {
        strokeWeight(2);
        stroke(random(150, 220), random(208, 255),129);
        colo = int(random(0, 2));
        //console.log(col[colo])
        //stroke(col[colo])
        line(X1, Y1, X2, Y2);
        X1 = X2;
        Y1 = Y2;
        X2 = X2 + Length * cos(c);
        Y2 = Y2 + Length * sin(c);
        
      }
    }
    
    
    if (xxx == 1) {
      push();
      stroke(255)
      stroke(255);
      strokeWeight(0.01)
      textSize(min(width/40,height/40));
      fill(255)
      textFont(fontRegular0)
      text(
        "[101/103=0.9805825242718446601941747572815533]",
        width / 20,
        height / 9
      );
      pop();
      if (i < 33) {
        a = array02[i];

        i++;
        
      }

      if (i == 33) {
        i = 0;
      }
      c = c + a;
      if (c <= 120000) {
        strokeWeight(2);
        stroke(random(150, 220),129,  random(208, 255));
        colo = int(random(0, 2));
        //console.log(col[colo])
        //stroke(col[colo])
        line(X1, Y1, X2, Y2);
        X1 = X2;
        Y1 = Y2;
        X2 = X2 + Length * cos(c);
        Y2 = Y2 + Length * sin(c);
      }
    }
    
    
        if (xxx == 2) {
      push();
       stroke(255)
      stroke(255);
      strokeWeight(0.01)
      textSize(min(width/40,height/40));
      fill(255)
      textFont(fontRegular0)
      text(
        "[107/101 =0.0594]",
        width / 20,
        height / 9
      );
      pop();
      if (i < 4) {
        a = array03[i];

        i++;
        
      }

      if (i == 4) {
        i = 0;
      }
      c = c + a;
      if (c <= 120000) {
        strokeWeight(2);
        stroke(140, random(150, 160), random(180, 255));
        colo = int(random(0, 2));
        //console.log(col[colo])
        //stroke(col[colo])
        line(X1, Y1, X2, Y2);
        X1 = X2;
        Y1 = Y2;
        X2 = X2 + Length * cos(c);
        Y2 = Y2 + Length * sin(c);
      }
    }
    
    
            if (xxx == 3) {
      push();
      stroke(255)
      stroke(255);
      strokeWeight(0.01)
      textSize(min(width/40,height/40));
      fill(255)
      textFont(fontRegular0)
      text(
        "[1/7 =0.142857]",
        width / 20,
        height / 9
      );
      pop();
      if (i < 5) {
        a = array04[i];

        i++;
        
      }

      if (i == 5) {
        i = 0;
      }
      c = c + a;
      if (c <= 120000) {
        strokeWeight(2);
        stroke(random(50, 100), random(208, 255), 150);
        colo = int(random(0, 2));
        //console.log(col[colo])
        //stroke(col[colo])
        line(X1, Y1, X2, Y2);
        X1 = X2;
        Y1 = Y2;
        X2 = X2 + Length * cos(c);
        Y2 = Y2 + Length * sin(c);
      }
    }
    if (xxx == 4) {
      push();
 stroke(255)
      stroke(255);
      strokeWeight(0.01)
      textSize(min(width/40,height/40));
      fill(255)
      textFont(fontRegular0)
      text(
        "[1/3 =0.3]",
        width / 20,
        height / 9
      );
      pop();
      if (i < 1) {
        a = array05[i];

        i++;
        
      }

      if (i == 1) {
        i = 0;
      }
      c = c + a;
      if (c <= 120000) {
        strokeWeight(2);
        stroke(random(150,180), random(150, 220), random(208, 255));
        colo = int(random(0, 2));
        //console.log(col[colo])
        //stroke(col[colo])
        line(X1, Y1, X2, Y2);
        X1 = X2;
        Y1 = Y2;
        X2 = X2 + Length * cos(c);
        Y2 = Y2 + Length * sin(c);
      }
    }
     if (xxx == 5) {
      push();
 stroke(255)
      stroke(255);
      strokeWeight(0.01)
      textSize(min(width/40,height/40));
      fill(255)
      textFont(fontRegular0)
      text(
        "[1/49 =0.020408163265306122448979591836734693877551]",
        width / 20,
        height / 9
      );
      pop();
      if (i < 41) {
        a = array06[i];

        i++;
        
      }

      if (i == 41) {
        i = 0;
      }
      c = c + a;
      if (c <= 120000) {
        strokeWeight(1.5);
        stroke(129, random(150, 220),                   random(208, 255));
        colo = int(random(0, 2));
        //console.log(col[colo])
        stroke(col[colo])
        line(X1, Y1, X2, Y2);
        X1 = X2;
        Y1 = Y2;
        X2 = X2 + Length * cos(c);
        Y2 = Y2 + Length * sin(c);
      }
    }
    if (xxx == 6) {
      push();
       stroke(255)
      stroke(255);
      strokeWeight(0.01)
      textSize(min(width/40,height/40));
      fill(255)
      textFont(fontRegular0)
      text(
        "[1/169 =0.005917159763313609467455621301775147928994082840236686390532544378698224852071]",
        width / 20,
        height / 9
      );
      pop();
      if (i < 77) {
        a = array07[i];

        i++;
        
      }

      if (i == 77) {
        i = 0;
      }
      c = c + a;
      if (c <= 120000) {
        strokeWeight(1.5);
        stroke(129, random(150, 220),                   random(208, 255));
        colo0 = int(random(0, 3));
        console.log(col0[colo0])
        stroke(col0[colo0])
        line(X1, Y1, X2, Y2);
        X1 = X2;
        Y1 = Y2;
        X2 = X2 + Length * cos(c);
        Y2 = Y2 + Length * sin(c);
      }
    }
    
    
       if (xxx == 7) {
      push();
      stroke(255)
      strokeWeight(0.01)
      textSize(min(width/40,height/40));
      fill(255)
      textFont(fontRegular0)
      fill(255)
      text(
        "[1/29 =0.0344827586206896551724137931]",
        width / 20,
        height / 9
      );
      pop();
      if (i < 27) {
        a = array08[i];

        i++;
        
      }

      if (i == 27) {
        i = 0;
      }
      c = c + a;
      if (c <= 120000) {
        strokeWeight(1.5);
        stroke(random(129,200), random(50, 100),  random(50, 100));
        colo = int(random(0, 2));
        //console.log(col[colo])
        //stroke(col[colo])
        line(X1, Y1, X2, Y2);
        X1 = X2;
        Y1 = Y2;
        X2 = X2 + Length * cos(c);
        Y2 = Y2 + Length * sin(c);
      }
    }
    
           if (xxx == 8) {
      push();

      stroke(255);
      strokeWeight(0.01)
      textSize(min(width/40,height/40));
      fill(255)
      textFont(fontRegular0)
      text(
        "[1/73 =0.01369863]",
        width / 20,
        height / 9
      );
      pop();
      if (i < 7) {
        a = array09[i];

        i++;
        
      }

      if (i == 7) {
        i = 0;
      }
      c = c + a;
      if (c <= 120000) {
        strokeWeight(1.5);
        stroke(129, random(150, 220),                   random(208, 255));
        colo = int(random(0, 2));
        //console.log(col[colo])
        //stroke(col[colo])
        line(X1, Y1, X2, Y2);
        X1 = X2;
        Y1 = Y2;
        X2 = X2 + Length * cos(c);
        Y2 = Y2 + Length * sin(c);
      }
    }

    
    
  }
}

```
```
let fontRegular,fontRegular0;
let mySound;
var graphnumber;
function setup() {
  
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
  
  push();
  stroke(255)
  strokeWeight(0.01)
  fill(255)
  textSize(min(width/20,height/20))
  textFont(fontRegular);
  text("Charm of Circulating decimals",width/20,height/14)
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
  background(17,2.5);
  
  
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
```
Finalize the code; Make it more interactive;
