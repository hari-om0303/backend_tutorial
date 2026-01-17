const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();


//db connection
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
  console.log('database connected')
}


app.use(cors());
app.use(express.json());
app.use(morgan('combined'));

// 1️⃣ Serve React build
app.use(express.static(path.join(__dirname, '../client/dist')));


// 2️⃣ API routes FIRST
app.use('/products', require('./routes/product').router);
app.use('/users', require('./routes/user').router);

// 3️⃣ React Router fallback (NO PATH STRING)
app.use((req, res, next) => {
  res.sendFile(
    path.resolve(__dirname, '../client/dist/index.html')
  );
});


app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
 