export const eraserTool = {
   
    erase(objects, event){
        let mouseX = event.offsetX;
        let mouseY = event.offsetY;

        for(let i = objects.length-1; i >= 0; i--){ // Percorre do elemento mais recente
            let obj = objects[i]; 
            console.log(mouseX, mouseY, obj.x, obj.y, obj.finalX, obj.finalY);

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

        } else if(obj.type == 'line' || obj.type == 'arrow'){  
            const margin = 5;
            return clickOnLine(obj, mouseX, mouseY, margin);
        }
    }

}

function clickOnLine(obj, mouseX, mouseY, margin){
    const { x: x1, y: y1, finalX: x2, finalY: y2 } = obj;

    // 1. Calcular a distância do ponto (mouse) até o segmento de reta
    const L2 = Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2);
    if (L2 === 0) return false; // Linha de comprimento zero

    // Projeção do ponto na reta
    let t = ((mouseX - x1) * (x2 - x1) + (mouseY - y1) * (y2 - y1)) / L2;
    
    // Garante que a checagem se limite ao início e fim da reta
    t = Math.max(0, Math.min(1, t));

    const distSq = Math.pow(mouseX - (x1 + t * (x2 - x1)), 2) +
                   Math.pow(mouseY - (y1 + t * (y2 - y1)), 2);

    // 2. Retorna true se a distância for menor que o limite (ex: 5 pixels)
    return distSq < Math.pow(margin, 2);
}