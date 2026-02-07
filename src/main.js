import './style.css'
import './board.js'
import { renderDrawing } from './core/engine.js';
import { state } from './core/state.js';
import { pencilTool } from './tools/pincel.js';
import { circleTool } from './tools/shapes.js';
import { rectangleTool } from './tools/shapes.js';
import { textTool } from './tools/text.js';
import './ui/toolbar.js';

const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext("2d");

let objects = [];

canvas.addEventListener("mousedown", () => {
    if(state.currentTool == 'circle'){
        state.addObject()
    }
});

renderDrawing(c, objects);