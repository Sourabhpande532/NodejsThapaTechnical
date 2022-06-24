const fs = require("fs");
const http = require("http");
const server = http.createServer((req,res)=>{
    
   const data = fs.readFileSync(`${__dirname}/myAPI/API.json`, "utf-8")
   const conObj = JSON.parse(data);



    if (req.url == "/"){
        res.end("hi Saurabh ")
    }
    if (req.url == "/about"){
        res.end("hi Saurabh This is you Bio zone ")
    }
    if (req.url == "/myAPI"){
      
        res.writeHead(200, {"Content-type": "application/json"});
        res.end(conObj.name);

    }
});
 
server.listen(8000, "127.0.0.1", ()=>{
    console.log("running on 8000")
})