const express = require('express');
const mongoose = require('mongoose');
const todolistroute = require('./route/R_todolist');
const app = express();

main().catch(err=>(console.log(err)));
async function main(){
    await mongoose.connect('mongodb://localhost:27017/todolist');
    console.log('Database connected');
}

app.use(express.json()); 

app.use('/todolist' , todolistroute.router);



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});