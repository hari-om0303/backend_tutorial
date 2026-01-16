// const express = require('express');
// const server = express();

// // const productRouter = express.Router();
// const productRouter = require('./routes/product2');
// const userRouter = require('./routes/users2');

// // body parser (middle ware)
// server.use(express.json());
// server.use(express.static('public'));

// server.use('/products', productRouter.router);
// server.use('/users', userRouter.router);



// server.listen(3000, () => {
//     console.log('Server is running on port 3000');
// })


// require('dotenv').config()
// const express = require('express');
// const morgan = require('morgan');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const server = express();
// const path = require('path');
// const productRouter = require('./routes/product')
// const userRouter = require('./routes/user')
// console.log('env',process.env.DB_PASSWORD)

// //db connection
// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
//   console.log('database connected')
// }
// //Schema

// //bodyParser
// server.use(cors());
// server.use(express.json());
// server.use(morgan('default'));
// server.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR)));
// server.use('/products',productRouter.router);
// server.use('/users',userRouter.router);
// // server.get('/.*/', (req, res) => {
// //   res.sendFile(
// //     path.resolve(__dirname, process.env.PUBLIC_DIR, 'index.html')
// //   );
// // });

// // const buildPath = path.join(__dirname, '..', 'client', 'build');

// // server.use(express.static(buildPath));

// // server.get(/.*/, (req, res) => {
// //   res.sendFile(path.join(buildPath, 'index.html'));
// // });

// server.use(
//   express.static(
//     path.resolve(__dirname, '../client/dist')
//   )
// );

// server.get('/*', (req, res) => {
//   res.sendFile(
//     path.resolve(__dirname, '../client/dist/index.html')
//   );
// });




// server.listen(process.env.PORT, () => {
//   console.log('server started');
// });


const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('combined'));

// 1️⃣ Serve React build
app.use(
  express.static(
    path.resolve(__dirname, '../client/dist')
  )
);

// 2️⃣ API routes FIRST
app.use('/products', require('./routes/product').router);
app.use('/users', require('./routes/user').router);

// 3️⃣ React Router fallback (NO PATH STRING)
app.use((req, res) => {
  res.sendFile(
    path.resolve(__dirname, '../client/dist/index.html')
  );
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
