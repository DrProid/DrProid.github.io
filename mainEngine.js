
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var canvasW = window.innerWidth;
var canvasH = window.innerHeight;
c.width = canvasW;
c.height = canvasH;
var cursorX;
var cursorY;
 
c.addEventListener('mousemove', e => {
    cursorX = e.pageX;
    cursorY = e.pageY;
});

c.addEventListener('mousedown', e => {
    cursorX = e.pageX;
    cursorY = e.pageY;
});

function animate() {
	window.requestAnimationFrame(animate);
	// clear canvas
	ctx.clearRect(0, 0, canvasW, canvasH);
	// draw
	var centerX = canvasW/2;
	var centerY = canvasH/2;
	var distance = Math.sqrt(Math.pow(centerX - cursorX,2)+Math.pow(centerY - cursorY,2));
	ctx.beginPath();
	ctx.arc(cursorX, cursorY, centerX/10, 0, 2 * Math.PI);
	if(distance < 40){
		ctx.fill();
	} else {
		ctx.stroke();
	}
}

window.addEventListener('resize', function() {
	canvasW = window.innerWidth;
	canvasH = window.innerHeight;
	c.width = canvasW;
	c.height = canvasH;
});

animate();