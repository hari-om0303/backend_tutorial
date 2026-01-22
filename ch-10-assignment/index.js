const express = require('express');
const mongoose = require('mongoose');
const todolistroute = require('./route/R_todolist');
const app = express();

// app.set('view engine' , 'ejs');
// app.set('pages' , __dirname + '/views');

main().catch(err=>(console.log(err)));
async function main(){
    await mongoose.connect('mongodb://localhost:27017/todolist');
    console.log('Database connected');
}

app.use(express.json()); 

app.use('/todolist' , todolistroute.router);

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});