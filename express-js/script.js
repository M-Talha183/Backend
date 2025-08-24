const depress  = require('express');

const app = depress()

app.use((req,res,next)=>{
    console.log('First Middleware')
    next()
})
app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.get('/about',(req,res)=>{
    res.send('My name is muhammad Talha i am learning Express.js with my brother Zain Ali ')
})


app.listen(3000,()=>{
    console.log("Server Running on port 3000")
})