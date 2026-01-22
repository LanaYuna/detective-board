const canvas = document.querySelector("canvas");
const buttonCircle = document.querySelector("#button-circle");
const buttonRectangle = document.querySelector("#button-rectangle");
const buttonPencil = document.querySelector("#button-pencil");

let objects = []; // armazenar em array de objetos para gerenciar estado
let currentTool = 'pincel';

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext("2d");

let drawing = false;
let placeCircle = false;
let placeRectangle = false;

let previousPosition = {
    x: 0,
    y: 0
};

buttonPencil.addEventListener("click", () => {currentTool = 'pencil'})
buttonCircle.addEventListener("click", () => {currentTool = 'circle'});
buttonRectangle.addEventListener("click", () => {currentTool = 'rectangle'})

canvas.addEventListener("mousedown", (event) => {
    const newObject = {
        x : event.offsetX,
        y: event.offsetY,
        type: currentTool,
        color: 'black'
    };

    objects.push(newObject);

    renderDrawing();
})

function renderDrawing(){

    c.clearRect(0, 0, canvas.width, canvas.height); // limpa o quadro

    objects.forEach(obj => { // redesenha a todo momento
        c.beginPath();

        if(obj.type == 'circle'){
            c.arc(obj.x, obj.y, 20, 0, Math.PI * 2, false);
            c.stroke();
        } else if(obj.type == 'rectangle'){
            c.strokeRect(obj.x, obj.y, 20, 20);
        } else if(obj.type == 'pencil'){
            drawing = true;
            previousPosition.x = obj.x;
            previousPosition.y = obj.y;

            canvas.addEventListener("mousemove", (event) => {
                if(!drawing) return;

                c.beginPath();
                c.moveTo(previousPosition.x, previousPosition.y);
                c.lineTo(event.offsetX, event.offsetY);
                c.lineCap = 'round';
                c.stroke();
                previousPosition.x = event.offsetX;
                previousPosition.y = event.offsetY;
            })

            canvas.addEventListener("mouseup", () => {
                drawing = false;
            })
        }
    })

    console.log(objects)
};

// buttonPencil.addEventListener("click", () => {
//     placeCircle = false;
//     placeRectangle = false;

//     window.addEventListener("mousedown", (event) => {
//         drawing = true;
//         previousPosition.x = event.offsetX;
//         previousPosition.y = event.offsetY;
//     })

//     window.addEventListener("mousemove", (event) => {
//         if(!drawing) return;

//         c.beginPath();
//         c.moveTo(previousPosition.x, previousPosition.y);
//         c.lineTo(event.offsetX, event.offsetY);
//         c.lineCap = 'round';
//         c.stroke();
//         previousPosition.x = event.offsetX;
//         previousPosition.y = event.offsetY;
//     })

//     window.addEventListener("mouseup", () => {
//         drawing = false;
//     })
// })


// buttonCircle.addEventListener("click", () => {
//     placeCircle = true;
//     placeRectangle = false;

//     window.addEventListener("mousedown", (event) => {   
//         if(!placeCircle) return;
        
//         drawing = false;   
//         c.beginPath();
//         c.arc(event.offsetX, event.offsetY, 10, 0, Math.PI * 2, false);
//         c.stroke();

//     })

// })

// buttonRectangle.addEventListener("click", () => {
//     placeRectangle = true;
//     placeCircle = false;

//     window.addEventListener("mousedown", (event) => {
//         if(!placeRectangle) return;

//         drawing = false;
//         c.strokeRect(event.offsetX, event.offsetY, 20, 20); 
//     });

