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

// var foo = require("foo");
// var t = new foo();
// t.test();
// console.log(module.id);
var fs = require('fs');
fs.readFile('./fs_test.txt', function (err, data) {
    // console.log(data);
    // console.log(data.toString())
});

// fs.readFile('./fs_test.txt', 'utf8', function (err, data) {
//     // console.log(data);
//     // console.log(data.toString())
// });
//
// fs.readFile('./fs_test.txt', {encoding: 'utf8', flag: 'r'}, function (err, data) {
//     console.log(data)
// });
// let $write_data = "this is a write_test";
// let buffer = Buffer.from("我喜爱编程");
// console.log(buffer);
// buffer = Buffer.from("我不喜欢编程");
// fs.writeFile('./fs_test_write.txt',buffer,{flag:'a'},function(err){
//     if(err){
//         console.log("error")
//     }
// });

// fs.readFile('./static/1024.png',function(err,data){
//     // console.log(data);
//     fs.writeFile('./static/1024_copy.png',data,function(err){
//         if(err)console.log('err');
//         else console.log('success')
//     });
// });

// fs.appendFile('./fs_test_write.txt',"this is append",function (err) {
//
// });
let sd = require("string_decoder").StringDecoder;
let coder = new sd();
// fs.open('./fs_test.txt','r',function (err,fd) {
//    // console.log(fd);
//    fs.read(fd,buf,0,9,null,function (err,bytesRead,buffer) {
//        console.log(bytesRead);
//        console.log(buf);
//        // let coder = new sd();
//        // let str = coder.write(buffer);
//       // console.log(str);
//        console.log(buffer.slice(0,bytesRead).toString())
//        console.log(coder.write(buffer))
//    });
// });
// buf.write("他不喜欢编程");
// let buf = Buffer.from("他不喜欢编程");

// fs.open('./fs_test.txt',"a",function (err,fd) {
//     console.log(fd);
//     // 文件使用open打开后需要关闭
//     fs.write(fd,buf,0,6,0,function (err,written,buffer) {
//         fs.fsync(fd,function () {
//            
//         });
//         fs.close(fd,function (err) {
//             if(!err)console.log("close success")
//         })
//     });
// })

// fs.mkdir('./mkdir_test',function (err) {
//     if(!err)console.log("mkdir success")
// })

// fs.readdir("./",function (err,files) {
//     console.log(files)
// })

// fs.lstat("./",function(err,stats){
//     console.log(stats)
//     // console.log(stats.isFile());
// });
//
// fs.stat("./",function (err, stats) {
//     console.log(stats)
// })

// let exists = fs.existsSync("./fs_test.txt");
// console.log(exists);
// fs.realpath('./fs_test.txt',function (err,path) {
//     console.log(path);
// });

// fs.utimes("./fs_test.txt",new Date(),new Date(),function (err) {
//
// })

// 直接使用 0400 或者 0o400 都代表八进制
// fs.chmod("./fs_test.txt",0o400,function (err) {
//     if(!err)console.log("chmod success")
//     else console.log(err)
// })
//
// fs.chmod("./fs_test.txt",fs.constants.S_IRUSR,function (err) {
//     if(!err)console.log("chmod success")
//     else console.log(err)
// })
//
// fs.rename("./fs_test.txt",'./mkdir_test/fs_test2.txt',function(err){
//     if(err)console.log(err)
// });

// fs.link("./mkdir_test/fs_test2.txt",'./fs_test_link.txt',function (err) {
//     if(err)console.log(err)
// })

// fs.unlink('./fs_test_write.txt',function(err){
//     if(err)console.log(err)
// })

// fs.writeFile("./fs_test_link.txt","测试硬链接",{flag:'w'},function (err) {
//     if(err)console.log(err);
// })

// fs.symlink("./","./dir",'junction',function(err){if(err)console.log(err)})

let buf = Buffer.from("位置追加内容");
fs.open('./fs_test_link.txt','a',function(err,fd){
    fs.write(fd,buf,0,6,2,function(err,written,buffer){
        fs.fsync(fd,function () {
            
        });
        fs.close(fd,function () {

        })
    });
})