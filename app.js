// var http = require('http');
// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type':'text/html'});
//     res.write('<head><meta charset="UTF-8"/></head>');
//     res.end('你好/n');
// }).listen(1337,"127.0.0.1");
// console.log("Server runnig on localhost");
// var testModule = require("./module_test.js");
// console.log("test_module",testModule.testVar);
// if(module == require.main){
//     console.log("app.js is main module")
// }
// console.log(require.resolve("./module_test.js"));
// console.log(require.cache);

// console.log("hello");
//
// function foo(){
//     console.log("foo");
//     return 100;
// };
//
// var bar = "this is a pen";
// var http = require("http");
// var i = foo();
// console.log(i);

var foo = require("foo");
var t = new foo();
t.test();
console.log(module.id);