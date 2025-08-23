const fs = require("fs")
// ************** Create File **************


let myFile = fs.writeFile("talha.txt","Hello World In Node Js ", function (err){
    if (err) console.log(err);
    else console.log("File Created Successfully");
})
// *************** Append File (update file) ***************


fs.appendFile("talha.txt","zain and talha and are leraning backend at same time ", ((err)=>{
    if(err) console.log("ERRor ", err)
    else console.log("File Updated Successfully")
}))

//  ************** Rename File ***************

fs.rename("talha.txt","zain.txt", (err)=>{
    if(err) console.log("Error ", err)
    else console.log("File Renamed Successfully")
})

// ***************** Delete **********************
fs.unlink("talha.txt",((err)=>{
    if(err) console.log("Error ", err)
    else console.log("File Deleted Successfully")
}))