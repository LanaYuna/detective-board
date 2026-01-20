const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext("2d");
// fillRect(x, y, width, height);
c.fillRect(100, 100, 300, 300);

console.log(canvas);