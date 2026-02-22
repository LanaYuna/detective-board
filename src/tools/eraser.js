
export const eraserTool = {
   
    erase(objects, event){
        let mouseX = event.offsetX;
        let mouseY = event.offsetY;

        for(let i = objects.length-1; i >= 0; i--){ // Percorre do elemento mais recente
            let obj = objects[i]; 
            console.log(mouseX, mouseY, obj.x, obj.y, obj.radius);

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

        } else if(obj.type == 'circle'){
            const dx = mouseX - obj.x;
            const dy = mouseY - obj.y;
            return obj.radius >= Math.sqrt( dx * dx + dy * dy);

        } else if(obj.type == 'text'){
            return mouseX <= obj.x + 20 && mouseY <= obj.y + 20;
        }
    }

}