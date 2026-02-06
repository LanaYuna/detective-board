const canvas = document.querySelector("canvas");

const buttonCircle = document.querySelector("#button-circle");
const buttonRectangle = document.querySelector("#button-rectangle");
const buttonPencil = document.querySelector("#button-pencil"); // ALTERAR OS NOMES DA VARIÁVEIS

const undoButton = document.querySelector("#undo-button");
const redoButton = document.querySelector("#redo-button");
const textButton = document.querySelector("#text-button");

const redButton = document.querySelector("#red-button");
const blackButton = document.querySelector("#black-button");
const blueButton = document.querySelector("#blue-button");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext("2d");

let objects = []; // armazenar em array de objetos para gerenciar estado
let newObject = null // Objeto que pertence a object
let currentTool = 'pencil';
let drawing = false;
let redoHistory = [];
let message = [];
let currentColor = 'black';


buttonPencil.addEventListener("click", () => {currentTool = 'pencil'});
buttonCircle.addEventListener("click", () => {currentTool = 'circle'});
buttonRectangle.addEventListener("click", () => {currentTool = 'rectangle'});
textButton.addEventListener("click", () => {currentTool = 'text'});

redButton.addEventListener("click", () => {currentColor = 'red'});
blackButton.addEventListener("click", () => {currentColor = 'black'});
blueButton.addEventListener("click", () => {currentColor = 'blue'});

undoButton.addEventListener("click", () => {
    undo();
})

redoButton.addEventListener("click", () => {
    redo();
})

window.addEventListener("keydown", (event) => {
    if(event.ctrlKey && event.key === 'z'){
        undo();
    }
})

window.addEventListener("keydown", (event) => {
    if(event.ctrlKey && event.key === 'y'){
        redo();
    }
})

function undo(){
    if(objects.length > 0){
        const removedItem = objects.pop();
        redoHistory.push(removedItem);
        renderDrawing();
    }
}

function redo(){
    if(redoHistory.length > 0){
        objects.push(redoHistory[redoHistory.length - 1]); // Acessa o último elemento de redoHistory
        redoHistory.pop(); 
        renderDrawing();
    }
}

canvas.addEventListener("mousedown", (event) => {
    drawing = true;
    redoHistory = []; // Limpa o histórico quando o usuário realiza nova ação

    if(currentTool == 'pencil'){
        newObject = {
            points: [{x: event.offsetX, y: event.offsetY}],
            type: 'pencil', 
            color: currentColor
        }
        objects.push(newObject);

    } else if(currentTool == 'circle') {
        newObject = {
            x : event.offsetX,
            y: event.offsetY,
            type: 'circle',
            color: currentColor,
            radius: null
        }
        objects.push(newObject);

    } else if(currentTool == 'rectangle'){
        newObject = {
            x: event.offsetX,
            y: event.offsetY,
            type: 'rectangle',
            color: currentColor,
            width: null,
            height: null
        }
        objects.push(newObject);

    } else if(currentTool == 'text'){
        const text = window.prompt("Digite o texto");
        if(text) {
            newObject = {
                x: event.offsetX,
                y: event.offsetY,
                type: 'text',
                text: text,
                color: currentColor
            }; 
            drawing = false;
            objects.push(newObject);
            renderDrawing();
            return;
        }
    }
})

canvas.addEventListener("mousemove", (event) => {
    if(!drawing) return;
    
    if(currentTool == 'pencil'){
        // Adicionar cada novo ponto em points do objeto
        newObject.points.push({x: event.offsetX, y: event.offsetY});
    } else if (currentTool == 'circle'){
        const dx = event.offsetX - newObject.x;
        const dy = event.offsetY - newObject.y;
        newObject.radius = Math.sqrt(dx * dx + dy * dy); // pitágoras para obter o raio

    } else if (currentTool == 'rectangle'){
        newObject.width = event.offsetX - newObject.x;
        newObject.height = event.offsetY - newObject.y;
    } else {
        return;
    }

    renderDrawing();
})

canvas.addEventListener("mouseup", () => {
    drawing = false;
    newObject = null;
})


function renderDrawing(){
    c.clearRect(0, 0, canvas.width, canvas.height); // limpa o quadro

    objects.forEach(obj => { // redesenha a todo momento
        c.strokeStyle = obj.color;
        c.fillStyle = obj.color;

        if(obj.type == 'circle'){
            c.beginPath();
            c.arc(obj.x, obj.y, obj.radius, 0, Math.PI * 2, false);
            c.stroke();
         

        } else if(obj.type == 'rectangle'){
            c.strokeRect(obj.x, obj.y, obj.width, obj.height);
        

        } else if(obj.type == 'pencil'){

            if(obj.points.length < 2) return;
            
            c.beginPath();
            c.moveTo(obj.points[0].x, obj.points[0].y);
            for(let i=1; i < obj.points.length; i++){
                c.lineTo(obj.points[i].x, obj.points[i].y);
            }

            c.lineCap = 'round';
            c.lineJoin = 'round';
            c.stroke();
        

        } else if(obj.type == 'text'){
            c.font = '20px Arial';
            c.fillText(obj.text, obj.x, obj.y);
        }
    })
};

