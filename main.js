var canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");

var mouseEvent="";
var lastX, lastY;

color="black";
width=1;

canvas.addEventListener("mousedown", mouse_down);

function mouse_down(e){
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    mouseEvent="mousedown";
}

canvas.addEventListener("mouseup", mouse_up);
canvas.addEventListener("mouseleave", mouse_leave);

function mouse_up(e){
    mouseEvent="mouseup";
}

function mouse_leave(e){
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove", mouse_move);

function mouse_move(e){
    currentX=e.clientX-canvas.offsetLeft;
    currentY=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mousedown"){
     ctx.beginPath();
     ctx.strokeStyle=color;
     ctx.lineWidth=width;
     ctx.moveTo(lastX, lastY);
     ctx.lineTo(currentX, currentY);
     ctx.stroke();
    }

    lastX=currentX;
    lastY=currentY;
}

function clearArea(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}