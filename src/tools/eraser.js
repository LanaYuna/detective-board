import { state } from "../core/state";

export const eraserTool = {
   
    erase(objects, event){
        const mouseX = event.offsetX;
        const mouseY = event.offsetY;

        for(let i = objects.length-1; i >= 0; i--){ // Percorre do elemento mais recente
            let obj = objects[i]; 

            if(this.checkCollision(obj, mouseX, mouseY)){ // retorna booleano
                objects.splice(i, 1); // Tira o elemento do índice de objetos para "apagar"
                return true;
            }
        }
        return false;

    },

    checkCollision(obj, mouseX, mouseY){
        if(obj.type == 'rectangle'){
            return mouseX >= obj.x && mouseX <= obj.x + obj.width &&
                   mouseY >= obj.y && mouseY <= obj.y + obj.height;
        } 
    }

}