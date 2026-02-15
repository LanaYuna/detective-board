import './css/style.css';
import { renderDrawing } from './core/engine.js';
import { state } from './core/state.js';
import { textTool } from './tools/text.js';
import { toolMap } from './ui/toolbar.js';
import './ui/toolbar.js';

export const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
export const c = canvas.getContext("2d");

let newObject = null;

canvas.addEventListener("mousedown", (event) => {
    state.drawing = true;

    if(state.currentTool == 'text'){
        const text = window.prompt("Informe o texto: ");
        newObject = toolMap[state.currentTool].start(event, text, state.currentColor, state.lineWidth); // Usa hashmap para criar objeto referente a ferramenta
        state.addObject(newObject);
        state.drawing = false;
        textTool.draw(c, newObject);
        return;

    } else if(state.currentTool == 'eraser'){
        if(toolMap[state.currentTool].erase(state.objects, event)){ // retorna true/false se houve colisão com algum objeto
            renderDrawing();
        }
        
    } else {
        newObject = toolMap[state.currentTool].start(event, state.currentColor, state.lineWidth);
        state.addObject(newObject);

    }

});

canvas.addEventListener("mousemove", (event) => {
    if(!state.drawing) return;

    if(state.currentTool == 'eraser') {
        if(toolMap[state.currentTool].erase(state.objects, event)){
            renderDrawing();
        }
    } else {
        toolMap[state.currentTool].move(newObject, event); // Uso de hashmap para redimensionamento da ferramenta
        renderDrawing();
    }
   
});

canvas.addEventListener("mouseup", () => {
    state.drawing = false;
    newObject = null;
});

