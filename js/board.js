/*
 * Thanks to http://www.switchonthecode.com/tutorials/creating-a-roulette-wheel-using-html5-canvas
 */

var numbers = [20, 1, 18, 4, 13, 6, 10, 15, 2, 17, 3, 19, 7, 16, 8, 11, 14, 9, 12, 5];
var startAngle = 4.55;
var arc = Math.PI / 10;
var ctx;
var blackColor = "#000000";
var numberColor = "#ffffff";
var maincolors = ["#000000", "#D2CFA6"];
var multipecolors = ["#C41F26", "#42B955"];
var darts = [];
function getMousePos(canvas, evt){
    // get canvas positionr 
    var obj = canvas;
    var top = 0;
    var left = 0;
    while (obj && obj.tagName != 'BODY') {
        top += obj.offsetTop;
        left += obj.offsetLeft;
        obj = obj.offsetParent;
    }
 
    // return relative mouse position
    var mouseX = evt.clientX - left + window.pageXOffset;
    var mouseY = evt.clientY - top + window.pageYOffset;
    return {
        x: mouseX,
        y: mouseY
    };
}

function onclick(x, y)
{
	if(darts.length > 3)
	{
		return;
	}
	var canvas = document.getElementById("board");
  	ctx = canvas.getContext("2d");
    ctx.strokeStyle = "#000000";
	ctx.fillStyle = "#00ff00";
	ctx.beginPath();
	console.log(darts.length)
	ctx.arc(x,y,10,0,Math.PI*2,true);
	ctx.closePath();
	ctx.stroke();
	ctx.fill();
}


function drawboard() {
	
  var canvas = document.getElementById("board");
  
  canvas.addEventListener('click', function(evt){
        var mousePos = getMousePos(canvas, evt);
        darts.push(mousePos);
        ///var message = "Mouse position: " + mousePos.x + "," + mousePos.y;
        onclick(mousePos.x, mousePos.y);
        //var message = "Mouse position: " + mousePos.x + "," + mousePos.y;
        return false;
    }, false);
    
  if (canvas.getContext) {
  	
  	var boardsize = 500;
  	var center = 250;
    var outsideBoard = 200;
    var textRadius = 180;
    var insideBoard = outsideBoard - 25;
    var outsideDouble = insideBoard - 1;
    var insideDouble = outsideDouble - 25 ;
    var outsideFirstBed = insideDouble - 1;
    var insideFirstBed = outsideFirstBed - 50;
    var outsideTreble = insideFirstBed - 1;
    var insideTreble = outsideTreble - 25;
    var outsideSecondBed = insideTreble - 1;
    var insideSecondBed = outsideSecondBed - 60;
    var outerBull = 30;
    var bull = 15;
    
    ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,500,500);
    
    ctx.strokeStyle = "black";
    ctx.lineWidth = 4;
    
    for(var i = 0; i < 20; i++) {
      var angle = startAngle + i * arc;
      
      ctx.fillStyle = blackColor;
      // Outer Board
      ctx.beginPath();
      ctx.arc(center, center, outsideBoard, angle, angle + arc, false);
      ctx.arc(center, center, insideBoard, angle + arc, angle, true);
      ctx.stroke();
      ctx.fill();
      ctx.save();
      //ctx.shadowOffsetX = -1;
      //ctx.shadowOffsetY = -1;
      //ctx.shadowBlur    = 0;
      //ctx.shadowColor   = "rgb(220,220,220)";
      ctx.font = "14pt Calibri";
      ctx.fillStyle = numberColor;
      ctx.translate(250 + Math.cos(angle + arc / 2) * textRadius, 
                    250 + Math.sin(angle + arc / 2) * textRadius);
      ctx.rotate(angle + arc / 2 + Math.PI / 2);
      var text = numbers[i];
      ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
      ctx.restore();
      
      //Doubles 
	  if(i % 2 == 0)
      {
      	ctx.fillStyle = multipecolors[0];
      }
      else
      {
      	ctx.fillStyle = multipecolors[1];
      }
	  ctx.beginPath();
      ctx.arc(center, center, outsideDouble, angle, angle + arc, false);
      ctx.arc(center, center, insideDouble, angle + arc, angle, true);
      ctx.stroke();
      ctx.fill();
      
      //First Bed
      if(i % 2 == 0)
      {
      	ctx.fillStyle = maincolors[0];
      }
      else
      {
      	ctx.fillStyle = maincolors[1];
      }
      ctx.beginPath();
      ctx.arc(center, center, outsideFirstBed, angle, angle + arc, false);
      ctx.arc(center, center, insideFirstBed, angle + arc, angle, true);
      ctx.stroke();
      ctx.fill();
      
      //Trebles 
      if(i % 2 == 0)
      {
      	ctx.fillStyle = multipecolors[0];
      }
      else
      {
      	ctx.fillStyle = multipecolors[1];
      }
	  ctx.beginPath();
      ctx.arc(center, center, outsideTreble, angle, angle + arc, false);
      ctx.arc(center, center, insideTreble, angle + arc, angle, true);
      ctx.stroke();
      ctx.fill();

      //First Bed
      if(i % 2 == 0)
      {
      	ctx.fillStyle = maincolors[0];
      }
      else
      {
      	ctx.fillStyle = maincolors[1];
      }
      ctx.beginPath();
      ctx.arc(center, center, outsideSecondBed, angle, angle + arc, false);
      ctx.arc(center, center, insideSecondBed, angle + arc, angle, true);
      ctx.stroke();
      ctx.fill();
            
    }
    
    //Draw outerbull 
    ctx.strokeStyle = "#000000";
	ctx.fillStyle = multipecolors[1];
	ctx.beginPath();
	ctx.arc(center,center,outerBull,0,Math.PI*2,true);
	ctx.closePath();
	ctx.stroke();
	ctx.fill();
 
 	ctx.strokeStyle = "#000000";
	ctx.fillStyle = multipecolors[0];
	ctx.beginPath();
	ctx.arc(center,center,bull,0,Math.PI*2,true);
	ctx.closePath();
	ctx.stroke();
	ctx.fill();
	
  }
}