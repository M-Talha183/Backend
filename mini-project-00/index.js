const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"public")))
app.set("view engine ","ejs")


app.get("/",(req,res)=>{
    fs.readdir(`./files`,(err,files)=>{
       fs.readFile(`./files/${req.params.filename}` ,"utf-8",function(err,filedata){
        res.render("show",{filename:req.params.filename,filedata:filedata});
       })
    })
})
app.get("/files/:filename",(req,res)=>{
    fs.readdir(`./files`,(err,files)=>{
        if(err) return res.status(500).send("Error reading files")
        res.render("index.ejs",{files:files})
    })
})

app.post("/create",(req,res)=>{
    fs.writeFile(`./files/${req.body.title.split(" ").join("")}`,req.body.details ,(err,files)=>{
        if(err) return res.status(500).send("Error creating file")
        res.redirect("/")
    })
})




// app.get("/profile", (req,res)=>{
//     res.send(`welcome Alll users`)
// })

// app.get("/profile/:username", (req,res)=>{
//     res.send(`welcome ${req.params.username}`)
// })


// app.get("/profile/:username/:age",(req,res)=>{
//     res.send(`Welcome To ${req.params.username} and you are age is ${req.params.age}`)
// })


app.listen(3000,()=>{
    console.log("Server Running on port 3000")
})