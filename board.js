const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext("2d");

let drawing = false;

let previousPosition = {
    x: 0,
    y: 0
};

window.addEventListener("mousedown", (event) => {
    drawing = true;
    previousPosition.x = event.offsetX;
    previousPosition.y = event.offsetY;
})

window.addEventListener("mousemove", (event) => {
    if(!drawing) return;

    c.beginPath();
    c.moveTo(previousPosition.x, previousPosition.y);
    c.lineTo(event.offsetX, event.offsetY);
    c.lineCap = 'round';
    c.stroke();
    previousPosition.x = event.offsetX;
    previousPosition.y = event.offsetY;
})

window.addEventListener("mouseup", () => {
    drawing = false;
})