const express = require('express');
const dotenv = require('dotenv').config();
const dbConnect = require('./config/dbConnection');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

// connect to database
dbConnect();

const app = express();

// Middlewares
app.use(express.json()); // used to parse or get json data from request body


// routes
app.use('/api/auth' , authRoutes);
app.use('/api/users' , userRoutes);



// start the server 
const PORT = process.env.PORT || 3000;
app.listen(PORT , () =>{
    console.log(`Server is running on port ${PORT}`);
})