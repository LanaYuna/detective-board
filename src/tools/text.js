export const textTool = {

    start(event, text, color, lineWidth){
        return {
            x: event.offsetX,
            y: event.offsetY,
            type: 'text',
            text: text,
            color: color,
            lineWidth: lineWidth
        };
    },

    draw(c, obj){
        c.beginPath();
        c.font = '20px Arial';
        c.fillText(obj.text, obj.x, obj.y);
    }
};