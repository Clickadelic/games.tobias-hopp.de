import "./style.css";

const canvas = document.getElementById("game") as HTMLCanvasElement;
// Experimenting with canvas size and styles
canvas.width = 1024;
canvas.height = 576;
canvas.style.backgroundColor = "black";
canvas.style.display = "block";
canvas.style.margin = "0 auto";

const ctx = canvas.getContext("2d");

ctx?.fillRect(10, 10, 50, 50);
