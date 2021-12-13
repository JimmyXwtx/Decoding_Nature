var a;
var Length;// line length
var X1; // First line start point X
var Y1; // First line start point Y
var X2; // First line end point X
var Y2; // First line end point Y
var i; // for counting
var c; // accumulative angle
var colo; //filling color 0
var colo0; //filling color 1

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
    //each array = recurring period of each circulating decimals
    var array01 = [9,4,3,9,2,5,2,3,3,6,4,4,8,5,9,8,1,3,0,8,4,1,1,2,1,4,9,5,3,2,7,1,0,2,8,0,3,7,3,8,3,1,7,7,5,7,0,0,9,3,4,5,7]; //101/107
    var array02 = [9,8,0,5,8,2,5,2,4,2,7,1,8,4,4,6,6,0,1,9,4,1,7,4,7,5,7,2,8,1,5,5,3,3]; //101/103 33
    var array03 = [0,5,9,4]; //101/103 4
    var array04 = [1,4,2,8,5,7]; //1/7 
    var array05 = [3]; //1/3
    var array06 = [0,2,0,4,0,8,1,6,3,2,6,5,3,0,6,1,2,2,4,4,8,9,7,9,5,9,1,8,3,6,7,3,4,6,9,3,8,7,7,5,5,1]; //1/49
    var array07 = [0,0,5,9,1,7,1,5,9,7,6,3,3,1,3,6,0,9,4,6,7,4,5,5,6,2,1,3,0,1,7,7,5,1,4,7,9,2,8,9,9,4,0,8,2,8,4,0,2,3,6,6,8,6,3,9,0,5,3,2,5,4,4,3,7,8,6,9,8,2,2,4,8,5,2,0,7,1]//1/169
    var array08 = [0,3,4,4,8,2,7,5,8,6,2,0,6,8,9,6,5,5,1,7,2,4,1,3,7,9,3,1]//1/29
   var array09 = [0,1,3,6,9,8,6,3]//1/73

    
    var col0 = ['#F16745','#FFC65D','#7BC8A4','#4CC3D9'];
    var col = ["#1CD8D2", "#93EDC7", "#FFFFFF"];

    if (xxx == 0) { //graph one with key a
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
    
    
    if (xxx == 1) { //graph two with key s
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
