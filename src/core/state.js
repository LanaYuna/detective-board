export const state = {

    objects: [],
    redoHistory: [],

    currentTool: 'pencil',
    currentColor: 'black',
    lineWidth: 2,
    drawing: false,

    addObject(obj) {
        this.objects.push(obj);
        this.redoHistory = []; // Esvazia quando cria algo novo
    },

    undo() {
        if(this.objects.length > 0){
            const removedItem = this.objects.pop();
            this.redoHistory.push(removedItem);
        };
    },

    redo(){
        if(this.redoHistory.length > 0){
            const removedItem = this.redoHistory.pop();
            this.objects.push(removedItem); // Adiciona o último elemento de redoHistory
        };
    }
}