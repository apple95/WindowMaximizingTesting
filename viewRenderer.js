// Define the global variables
var canvas = document.getElementById('Mycanvas');
var context = canvas.getContext('2d');
context.translate(0.5, 0.5);

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


  //This Function checks if the user is clicking at the cormaximizeButton buttons for respective behavior.

function isInside(pos, x, y, w, h)  {
  return pos.x > x && pos.x < x+w && pos.y < y+h && pos.y > y
}


//Maximize Button identification.
// var maximizeButton = {
//   x:650,
//   y:0,
//   width:20,
//   height:20
// };

// //Minimize Button identification.
// var minimizeButton = {
//   x:630,
//   y:0,
//   width:20,
//   height:20
// };

// //Close Button identification.
// var closeButton = {
//   x:670,
//   y:0,
//   width:20,
//   height:20
// };



// This object holds all the methods pertinent to defining and drawing the view
var sampleView = {
	// The dimensions to reference when drawing the view. These are dynamic and will be updated
	// depending on the view's state (maximized, minimized, etc...)
	renderDimensions: {
		startPoint: {
			x: 0,
			y: 0
		},
		endPoint: {
			x: 0,
			y: 0	
		}
	},

	// Custom dimensions save the last place the user left the view. If maximize or minimize is toggled,
	// these dimensions will persist until the user manually resizes the view.
	customDimensions: {
		startPoint: {
			x: 0,
			y: 0
		},
		endPoint: {
			x: 0,
			y: 0	
		}
	},


	// The view could be set to max even though it has been minimized.
	// These are not mutually exclusive attributes.
	maximized: false,
	minimized: false,
	open: true,


	/**
	 * Updates the view's dimensions and draws the shapes
	 */
	update: function() {
		this.drawCanvas();
		this.setRenderDimensions();
		this.draw();
	},

	/**
	 * Top level draw call for the view object
	 */
	draw: function() {
		if (this.open) {
			// draw the shapes according to the renderDimensions.
			this.drawViewWrapper();
			this.drawViewHead();
			this.drawViewBody();

		}
	},

	drawCanvas: function() {

		context.beginPath();
		context.rect(this.renderDimensions.startPoint.x, this.renderDimensions.startPoint.y, window.innerWidth, window.innerHeight);
		context.fillStyle = "gray";
		context.lineWidth = 2;
		context.fill();
		context.closePath();

	},
	/**
	 * Draw the wrapping content of the view
	 * (This will be the full dimensions of the view and draw the background and border)
	 */
	drawViewWrapper: function() {


		if (this.maximized){
			context.beginPath();
			context.rect(this.renderDimensions.startPoint.x, this.renderDimensions.startPoint.y, this.renderDimensions.endPoint.x, this.renderDimensions.endPoint.y);
			context.fillStyle = "white";
			context.lineWidth = 2;
			context.fill();
			context.closePath();

			context.beginPath();
			context.rect(this.renderDimensions.startPoint.x, this.renderDimensions.startPoint.y, this.renderDimensions.endPoint.x, this.renderDimensions.endPoint.y);
			context.strokeStyle = "black";
			context.lineWidth = 1;
			context.stroke();
			context.closePath();

		} else {
			context.beginPath();
			context.rect(this.renderDimensions.startPoint.x+70, this.renderDimensions.startPoint.y+300, window.innerWidth/4.5, window.innerHeight/2.5);
			context.fillStyle = "white";
			context.lineWidth = 2;
			context.fill();
			context.closePath();

			context.beginPath();
			context.rect(this.renderDimensions.startPoint.x+70, this.renderDimensions.startPoint.y+300, window.innerWidth/4.5, window.innerHeight/2.5);
			context.strokeStyle = "black";
			context.lineWidth = 1;
			context.stroke();
			context.closePath();


		}

	},

	/**
	 * Draw the head content of the view (header bar, label, and buttons)
	 */
	drawViewHead: function() {

		// context.beginPath();
		// context.rect(this.renderDimensions.startPoint.x+70, this.renderDimensions.startPoint.y+300, window.innerWidth/4.5, 30);
		// context.fillStyle = "cyan";
		// context.lineWidth = 2;
		// context.fill();
		// context.closePath();

		if (this.maximized){

			context.beginPath();
			context.rect(this.renderDimensions.startPoint.x+5, this.renderDimensions.startPoint.y+5, this.renderDimensions.endPoint.x/26.6, this.renderDimensions.endPoint.y/26.6);
			context.fillStyle = "cyan";
			context.lineWidth = 1;
			context.fill();
			context.closePath();

			context.beginPath();
			context.strokeStyle = "white";
			context.moveTo(this.renderDimensions.startPoint.x+10, this.renderDimensions.startPoint.y+15);
			context.lineTo(this.renderDimensions.startPoint.x+32, this.renderDimensions.startPoint.y+15);
			context.stroke();
			context.closePath();


			// context.beginPath();
			// context.rect(this.renderDimensions.startPoint.x+107, this.renderDimensions.startPoint.y+305, 180, 30);
			// context.fillStyle = "cyan";
			// context.lineWidth = 1;
			// context.fill();
			// context.closePath();

			// context.beginPath();
			// context.fillStyle = "black"
			// context.font = "10px Arial";
			// context.fillText("ACL VIEW",this.renderDimensions.startPoint.x+177,this.renderDimensions.startPoint.y+320);
			// context.closePath();

			// context.beginPath();
			// context.rect(this.renderDimensions.startPoint.x+289, this.renderDimensions.startPoint.y+305, 30, 30);
			// context.fillStyle = "cyan";
			// context.lineWidth = 1;
			// context.fill();
			// context.closePath();

			// context.beginPath();
			// context.strokeStyle = "white";
			// context.beginPath();
			// context.arc(this.renderDimensions.startPoint.x+306, this.renderDimensions.startPoint.y+320,10,0,2*Math.PI);
			// context.stroke();
			// context.closePath();

			// context.beginPath();
			// context.rect(this.renderDimensions.startPoint.x+321, this.renderDimensions.startPoint.y+305, 30, 30);
			// context.fillStyle = "cyan";
			// context.lineWidth = 1;
			// context.fill();
			// context.closePath();


			// context.beginPath();
			// context.strokeStyle = "white";
			// context.rect(this.renderDimensions.startPoint.x+329, this.renderDimensions.startPoint.y+313,15,15)
			// context.stroke();
			// context.closePath();


		} else{
			context.beginPath();
			context.rect(this.renderDimensions.startPoint.x+75, this.renderDimensions.startPoint.y+305, 30, 30);
			context.fillStyle = "cyan";
			context.lineWidth = 1;
			context.fill();
			context.closePath();

			context.beginPath();
			context.strokeStyle = "white";
			context.moveTo(this.renderDimensions.startPoint.x+80, this.renderDimensions.startPoint.y+320);
			context.lineTo(this.renderDimensions.startPoint.x+100, this.renderDimensions.startPoint.y+320);
			context.stroke();
			context.closePath();


			context.beginPath();
			context.rect(this.renderDimensions.startPoint.x+107, this.renderDimensions.startPoint.y+305, 180, 30);
			context.fillStyle = "cyan";
			context.lineWidth = 1;
			context.fill();
			context.closePath();

			context.beginPath();
			context.fillStyle = "black"
			context.font = "10px Arial";
			context.fillText("ACL VIEW",this.renderDimensions.startPoint.x+177,this.renderDimensions.startPoint.y+320);
			context.closePath();

			context.beginPath();
			context.rect(this.renderDimensions.startPoint.x+289, this.renderDimensions.startPoint.y+305, 30, 30);
			context.fillStyle = "cyan";
			context.lineWidth = 1;
			context.fill();
			context.closePath();

			context.beginPath();
			context.strokeStyle = "white";
			context.beginPath();
			context.arc(this.renderDimensions.startPoint.x+306, this.renderDimensions.startPoint.y+320,10,0,2*Math.PI);
			context.stroke();
			context.closePath();

			context.beginPath();
			context.rect(this.renderDimensions.startPoint.x+321, this.renderDimensions.startPoint.y+305, 30, 30);
			context.fillStyle = "cyan";
			context.lineWidth = 1;
			context.fill();
			context.closePath();


			context.beginPath();
			context.strokeStyle = "white";
			context.rect(this.renderDimensions.startPoint.x+329, this.renderDimensions.startPoint.y+313,15,15)
			context.stroke();
			context.closePath();
		}

	// 	//Draw Maximize Button
	// context.beginPath();
	// context.rect(maximizeButton.x,maximizeButton.y,maximizeButton.width,maximizeButton.height); 
	// context.rect(maximizeButton.x+5,maximizeButton.y+5,maximizeButton.width-10,maximizeButton.height-10);
	// context.fillStyle = 'blue'; 
	// context.lineWidth = 2;
	// context.stroke();
	// context.closePath();

//Draw Minimize Button
	// context.beginPath();
	// context.rect(50, 50, 50, 50); 
	// context.fillStyle = "blue"; 
	// context.lineWidth = 2;
	// context.fill();
	// context.closePath();

	// context.beginPath();
	// context.moveTo(minimizeButton.x+7,minimizeButton.y+10);
	// context.lineTo(minimizeButton.x+15,minimizeButton.y+10);
	// context.stroke();
	// context.closePath();

// //Draw Close Button
// context.beginPath();
// context.moveTo(closeButton.x,closeButton.y);
// context.lineTo(closeButton.x+20,closeButton.y+20);
// context.stroke();
// context.closePath();

// context.beginPath();
// context.moveTo(closeButton.x,closeButton.y+20);
// context.lineTo(closeButton.x+20,closeButton.y);
// context.stroke();
// context.closePath();

// context.beginPath();
// context.rect(closeButton.x,closeButton.y,closeButton.width,closeButton.height); 
// context.fillStyle = '#0000FF'; 
// context.lineWidth = 2;
// context.strokeStyle = '#000000'; 
// context.stroke();
// context.closePath();
	},

	/**
	 * Draw the body content of the view (this will be specific to custom views later)
	 */
	drawViewBody: function() {

		if(this.maximized){
			context.beginPath();
			context.rect(this.renderDimensions.startPoint.x+5, this.renderDimensions.startPoint.y+51, this.renderDimensions.endPoint.x-5, this.renderDimensions.endPoint.y-51);
			context.fillStyle = "black";
			context.lineWidth = 1;
			context.fill();
			context.closePath();

		}else{

			context.beginPath();
			context.rect(this.renderDimensions.startPoint.x+76, this.renderDimensions.startPoint.y+337, (window.innerWidth/4.5)- 10, (window.innerHeight/2.5)- 40);
			context.fillStyle = "black";
			context.lineWidth = 1;
			context.fill();
			context.closePath();
		}



		
	},

	/**
	 * Update the dimensions before drawing
	 */
	setRenderDimensions: function() {
		if (this.open && this.minimized) {
			// set render dimensions to be minimized, relative to the canvas size
			this.renderDimensions.startPoint.x = 0;
			this.renderDimensions.startPoint.y = window.innerHeight-30;
			this.renderDimensions.endPoint.x = window.innerWidth;
			this.renderDimensions.endPoint.y = window.innerHeight;
		}
		else if (this.open && this.maximized) {
			// set render dimensions to fill the canvas, relative to the current canvas size
			this.renderDimensions.startPoint.x = 0;
			this.renderDimensions.startPoint.y = 0;
			this.renderDimensions.endPoint.x = window.innerWidth;
			this.renderDimensions.endPoint.y = window.innerHeight;

		}
		else if (this.open) {
			// set render dimensions to customDimensions
			this.renderDimensions = this.customDimensions;
		}
	},

	/**
	 * Update the user-defined dimensions (usually called while the user is resizing the view)
	 */
	setCustomDimensions: function() {
		// Set custom dimensions to the new resized dimensions
	}

};

