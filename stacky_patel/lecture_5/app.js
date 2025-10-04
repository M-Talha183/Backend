const emitter = require("./emiter")
const emtr = new emitter()
const events = require("./config").events
// console.log(emtr)

emtr.on(events.Greet, function() {
    console.log("Somewhere, someone said hello.")
})

emtr.on(events.FileSaved, function() {
    console.log("A file was saved!")
})

emtr.on(events.FileOpen, function() {
    console.log("A file was opened!")
})
console.log(emtr)
// emtr.emit("greet")

// emtr.emit("on_target")