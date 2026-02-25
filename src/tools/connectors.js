export const lineTool = {

    start(event, color, lineWidth, isArrow = false){
        return {
            x: event.offsetX,
            y: event.offsetY,
            finalX: null,
            finalY: null,
            type: 'line',
            color: color,
            lineWidth: lineWidth,
            isArrow: isArrow
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

        if(obj.isArrow){
            const headLength = 20;
            const angle = Math.atan2(obj.finalY - obj.y, obj.finalX - obj.x)

            c.beginPath();
            c.moveTo(obj.finalX, obj.finalY);
            c.lineTo(
                obj.finalX - headLength * Math.cos(angle - Math.PI / 6),
                obj.finalY - headLength * Math.sin(angle - Math.PI / 6)
            );
            c.stroke()

            c.beginPath();
            c.moveTo(obj.finalX, obj.finalY);
            c.lineTo(
                obj.finalX - headLength * Math.cos(angle + Math.PI / 6),
                obj.finalY - headLength * Math.sin(angle + Math.PI / 6)
            )

        
            c.stroke();

        }
    }

};
