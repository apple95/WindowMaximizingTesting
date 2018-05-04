function getMousePos(canvas, event) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
}
function isInside(pos, rect){
  return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.heigth && pos.y > rect.y
}

var canvas = document.getElementById('Mycanvas');
var context = canvas.getContext('2d');
var rect = {
  x:650,
  y:0,
  width:20,
  heigth:20
};

var rect2 = {
  x:500,
  y:0,
  width:20,
  heigth:20
};
context.beginPath();
context.rect(650, 0, 20, 20); 
context.fillStyle = '#FFFFFF'; 
context.fillStyle = 'rgba(225,225,225,0.5)';
context.lineWidth = 2;
context.strokeStyle = '#000000'; 
context.stroke();
context.closePath();

context.beginPath();
context.rect(500, 0, 20, 20); 
context.fillStyle = '#FFFFFF'; 
context.fillStyle = 'rgba(225,225,225,0.5)';
context.lineWidth = 2;
context.strokeStyle = '#000000'; 
context.stroke();
context.closePath();


        // context.fillStyle = "#222222";
        // context.canvas.width  = window.innerWidth;
        // context.canvas.height = window.innerHeight;
        // context.beginPath();
        // context.rect(200, 100, 200, 100);
        // context.closePath();

canvas.addEventListener('click', function(evt) {
  var mousePos = getMousePos(canvas, evt);
    debugger;
  if (isInside(mousePos,rect)) {
      draw();
    }

  if (isInside(mousePos,rect2)) {
      draw2();
    }


}, false);


function draw() {
        //clear();
        context.fillStyle = "#222222";
        context.canvas.width  = window.innerWidth;
        context.canvas.height = window.innerHeight;
        context.beginPath();
        context.beginPath();
context.rect(0, 100, window.innerWidth, window.innerHeight); 
context.fillStyle = '#FFFFFF'; 
context.fillStyle = 'rgba(225,225,225,0.5)';
context.lineWidth = 2;
context.strokeStyle = '#000000'; 
context.stroke();
context.closePath();
       
   }


   function draw2() {
        //clear();
       context.beginPath();
       context.rect(200, 100, 200, 100); 
       context.fillStyle = '#FFFFFF'; 
       context.fillStyle = 'rgba(225,225,225,0.5)';
      context.lineWidth = 2;
       context.strokeStyle = '#000000'; 
       context.stroke();
       context.closePath();
       
   }
