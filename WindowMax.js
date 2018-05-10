/*
  This Function gets position of the mouse when an user clicks on the canvas.
*/
function getMousePos(canvas, event) {
  var click = canvas.getBoundingClientRect();
  return {
    x: event.clientX - click.left,
    y: event.clientY - click.top
  };
}

/*
  This Function checks if the user is clicking at the cormaximizeButton buttons for respective behavior.
*/
function isInside(pos, button)  {
  return pos.x > button.x && pos.x < button.x+button.width && pos.y < button.y+button.height && pos.y > button.y
}

var maxWindowFlag = 0;
var minWindowFlag = 0;

var canvas = document.getElementById('Mycanvas');
var context = canvas.getContext('2d');

//Maximize Button identification.
var maximizeButton = {
  x:650,
  y:0,
  width:20,
  height:20
};

//Minimize Button identification.
var minimizeButton = {
  x:630,
  y:0,
  width:20,
  height:20
};

//Close Button identification.
var closeButton = {
  x:670,
  y:0,
  width:20,
  height:20
};

// context.beginPath();
// context.fillRect(0,0,window.innerWidth,window.innerHeight/20); 
// context.fillStyle = '#00FFFF'; 
// context.lineWidth = 2;
// context.strokeStyle = '#000000'; 
// context.stroke();
// context.closePath();

//Draw Maximize Button
context.beginPath();
context.rect(maximizeButton.x,maximizeButton.y,maximizeButton.width,maximizeButton.height); 
context.rect(maximizeButton.x+5,maximizeButton.y+5,maximizeButton.width-10,maximizeButton.height-10);
context.fillStyle = 'blue'; 
context.lineWidth = 2;
context.stroke();
context.closePath();

//Draw Minimize Button
context.beginPath();
context.rect(minimizeButton.x,minimizeButton.y,minimizeButton.width,minimizeButton.height); 
context.fillStyle = '#0000FF'; 
context.lineWidth = 2;
context.stroke();
context.closePath();

context.beginPath();
context.moveTo(minimizeButton.x+7,minimizeButton.y+10);
context.lineTo(minimizeButton.x+15,minimizeButton.y+10);
context.stroke();
context.closePath();

//Draw Close Button
context.beginPath();
context.moveTo(closeButton.x,closeButton.y);
context.lineTo(closeButton.x+20,closeButton.y+20);
context.stroke();
context.closePath();

context.beginPath();
context.moveTo(closeButton.x,closeButton.y+20);
context.lineTo(closeButton.x+20,closeButton.y);
context.stroke();
context.closePath();

context.beginPath();
context.rect(closeButton.x,closeButton.y,closeButton.width,closeButton.height); 
context.fillStyle = '#0000FF'; 
context.lineWidth = 2;
context.strokeStyle = '#000000'; 
context.stroke();
context.closePath();

//Default Window
context.beginPath();
context.fillRect(0,40,window.innerWidth/4,window.innerHeight/4); 
context.fillStyle = '#0000FF'; 
context.lineWidth = 2;
context.strokeStyle = '#000000'; 
context.stroke();
minWindowFlag = 1;
context.closePath();
       
/*
  The below calls the respective methods for maximizing, minimizing or closing windows based on the mouse click
*/
canvas.addEventListener('click', function(evt) {
  var mousePos = getMousePos(canvas, evt);
  debugger;
  if (isInside(mousePos,maximizeButton)) {
    drawMaximizedWindow();
  }
  else if (isInside(mousePos,minimizeButton)) {
    drawMinimizedWindow();
  }
  else if (isInside(mousePos,closeButton)) {
    closeWindow();
  }
}, false);

/*
  This Function maximizes the window.
*/
function drawMaximizedWindow() {
  if (maxWindowFlag === 1) {
    maxWindowFlag = 0;
    context.clearRect(0,40,window.innerWidth,window.innerHeight);
    context.beginPath();
    context.fillRect(0,40,window.innerWidth/4,window.innerHeight/4);
    context.fillStyle = '#0000FF'; 
    context.lineWidth = 2;
    context.strokeStyle = '#000000';
    context.stroke();
    minWindowFlag = 1;
    context.closePath();
  }

  else if (maxWindowFlag === 0) {
    minWindowFlag = 0;
    context.clearRect(0,40,window.innerWidth/4,window.innerHeight/4);
    context.beginPath();
    context.fillRect(0, 40, window.innerWidth, window.innerHeight); 
    context.fillStyle = '#0000FF'; 
    context.lineWidth = 2;
    context.strokeStyle = '#000000'; 
    context.stroke();
    maxWindowFlag = 1;
    context.closePath();
  }
}

/*
  This Function minimizes the window.
*/
function drawMinimizedWindow() { 
  if (minWindowFlag === 1) {
    //Do nothing
    minWindowFlag = 0;
  } 

  else if (minWindowFlag === 0) {
    maxWindowFlag = 0;
    context.clearRect(0,40,window.innerWidth,window.innerHeight);
    context.beginPath();
    context.fillRect(0,40,window.innerWidth/4,window.innerHeight/4); 
    context.fillStyle = '#0000FF'; 
    context.lineWidth = 2;
    context.strokeStyle = '#000000'; 
    context.stroke();
    minWindowFlag = 1;
    context.closePath();
  }
}

/*
  This Function closes the window.
*/
function closeWindow()  {
  if (maxWindowFlag === 1) {
    maxWindowFlag = 2;
    minWindowFlag = 2;
    context.clearRect(0,40,window.innerWidth,window.innerHeight);
  }

  else if (minWindowFlag === 1) {
    maxWindowFlag = 2;
    minWindowFlag = 2;
    context.clearRect(0,40,window.innerWidth/4,window.innerHeight/4);
  } 

  else{
    maxWindowFlag = 2;
    minWindowFlag = 2;
    context.clearRect(0,40,window.innerWidth/4,window.innerHeight/4);
  }

}