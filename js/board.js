/*
 * Thanks to http://www.switchonthecode.com/tutorials/creating-a-roulette-wheel-using-html5-canvas
 */

var numbers = [20, 1, 18, 4, 13, 6, 10, 15, 2, 17, 3, 19, 7, 16, 8, 11, 14, 9, 12, 5];
var startAngle = 9;
var arc = Math.PI / 10;
var ctx;
var blackColor = "#000000";
var numberColor = "#ffffff";
var maincolors = ["#B8D430", "#3AB745"];
var multipecolors = ["#B8D430", "#3AB745"];

function drawboard() {
  var canvas = document.getElementById("board");
  if (canvas.getContext) {
    var outsideBoard = 200;
    var insideBoard = outsideBoard - 25;
    var outsideDouble = insideBoard - 1;
    var insideDouble = outsideDouble - 15 ;
    var outsideFirstBed = insideDouble - 1;
    var insideFirstBed = outsideFirstBed - 45;
    var outsideTreble = insideFirstBed - 1;
    var insideTreble = outsideTreble - 15;
    var outsideSecondBed = 129;
    var insideSecondBed = 99;
    var outerBull = 0;
    var bull = 0;
    
    ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,500,500);
    
    ctx.strokeStyle = "black";
    ctx.lineWidth = 4;
    
    for(var i = 0; i < 20; i++) {
      var angle = startAngle + i * arc;
      
      ctx.fillStyle = blackColor;
      // Outer Board
      ctx.beginPath();
      ctx.arc(250, 250, outsideBoard, angle, angle + arc, false);
      ctx.arc(250, 250, insideBoard, angle + arc, angle, true);
      ctx.stroke();
      ctx.fill();
      
      if(i % 2 == 0)
      {
      	ctx.fillStyle = maincolors[0];
      }
      else
      {
      	ctx.fillStyle = maincolors[1];
      }
      //Doubles 
	  ctx.beginPath();
      ctx.arc(250, 250, outsideDouble, angle, angle + arc, false);
      ctx.arc(250, 250, insideDouble, angle + arc, angle, true);
      ctx.stroke();
      ctx.fill();
      
      //Main
      ctx.beginPath();
      ctx.arc(250, 250, outsideFirstBed, angle, angle + arc, false);
      ctx.arc(250, 250, insideFirstBed, angle + arc, angle, true);
      ctx.stroke();
      ctx.fill();
      
      //Trebles 
      
	  ctx.beginPath();
      ctx.arc(250, 250, outsideTreble, angle, angle + arc, false);
      ctx.arc(250, 250, insideTreble, angle + arc, angle, true);
      ctx.stroke();
      ctx.fill();
      
    } 
  }
}