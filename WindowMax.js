var canvas = document.getElementById("Mycanvas"),
        ctx = canvas.getContext('2d'),
        rect = {},
        drag = false,
        mouseX,
        mouseY,
        closeEnough = 10,
        dragTL = dragBL = dragTR = dragBR = false;

    function init() {
        canvas.addEventListener('mousedown', mouseDown, false);
        canvas.addEventListener('mouseup', mouseUp, false);
        canvas.addEventListener('mousemove', mouseMove, false);

        rect = {
            startX: 100,
            startY: 200,
            w: 300,
            h: 200
        }
    }

    function mouseDown(e) {
        mouseX = e.pageX - this.offsetLeft;
        mouseY = e.pageY - this.offsetTop;

        // if there isn't a rect yet
        if (rect.w === undefined) {
            rect.startX = mouseY;
            rect.startY = mouseX;
            dragBR = true;
        }
        else if (checkCloseEnough(mouseX, rect.startX) && checkCloseEnough(mouseY, rect.startY)) {
            dragTL = true;
        }
     
        else if (checkCloseEnough(mouseX, rect.startX + rect.w) && checkCloseEnough(mouseY, rect.startY)) {
            dragTR = true;

        }

        else if (checkCloseEnough(mouseX, rect.startX) && checkCloseEnough(mouseY, rect.startY + rect.h)) {
            dragBL = true;

        }
      
        else if (checkCloseEnough(mouseX, rect.startX + rect.w) && checkCloseEnough(mouseY, rect.startY + rect.h)) {
            dragBR = true;

        }
        else {
          //EMPTY FOR NOW
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        draw();

    }

    function checkCloseEnough(p1, p2) {
        return Math.abs(p1 - p2) < closeEnough;
    }

    function mouseUp() {
        dragTL = dragTR = dragBL = dragBR = false;
    }

    function mouseMove(e) {
        mouseX = e.pageX - this.offsetLeft;
        mouseY = e.pageY - this.offsetTop;
        if (dragTL) {
            rect.w += rect.startX - mouseX;
            rect.h += rect.startY - mouseY;
            rect.startX = mouseX;
            rect.startY = mouseY;
        } else if (dragTR) {
            rect.w = Math.abs(rect.startX - mouseX);
            rect.h += rect.startY - mouseY;
            rect.startY = mouseY;
        } else if (dragBL) {
            rect.w += rect.startX - mouseX;
            rect.h = Math.abs(rect.startY - mouseY);
            rect.startX = mouseX;
        } else if (dragBR) {
            rect.w = Math.abs(rect.startX - mouseX);
            rect.h = Math.abs(rect.startY - mouseY);
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        draw();
    }

    function draw() {
        ctx.fillStyle = "#222222";
        ctx.canvas.width  = window.innerWidth;
        ctx.canvas.height = window.innerHeight;
        ctx.fillRect(rect.startX, rect.startY, rect.w, rect.h);
       
    }

    init();