// // How to use command line arguments in Node JS. Like node index.js 3 2 - how can I get 3 and 2 to be used in my programs. 

// const args1 = process.argv[3];
// const args2 = process.argv[2];

// console.log(`The first argument is ${args1}`);
// console.log(`The second argument is ${args2}`);

// const num1 = Number(args1);
// const num2 = Number(args2);

// console.log(`The sum is ${num1 + num2}`);

// // How to Run the Program => in terminal type : node assignment.js 3 2


// promise example

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 resolved");
        // reject("Promise 1 rejected");
    })
}, 9000)

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 resolved");
    }, 1000)
})

p1.then((data) => {
    console.log("reoleved data is :", data);
}).catch((err) => {
    console.log("error is :", err);
}).finally(() => {
    console.log("completed p1");
})

p2.then((data) => {
    console.log("reoleved data is :", data);
}).catch((err) => {
    console.log("error is :", err);
}).finally(() => {
    console.log("completed p2");
})


// promise.all example  , used when we want to wait for multiple promises to resolve
Promise.all([p1, p2]).then((data) => {
    console.log("Promise all data is :", data);
})


// promise.any example
Promise.any([p1,p2]).then((data)=>{
    console.log("Promise any data is :", data);
})


// direct resolve and reject example
Promise.resolve("good morning").then((msg)=>{
    console.log("message is :", msg);
}).catch((err)=>{
    console.log("error is :", err);
})

Promise.reject("good evening").then((msg)=>{
    console.log("message is :", msg);
}).catch((err)=>{
    console.log("error is :", err);
})



// api fetch example
fetch('https://dummyjson.com/auth/login').then(res => res.json()).then(console.log)