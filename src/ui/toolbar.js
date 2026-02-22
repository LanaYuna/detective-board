import { state } from '../core/state.js';
import { renderDrawing } from '../core/engine.js';
import { circleTool, rectangleTool } from '../tools/shapes.js';
import { pencilTool } from '../tools/pencil.js';
import { textTool } from '../tools/text.js';
import { eraserTool } from '../tools/eraser.js';
import { lineTool } from '../tools/connectors.js';

export const toolMap = {
    circle: circleTool,
    rectangle: rectangleTool,
    pencil: pencilTool,
    text: textTool,
    line: lineTool,
    eraser: eraserTool
};

const undoBtn = document.querySelector("#undo-button");
const redoBtn = document.querySelector("#redo-button");

const pencilBtn = document.querySelector("#pencil-button");
const circleBtn = document.querySelector("#circle-button");
const rectangleBtn = document.querySelector("#rectangle-button");
const textBtn = document.querySelector("#text-button");
const lineBtn = document.querySelector("#line-button");
const eraserBtn = document.querySelector("#eraser-button");

const redBtn = document.querySelector("#red-button");
const blackBtn = document.querySelector("#black-button");
const blueBtn = document.querySelector("#blue-button");

const thinBtn = document.querySelector("#thin-line-button");
const mediumBtn = document.querySelector("#medium-line-button");
const thickBtn = document.querySelector("#thick-line-button");

pencilBtn.addEventListener("click", () => {state.currentTool = 'pencil'});
circleBtn.addEventListener("click", () => {state.currentTool = 'circle'});
rectangleBtn.addEventListener("click", () => {state.currentTool = 'rectangle'});
textBtn.addEventListener("click", () => {state.currentTool = 'text'});
eraserBtn.addEventListener("click", () => {state.currentTool = 'eraser'});
lineBtn.addEventListener("click", () => {state.currentTool = 'line'});

redBtn.addEventListener("click", () => {state.currentColor = 'red'});
blackBtn.addEventListener("click", () => {state.currentColor = 'black'});
blueBtn.addEventListener("click", () => {state.currentColor = 'blue'});

thinBtn.addEventListener("click", () => {state.lineWidth = 1});
mediumBtn.addEventListener("click", () => {state.lineWidth = 5});
thickBtn.addEventListener("click", () => {state.lineWidth = 10});

undoBtn.addEventListener("click", () => {
    state.undo();
    renderDrawing();
});

redoBtn.addEventListener("click", () => {
    state.redo();
    renderDrawing();
});

window.addEventListener("keydown", (event) => {
    if(event.ctrlKey && event.key === 'z'){
        state.undo();
        renderDrawing();
    }
})

window.addEventListener("keydown", (event) => {
    if(event.ctrlKey && event.key === 'y'){
        state.redo();
        renderDrawing();
    }
})
