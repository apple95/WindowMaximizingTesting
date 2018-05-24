// Define the global variables
var canvas = document.getElementById('Mycanvas');
var context = canvas.getContext('2d');
context.translate(0.5, 0.5);


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
			// this.drawViewBody();
		}
	},

	/**
	 * Draw the wrapping content of the view
	 * (This will be the full dimensions of the view and draw the background and border)
	 */
	drawViewWrapper: function() {
		context.beginPath();
		context.rect(this.renderDimensions.startPoint.x, this.renderDimensions.startPoint.y, window.innerWidth, window.innerHeight);
		context.fillStyle = "black";
		context.lineWidth = 2;
		context.fill();
		context.closePath();
	},

	/**
	 * Draw the head content of the view (header bar, label, and buttons)
	 */
	drawViewHead: function() {
	// 	//Draw Maximize Button
	// context.beginPath();
	// context.rect(maximizeButton.x,maximizeButton.y,maximizeButton.width,maximizeButton.height); 
	// context.rect(maximizeButton.x+5,maximizeButton.y+5,maximizeButton.width-10,maximizeButton.height-10);
	// context.fillStyle = 'blue'; 
	// context.lineWidth = 2;
	// context.stroke();
	// context.closePath();

//Draw Minimize Button
	context.beginPath();
	context.rect(50, 50, 50, 50); 
	context.fillStyle = "blue"; 
	context.lineWidth = 2;
	context.fill();
	context.closePath();

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
		
	},

	/**
	 * Update the dimensions before drawing
	 */
	setRenderDimensions: function() {
		if (this.open && this.minimized) {
			// set render dimensions to be minimized, relative to the canvas size
		}
		else if (this.open && this.maximized) {
			// set render dimensions to fill the canvas, relative to the current canvas size
		}
		else if (this.open) {
			// set render dimensions to customDimensions
			//renderDimensions = customDimensions;
		}
	},

	/**
	 * Update the user-defined dimensions (usually called while the user is reisizing the view)
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

// Start the loop
render();