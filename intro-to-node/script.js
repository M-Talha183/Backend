const fs = require("fs")

fs.writeFile("talha.txt","Hello World In Node Js ", function (err){
    if (err) console.log(err);
    else console.log("File Created Successfully");
})