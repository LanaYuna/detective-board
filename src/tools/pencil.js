export const pencilTool = {
    
    start(event, color, lineWidth){
        return {
            type: 'pencil',
            color: color,
            points: [{x: event.offsetX, y: event.offsetY}],
            lineWidth: lineWidth
        };
    },

    move(obj, event){
        obj.points.push({ x: event.offsetX, y: event.offsetY });
    },

    draw(c, obj){
        if(obj.points.length < 2) return;
            
        c.beginPath();
        c.moveTo(obj.points[0].x, obj.points[0].y);
        for(let i=1; i < obj.points.length; i++){
            c.lineTo(obj.points[i].x, obj.points[i].y);
        }

        c.lineCap = 'round';
        c.lineJoin = 'round';
        c.stroke();
    }
};