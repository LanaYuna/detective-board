import { state } from '../core/state.js';
import { renderDrawing } from '../core/engine.js';

const undoBtn = document.querySelector("#undo-button");
const redoBtn = document.querySelector("#redo-button");

const pencilBtn = document.querySelector("#pencil-button");
const circleBtn = document.querySelector("#circle-button");
const rectangleBtn = document.querySelector("#rectangle-button");
const textBtn = document.querySelector("#text-button");

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

