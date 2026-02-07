export const circleTool = {
    start(event, color){
        return {
            x : event.offsetX,
            y: event.offsetY,
            type: 'circle',
            color: color,
            radius: null
        };
    },

    move(obj, event){
        const dx = event.offsetX - obj.x;
        const dy = event.offsetY - obj.y;
        obj.radius = Math.sqrt(dx * dx + dy * dy) // pitágoras para obter o raio 
    },

    draw(c, obj){
        c.beginPath(),
        c.arc(obj.x, obj.y, obj.radius, 0, Math.PI * 2, false),
        c.stroke()
    }

};

export const rectangleTool = {
    start(event, color){
        return {
            x: event.offsetX,
            y: event.offsetY,
            type: 'rectangle',
            color: color,
            width: null,
            height: null
        };
    },

    move(obj, event){
        obj.width = event.offsetX - obj.x;
        obj.height = event.offsetY - obj.y;
    },

    draw(c, obj){
        c.beginPath();
        c.strokeRect(obj.x, obj.y, obj.width, obj.height);
    }
};