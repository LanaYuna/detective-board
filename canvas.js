// const canvas = document.querySelector("canvas");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// const c = canvas.getContext("2d");
// c.fillStyle = "rgba(255, 0, 0, 0.5)"; 
// // c.fillRect(x, y, width, height);
// c.fillRect(100, 100, 200, 200);
// c.fillRect(200, 400, 200, 200);

// // // Lines
// // c.beginPath();
// // c.moveTo(500, 500);
// // c.lineTo(700, 200);
// // c.lineTo(800, 500);
// // c.lineTo(1000, 200);
// // c.strokeStyle = "#fa34a3";
// // c.stroke();


// // for(let i= 0; i <= 60; i++){
// //     // Arcs/ circles
// //     // arc(x, y, radius, startAngle, endAngle, drawCounterClowise(boolean))
// //     let x = Math.random() * window.innerWidth;
// //     let y = Math.random() * window.innerHeight;
// //     c.beginPath();
// //     c.arc(x, y, 50, 0, Math.PI * 2, false); 
// //     c.strokeStyle = 'blue';
// //     c.stroke();
// // }   

// let mouse = {
//     x: undefined,
//     y: undefined
// };

// window.addEventListener("mousemove", function(event){
//     mouse.x = event.x;
//     mouse.y = event.y;
//     console.log(mouse)
// })


// function Circle(x, y, radius, dx, dy){
//     this.x = x;
//     this.y = y;
//     this.dx = dx;
//     this.dy = dy;
//     this.radius = radius;

//     this.draw = function() {
//         c.beginPath();
//         c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//         c.strokeStyle = 'pink';
//         c.stroke();
//     }

//     this.update = function(){
//         if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
//             this.dx = -this.dx;
//         }

//         if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
//             this.dy = -this.dy;
//         }

//         this.x += this.dx;
//         this.y += this.dy;

//         this.draw();
//     }
// }

// let circleArray = [];

// for(let i=0; i < 100; i++){
//     let x = Math.random() * innerWidth;
//     let y = Math.random() * innerHeight;
//     let dx = Math.random() * 0.5;
//     let dy = Math.random() * 0.5;
//     let radius = 60;
    
//     circleArray.push(new Circle(x, y, radius, dx, dy));
// }

// console.log(circleArray);

// function animate(){
//     requestAnimationFrame(animate);

//     c.clearRect(0, 0, innerWidth, innerHeight); // Não redesenhar círculos
    
//     for(let i=0; i < circleArray.length; i++){
//         circleArray[i].update();
//     }
// }

// animate();  