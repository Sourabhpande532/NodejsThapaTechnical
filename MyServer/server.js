const fs  = require("fs")
const http = require("http");
const { userInfo } = require("os");
const server = http.createServer((req, res) => {


const data =  fs.readFileSync(`${__dirname}/userAPI/userAPI.json`,"utf-8")
const objData = JSON.parse(data); 



  // console.log(req.url);
  if (req.url == "/") {
    res.end("the server is own by me no any one ");
  }
   else if 
   (req.url == "/about") {
    res.end("This is about");

  }
   else if (req.url == "/userAPI") {
// fs.readFile(`${__dirname}/userAPI/userAPI.json`,"utf-8", (err, data)=>{
//     console.log(data);
//     const objData = JSON.parse(data);
    // we have to transfer data above for calling problem
    res.writeHead(200, {"Content-type": "application/json"});
    // ye batanahich padta hai a/c to rule
    
    res.end(objData.version);


// if the file are Arry of object mens[{}] use objData[ind0,1,2].je pahije te like name
 // if you want show use res.end()
 // res.end("This is system userAPI");

  }
   else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1>404 Error</h1>");
  }

});


server.listen(3000, "127.0.0.1", () => {
  console.log("The server is running on 3000");
});