/**
 * The render loop. Uses JS's internal frame management and calls itself.
 */
function render() {
	sampleView.update();
	requestAnimationFrame(render);
}

canvas.addEventListener('click', function(evt) {
  //debugger;
  if (isInside(getMousePos(canvas, evt), sampleView.renderDimensions.startPoint.x+321, sampleView.renderDimensions.startPoint.y+305, 30, 30)) {
    //drawMaximizedWindow();
    sampleView.maximized = true;
  }
  // else if (isInside(mousePos,minimizeButton)) {
  //   drawMinimizedWindow();
  // }
  // else if (isInside(mousePos,closeButton)) {
  //   closeWindow();
  // }
}, false),

/**
DRAGGING LOGIC GOES HERE
*/

// dragElement(document.getElementById(("mydiv")));

// function dragElement(elmnt) {
//   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//   if (document.getElementById(elmnt.id + "header")) {
//     /* if present, the header is where you move the DIV from:*/
//     document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//   } else {
//     /* otherwise, move the DIV from anywhere inside the DIV:*/
//     elmnt.onmousedown = dragMouseDown;
//   }

//   function dragMouseDown(e) {
//     e = e || window.event;
//     // get the mouse cursor position at startup:
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     // call a function whenever the cursor moves:
//     document.onmousemove = elementDrag;
//   }

//   function elementDrag(e) {
//     e = e || window.event;
//     // calculate the new cursor position:
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     // set the element's new position:
//     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//   }

//   function closeDragElement() {
//     /* stop moving when mouse button is released:*/
//     document.onmouseup = null;
//     document.onmousemove = null;
//   }
// }


// Start the loop
render();
