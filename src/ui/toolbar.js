import { state } from '../core/state.js';
import { renderDrawing } from '../core/engine.js';

const undoBtn = document.querySelector("#undo-button");
const redoBtn = document.querySelector("#redo-button");

const pincelBtn = document.querySelector("#pincel-button");
const circleBtn = document.querySelector("#circle-button");
const rectangleBtn = document.querySelector("#rectangle-button");
const textBtn = document.querySelector("#text-button");

const redBtn = document.querySelector("#red-button");
const blackBtn = document.querySelector("#black-button");
const blueBtn = document.querySelector("#blue-button");


undoBtn.addEventListener("click", () => {
    state.undo();
    renderDrawing(c, state.objects);
});

redoBtn.addEventListener("click", () => {
    state.redo();
    renderDrawing(c, state.objects);
});

pincelBtn.addEventListener("click", () => {state.currentTool = 'pincel'});
circleBtn.addEventListener("click", () => {state.currentTool = 'circle'});
rectangleBtn.addEventListener("click", () => {state.currentTool = 'rectangle'});
textBtn.addEventListener("click", () => {state.currentTool = 'text'});

redBtn.addEventListener("click", () => {state.currentColor = 'red'});
blackBtn.addEventListener("click", () => {state.currentColor = 'black'});
blueBtn.addEventListener("click", () => {state.currentColor = 'blue'});