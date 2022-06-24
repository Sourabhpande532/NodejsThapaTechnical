const fs = require("fs");

// fs.writeFile("Sync.txt", "welcome to sync model :)" , (err) =>{
// console.log("callback files");
// console.log(err);

// })

// fs.appendFile("Sync.txt", " How's my own model Is it ok " , (err) =>{
//     console.log("task completed");
    
//     })

// fs.readFile("Sync.txt" , "utf8" , (err,data) =>{
//     console.log(data);
// })

// synchronus model
// const data = fs.readFileSync("Sync.txt", "utf-8")
// console.log(data);
// console.log("after the data");

// asynchrons model
// fs.readFile("Sync.txt" , "utf-8", (err, data) =>{
// console.log(data);

// })
// console.log('complete the process first');


fs.writeFile("Bio.txt" , "Hi Whats up Gues How are you Are you");
