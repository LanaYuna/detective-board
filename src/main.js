import './css/style.css';
import { renderDrawing } from './core/engine.js';
import { state } from './core/state.js';
import { pencilTool } from './tools/pincel.js';
import { circleTool } from './tools/shapes.js';
import { rectangleTool } from './tools/shapes.js';
import { textTool } from './tools/text.js';
import './ui/toolbar.js';

export const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
export const c = canvas.getContext("2d");

let objects = [];
let newObject = null;

canvas.addEventListener("mousedown", (event) => {
    state.drawing = true;

    if(state.currentTool == 'circle'){
        newObject = circleTool.start(event, state.currentColor);
        state.addObject(newObject);

    } else if (state.currentTool == 'rectangle') {
        newObject = rectangleTool.start(event, state.currentColor);
        state.addObject(newObject);

    } else if (state.currentTool == 'pencil') {
        newObject = pencilTool.start(event, state.currentColor);
        state.addObject(newObject);

    } else if (state.currentTool == 'text') {
        newObject = textTool.start(event, state.currentColor);
        state.addObject(newObject);
        state.drawing = false;
        textTool.draw(c, newObject);
        return;

    }

});

canvas.addEventListener("mousemove", (event) => {
    if(!state.drawing) return;

    if(state.currentTool == 'pencil'){
        pencilTool.move(newObject, event);

    } else if (state.currentTool == 'circle'){
        circleTool.move(newObject, event);

    } else if (state.currentTool == 'rectangle'){
        rectangleTool.move(newObject, event);

    } else {
        return;
    }
});

canvas.addEventListener("mouseup", () => {
    state.drawing = false;
    newObject = null;
});


renderDrawing();
