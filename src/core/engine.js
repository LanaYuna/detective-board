import { state } from '../core/state.js';
import { pencilTool } from '../tools/pincel.js';
import { circleTool } from '../tools/shapes.js';
import { rectangleTool } from '../tools/shapes.js';
import { textTool } from '../tools/text.js';

export function renderDrawing(c, objects){
    c.clearRect(0, 0, canvas.width, canvas.height); // limpa o quadro

    objects.forEach(obj => { // redesenha a todo momento
        c.strokeStyle = obj.color;
        c.fillStyle = obj.color;

        if(state.currentTool == 'circle'){
            circleTool.draw(c, obj);

        } else if(state.currentTool == 'rectangle'){
            rectangleTool.draw(c, obj);
    
        } else if(state.currentTool == 'pencil'){
            pencilTool.draw(c, obj);

        } else if(obj.type == 'text'){
            textTool.draw(c, obj);
            
        }
    })
};
