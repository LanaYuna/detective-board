import { renderDrawing } from '../core/engine.js';

export const eraserTool = {
   
    move(obj, event){
        const mouseX = event.offsetX;
        const mouseY = event.offsetY;

        for(let i = obj.length-1; i >= 0; i--){
            if(this.checkCollision(obj, mouseX, mouseY)){
                obj[i].splice(i, 1); // Tira o elemento do índice de objetos para "apagar"
                renderDrawing(); // E redesenha
            }
        }

    },

    checkCollision(obj, mouseX, mouseY){
        if(obj.type == 'rectangle'){
            return mouseX >= obj.x && mouseX <= obj.x + obj.width &&
                   mouseY >= obj.y && mouseY <= obj.y + obj.height;
        }
    }

}