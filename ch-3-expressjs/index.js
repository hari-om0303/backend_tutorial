const fs = require('fs');

const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
// const index = fs.readFileSync('index.html', 'utf8');
const comments = data.comments;

// server start
const express = require('express');
const server = express();


// body parser middleware or built-in middleware , it is used to parse the incoming request body in json format
server.use(express.json()); 

// third party or external middleware , it is used to log the request details in console
const morgan = require('morgan');
server.use(morgan('dev'));

// it is used to serve static files like html ,css,js,image etc directly from public folder to local host.
server.use(express.static('public'));


//custom middleware or application level middleware
server.use((req,res,next)=>{
  console.log(req.method , req.ip , req.url , new Date() , req.get('User-Agent'));
  next();
}) 


// it is used just to chech in postman in params password=12345 
const auth1 = (req ,res, next)=>{
  // console.log(req.query)
  if(req.query.password === '12345'){
    console.log('Authenticated');
    next();
  }else{
    res.status(401).send('Unauthorized');
  }
}

// it is used just to chech in postman in body password=12345
const auth2 = (req ,res, next)=>{
  // console.log(req.query)
  if( req.body && req.body.password === '12345'){
    next();
  }else{
    res.status(401).send('Unauthorized');
  }
}


// application level middleware
// server.use(auth);


// API or endpoints 
// router level middleware usage example
// server.get('/', auth1 ,(req, res) =>{
//    res.json({type : 'GET'});
// })
server.get('/', auth2 ,(req, res) =>{
   res.json({type : 'GET'});
})
server.post('/', (req, res) =>{
   res.json({type : 'POST'});
})
server.put('/', (req, res) =>{
   res.json({type : 'PUT'});
})
server.delete('/', (req, res) =>{
   res.json({type : 'DELETE'});
})
server.patch('/', (req, res) =>{
   res.json({type : 'PATCH'});
})

server.get('/demo', (req ,res)=>{
    res.send("hello from expressjs server");
    // res.sendFile(__dirname + '/index.html');
    // res.json(comments)
    // res.sendStatus(404);
    // res.status(200).send(index);

})


// server end
server.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});