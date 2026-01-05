// Simple Web Server in Node.js
const http = require('http');
const fs= require('fs');

const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const card = fs.readFileSync('card.html', 'utf-8');
const comments = data.comments;


// creating a server using http module int node.js 
const server = http.createServer((req,  res) =>{
    // console.log(req.url);
    // console.log("server started");
    // res.setHeader('Content-Type', 'text/plain');
    // res.end("Hello World");
    // // res.end(JSON.stringify(hostname));
    // res.setHeader("Content-type", "application/json");
    // res.end(data);
    // res.end(index);


    // res is used to send response to the client 
    // req is used to get the request from the client

//  //  Routing
//     switch(req.url){  //req.url gives the path of the url
//         case '/':
//             res.setHeader("Content-type", "text/html");
//             res.end(index);
//             break; 
//         case '/card':
//             res.setHeader("Content-type", "application/json");
//             res.end(card); 
//             break;  
//         case '/data':
//             res.setHeader("Content-type", "application/json");
//             res.end(JSON.stringify(data)); 
//             break; 
//         case '/product':
//             res.setHeader("Content-type", "text/html");
//             let modifiedindex = card.replace("**body**" , comments[2].body).replace("**likes**" , comments[2].likes).replace("**postId**" , comments[2].postId);
//             res.end(modifiedindex); 
//             break; 
//         default:
//             res.statusCode = 404;
//             res.end("Page Not Found"); 
//     }
 
    // Dynamic URL handling
    if(req.url.startsWith('/product')){
        const id = req.url.split('/')[2];
        // req.url.split('/')[2] is used to get the id from the url
        const prd = comments.find(p=>p.id===(+id));  // +id  => to convert string to number
        console.log(prd);

        if (!prd) {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain");
        res.end("Product not found");
        return;
    } 

        res.setHeader("Content-type", "text/html");
        let modifiedindex = card.replace("**body**" , prd.body).replace("**likes**" , prd.likes).replace("**postId**" , prd.postId);
        res.end(modifiedindex); 
        return;
    }

})

server.listen(8080, ()=>{
    console.log("Server running on port 8080");
})  