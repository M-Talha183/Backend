function emitter (){
    this.events = {};
}

emitter.prototype.on = function (type, cb){
    this.events[type] = this.events[type] || []; 
    this.events[type].push(cb);
}
emitter.prototype.emit = function(type){
    if (this.events[type]){
        this.events[type].forEach(listner =>{
            listner()
        })
    }
}
module.exports = emitter;