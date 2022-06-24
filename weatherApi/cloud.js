// https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=4cd6e65c93931133bb70a0a36b4828c0
// https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=4cd6e65c93931133bb70a0a36b4828c0
const fs = require("fs");
const http = require("http");
const { url } = require("inspector");
const requests = require("requests");
const { json } = require("stream/consumers");

const homeFile = fs.readFileSync("index.html",'utf-8');

const replaceval = (tempVal, orgVal)=>{
    // this is parameter his called in create servr 
    let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp);
    temperature = temperature.replace("{%tempmin%}", orgVal.main. temp_min)
    temperature = temperature.replace("{%tempmax%} ", orgVal.main.temp_max)
    temperature = temperature.replace("{%location%}", orgVal.name)
    temperature = temperature.replace("{%country%}", orgVal.sys.country)
    temperature = temperature.replace("{%tempStatus%}", orgVal.weather[0].main)

    return temperature;  
}

const server = http.createServer((req,res)=>{
    if (req.url == "/"){
        requests(" https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=4cd6e65c93931133bb70a0a36b4828c0")
.on('data', (chunk) =>{
    const turnInObj = JSON.parse(chunk)
    const turnInArry = [turnInObj]
//   console.log(turnInArry[0].main.temp);
// while calling map method dont need to write [0].main.tepm 
// simply used console.log(val.main)

const realTimeData = turnInArry
.map((val)=> replaceval(homeFile,val))
.join("");

    // const realTimeData = turnInArry.map((val)=>{
    //     replaceval(homeFile,val)
    // })
    res.write(realTimeData);
    // console.log(realTimeData);

})
.on('end',  (err)=> {
  if (err) return console.log('connection closed due to errors', err);
 
//   console.log('end');
res.end();
});
    }

})

server.listen(3000, "127.0.0.1");