import { state } from '../core/state.js';
import { pencilTool } from '../tools/pencil.js';
import { circleTool } from '../tools/shapes.js';
import { rectangleTool } from '../tools/shapes.js';
import { c } from '../main.js';
import { canvas } from '../main.js';
import { toolMap } from '../ui/toolbar.js';

export function renderDrawing(){
    c.clearRect(0, 0, canvas.width, canvas.height); // limpa o quadro

    state.objects.forEach(obj => { // redesenha a todo momento
        c.strokeStyle = obj.color;
        c.fillStyle = obj.color;
        c.lineWidth = obj.lineWidth;

        toolMap[obj.type].draw(c, obj);
    })
};
