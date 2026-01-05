// commonjs module syntax
function product(a,b) {
          return a * b;
}
exports.product = product;

exports.sum = (a,b) =>{
          return a + b;
}

exports.diff = (a,b) =>{ 
          return a - b;
}

// ES6 module syntax
function product(a,b) {
          return a * b;
}

function sum(a,b) {
          return a + b;
}
export { product , sum };