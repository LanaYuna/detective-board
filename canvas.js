const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext("2d");
// c.fillStyle = "rgba(255, 0, 0, 0.5)"; 
// // fillRect(x, y, width, height);
// c.fillRect(100, 100, 200, 200);
// c.fillRect(200, 400, 200, 200);

// // Lines
// c.beginPath();
// c.moveTo(500, 500);
// c.lineTo(700, 200);
// c.lineTo(800, 500);
// c.lineTo(1000, 200);
// c.strokeStyle = "#fa34a3";
// c.stroke();


// for(let i= 0; i <= 60; i++){
//     // Arcs/ circles
//     // arc(x, y, radius, startAngle, endAngle, drawCounterClowise(boolean))
//     let x = Math.random() * window.innerWidth;
//     let y = Math.random() * window.innerHeight;
//     c.beginPath();
//     c.arc(x, y, 50, 0, Math.PI * 2, false); 
//     c.strokeStyle = 'blue';
//     c.stroke();
// }   

let x = 60;
let y = 200
let dx = 10;
let dy = 10;
let radius = 60;

function animate(){
    requestAnimationFrame(animate);

    c.clearRect(0, 0, innerWidth, innerHeight); // Não redesenhar círculos
    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI * 2, false);
    c.stroke();

    if(x + radius > innerWidth || x - radius < 0){
        dx = -dx;
    }

    if(y + radius > innerHeight || y - radius < 0){
        dy = -dy;
    }

    x += dx;
    y += dy;
}

animate();  