import "./style.css";

const canvas = document.querySelector("canvas") as HTMLCanvasElement;
const c = canvas.getContext("2d");

// Experimenting with canvas size and styles
canvas.width = 1024;
canvas.height = 576;

c.fillStyle = "white";
c?.fillRect(0, 0, canvas.width, canvas.height);
c.fillStyle = "red";
c?.fillRect(200, 100, 100, 100);

function animate() {
	window.requestAnimationFrame(animate);
}

animate();
