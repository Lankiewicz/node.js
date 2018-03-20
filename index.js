//script1.js
exports.greeting = 'hello world'
//script2.js
var greeting = require('./script1').greeting;
console.log(greeting);

// index.js
console.log(global)