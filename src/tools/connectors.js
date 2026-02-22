export const lineTool = {

    start(event, color, lineWidth){
        return {
            x: event.offsetX,
            y: event.offsetY,
            finalX: null,
            finalY: null,
            type: 'line',
            color: color,
            lineWidth: lineWidth
        }
    },

    move(obj, event){
        obj.finalX = event.offsetX;
        obj.finalY = event.offsetY;
    },

    draw(c, obj){
        c.beginPath();
        c.moveTo(obj.x, obj.y);
        c.lineTo(obj.finalX, obj.finalY);
        c.stroke();
    }

};