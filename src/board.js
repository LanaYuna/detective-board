// const canvas = document.querySelector("canvas");

// const buttonCircle = document.querySelector("#button-circle");
// const buttonRectangle = document.querySelector("#button-rectangle");
// const buttonPencil = document.querySelector("#button-pencil"); // ALTERAR OS NOMES DA VARIÁVEIS

// const undoButton = document.querySelector("#undo-button");
// const redoButton = document.querySelector("#redo-button");
// const textButton = document.querySelector("#text-button");

// const redButton = document.querySelector("#red-button");
// const blackButton = document.querySelector("#black-button");
// const blueButton = document.querySelector("#blue-button");


// const c = canvas.getContext("2d");

// let objects = []; // armazenar em array de objetos para gerenciar estado
// let newObject = null // Objeto que pertence a object
// let currentTool = 'pencil';
// let drawing = false;
// let redoHistory = [];
// let message = [];
// let currentColor = 'black';


// buttonPencil.addEventListener("click", () => {currentTool = 'pencil'});
// buttonCircle.addEventListener("click", () => {currentTool = 'circle'});
// buttonRectangle.addEventListener("click", () => {currentTool = 'rectangle'});
// textButton.addEventListener("click", () => {currentTool = 'text'});

// redButton.addEventListener("click", () => {currentColor = 'red'});
// blackButton.addEventListener("click", () => {currentColor = 'black'});
// blueButton.addEventListener("click", () => {currentColor = 'blue'});

// undoButton.addEventListener("click", () => {
//     undo();
// })

// redoButton.addEventListener("click", () => {
//     redo();
// })




// canvas.addEventListener("mousedown", (event) => {
//     drawing = true;
//     redoHistory = []; // Limpa o histórico quando o usuário realiza nova ação

//     if(currentTool == 'pencil'){
//         newObject = {
//             points: [{x: event.offsetX, y: event.offsetY}],
//             type: 'pencil', 
//             color: currentColor
//         }
//         objects.push(newObject);

//     } else if(currentTool == 'circle') {
//         newObject = {
//             x : event.offsetX,
//             y: event.offsetY,
//             type: 'circle',
//             color: currentColor,
//             radius: null
//         }
//         objects.push(newObject);

//     } else if(currentTool == 'rectangle'){
//         newObject = {
//             x: event.offsetX,
//             y: event.offsetY,
//             type: 'rectangle',
//             color: currentColor,
//             width: null,
//             height: null
//         }
//         objects.push(newObject);

//     } else if(currentTool == 'text'){
//         const text = window.prompt("Digite o texto");
//         if(text) {
//             newObject = {
//                 x: event.offsetX,
//                 y: event.offsetY,
//                 type: 'text',
//                 text: text,
//                 color: currentColor
//             }; 
//             drawing = false;
//             objects.push(newObject);
//             renderDrawing();
//             return;
//         }
//     }
// })

// canvas.addEventListener("mousemove", (event) => {
//     if(!drawing) return;
    
//     if(currentTool == 'pencil'){
//         // Adicionar cada novo ponto em points do objeto
//         newObject.points.push({x: event.offsetX, y: event.offsetY});
//     } else if (currentTool == 'circle'){
//         const dx = event.offsetX - newObject.x;
//         const dy = event.offsetY - newObject.y;
//         newObject.radius = Math.sqrt(dx * dx + dy * dy); // pitágoras para obter o raio

//     } else if (currentTool == 'rectangle'){
//         newObject.width = event.offsetX - newObject.x;
//         newObject.height = event.offsetY - newObject.y;
//     } else {
//         return;
//     }

//     renderDrawing();
// })

// canvas.addEventListener("mouseup", () => {
//     drawing = false;
//     newObject = null;
// })



