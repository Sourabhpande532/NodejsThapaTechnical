// const fs = require('fs');
// const http = require('http');

// const server = http.createServer();

// server.on("request", (req,res)=>{
// // fs.readFile("input.txt", function(err,data){
// //     if(err) return console.error(err);
// //     res.end(data.toString());
// // })

// // 2nd way
// // reading from a Stream
// // crate a readable stream
// // handle stream events --DataTransfer, end, and error

// const fs = require("fs");
// const http = require("http");

// const server = http.createServer();

// server.on("request", (req, res) => {
    
// const events = fs.createReadStream("input.txt");

// events.on("data", (chunkdata) => {
// res.write(chunkdata);
//   });
// events.on("end", () => {
//     res.end();
//   });
//   events.on("error" , (err)=>{
//       res.end("file not found");
//   })
// });



// inspite of this one use simply pipe strem

// 3rd way of executive same program

const fs = require('fs');
const http = require('http');
const server = http.createServer();
server.on("request", (req,res)=>{
const pubg = fs.createReadStream('input.txt');
pubg.pipe(res);
})





server.listen(3000, "127.0.0.1");
