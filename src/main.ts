import "./style.css";
import "./types/index";

const canvas = document.querySelector("canvas") as HTMLCanvasElement;
const c = canvas.getContext("2d");

// Experimenting with canvas size and styles
canvas.width = 1024;
canvas.height = 576;

c.fillStyle = "white";
c?.fillRect(0, 0, canvas.width, canvas.height);
c.fillStyle = "red";
c?.fillRect(200, 100, 100, 100);

// @ts-ignore
class Player implements PlayerProps {
	// @ts-ignore
	constructor(position: PositionProps) {
		// @ts-ignore
		this.position = position;
		// @ts-ignore
		this.velocity = {
			x: 0,
			y: 1
		};
	}

	draw() {
		c.fillStyle = "red";
		// @ts-ignore
		c?.fillRect(this.position.x, this.position.y, 100, 100);
	}

	update() {
		// @ts-ignore
		this.draw();
		// @ts-ignore
		this.position.y++;
	}
}

// @ts-ignore
const player = new Player({
	x: 0,
	y: 100
});

// @ts-ignore
const player2 = new Player({
	x: 200,
	y: 100
});

function animate() {
	window.requestAnimationFrame(animate);

	c.fillStyle = "white";
	c?.fillRect(0, 0, canvas.width, canvas.height);

	player.update();
	player2.update();
}

animate();
