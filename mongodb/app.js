const express = require('express');
const model = require('./usermodel');
const { read } = require('fs');

const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/create', async (req, res) => {
    const user = await model.create({
        name: "John Doe",
        username: "johndoe",
        email: "johndoe@example.com"
    })
//   res.send('User created successfully!');
  res.send(user);
});
app.get('/read', async (req, res) => {
    const read = await model.find({username:"johndoe"})
  res.send(read);
});
app.get('/update',async (req, res) => {
    const update=await model.findOneAndUpdate({username:"johndoe",email:"johndoe@example.com"},{email:"john.doe@example.com"},{new:true})
  res.send(update);
});
app.get('/delete',async (req, res) => {
    const del=await model.findOneAndDelete({username:"johndoe",email:"john.doe@example.com"})
res.send(del);
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});