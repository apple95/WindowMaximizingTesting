/*
  This Function gets position of the mouse when an user clicks on the canvas.
*/
function getMousePos(canvas, event) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
}

/*
  This Function checks if the user is clicking at the correct buttons for respective behavior.
*/
function isInside(pos, rect)  {
  return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.heigth && pos.y > rect.y
}

var a = 0;
var b = 0;

var canvas = document.getElementById('Mycanvas');
var context = canvas.getContext('2d');

//Maximize Button identification.
var rect = {
  x:650,
  y:0,
  width:20,
  heigth:20
};

//Minimize Button identification.
var rect2 = {
  x:630,
  y:0,
  width:20,
  heigth:20
};

//Close Button identification.
var rect3 = {
  x:670,
  y:0,
  width:20,
  heigth:20
};

//Maximize Button
context.beginPath();
context.rect(650, 0, 20, 20); 
context.rect(655,5,10,10);
context.fillStyle = '#0000FF'; 
context.lineWidth = 2;
context.strokeStyle = '#000000'; 
context.stroke();
context.closePath();

//Minimize Button
context.beginPath();
context.rect(630, 0, 20, 20); 
context.fillStyle = '#0000FF'; 
context.lineWidth = 2;
context.strokeStyle = '#000000'; 
context.stroke();
context.closePath();

context.beginPath();
context.moveTo(637,10);
context.lineTo(645,10);
context.stroke();
context.closePath();

//Close Button
context.beginPath();
context.moveTo(670,0);
context.lineTo(690,20);
context.stroke();
context.closePath();

context.beginPath();
context.moveTo(670,20);
context.lineTo(690,0);
context.stroke();
context.closePath();

context.beginPath();
context.rect(670, 0, 20, 20); 
context.fillStyle = '#0000FF'; 
context.lineWidth = 2;
context.strokeStyle = '#000000'; 
context.stroke();
context.closePath();

//Default Window
context.beginPath();
context.fillRect(0,100,window.innerWidth/4,window.innerHeight/4); 
context.fillStyle = '#0000FF'; 
context.lineWidth = 2;
context.strokeStyle = '#000000'; 
context.stroke();
b = 1;
context.closePath();
       
/*
  The below calls the respective methods for maximizing, minimizing or closing windows based on the mouse click
*/
canvas.addEventListener('click', function(evt) {
  var mousePos = getMousePos(canvas, evt);
  debugger;
  if (isInside(mousePos,rect)) {
    draw();
  }
  else if (isInside(mousePos,rect2)) {
    draw2();
  }
  else if (isInside(mousePos,rect3)) {
    draw3();
  }
}, false);

/*
  This Function maximizes the window.
*/
function draw() {
  if (a === 1) {
    a = 0;
    context.clearRect(0,100,window.innerWidth,window.innerHeight);
    context.beginPath();
    context.fillRect(0,100,window.innerWidth/4,window.innerHeight/4);
    context.fillStyle = '#0000FF'; 
    context.lineWidth = 2;
    context.strokeStyle = '#000000';
    context.stroke();
    b = 1;
    context.closePath();
  }

  else if (a === 0) {
    b = 0;
    context.clearRect(0,100,window.innerWidth/4,window.innerHeight/4);
    context.beginPath();
    context.fillRect(0, 100, window.innerWidth, window.innerHeight); 
    context.fillStyle = '#0000FF'; 
    context.lineWidth = 2;
    context.strokeStyle = '#000000'; 
    context.stroke();
    a = 1;
    context.closePath();
  }
}

/*
  This Function minimizes the window.
*/
function draw2() { 
  if (b === 1) {
    //Do nothing
    b = 0;
  } 

  else if (b === 0) {
    a = 0;
    context.clearRect(0,100,window.innerWidth,window.innerHeight);
    context.beginPath();
    context.fillRect(0,100,window.innerWidth/4,window.innerHeight/4); 
    context.fillStyle = '#0000FF'; 
    context.lineWidth = 2;
    context.strokeStyle = '#000000'; 
    context.stroke();
    b = 1;
    context.closePath();
  }
}

/*
  This Function closes the window.
*/
function draw3()  {
  if (a === 1) {
    a = 2;
    b = 2;
    context.clearRect(0,100,window.innerWidth,window.innerHeight);
  }

  else if (b === 1) {
    a = 2;
    b = 2;
    context.clearRect(0,100,window.innerWidth/4,window.innerHeight/4);
  } 

  else{
    a = 2;
    b = 2;
    context.clearRect(0,100,window.innerWidth/4,window.innerHeight/4);
  }

}