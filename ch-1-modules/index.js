// // commonjs module import
// const lib = require('./lib');

// console.log('Result from lib:', lib.sum(3,4) , lib.diff(10,5), lib.product(2,6));


// ES6 module import
import { product, sum } from './lib.js';
console.log('Result from lib:', sum(3,4) , product(2,6));
const t1 = performance.now();


// fs module import
import fs from 'fs';

// synchronous read
const data = fs.readFileSync('./demo.txt', 'utf-8');
console.log('Data from file:', data);
const t2_sync = performance.now();

// asysnchronous read
fs.readFile('./demo.txt' , 'utf-8' , (err,data) =>{
    console.log('Data from file (async):', data);
})
const t2_async = performance.now();

console.log(`Time taken for synchronous operations: ${t2_sync - t1} milliseconds`);
console.log(`Time taken for asynchronous operations: ${t2_async - t1} milliseconds`);