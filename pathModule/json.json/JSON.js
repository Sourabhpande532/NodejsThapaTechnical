const fs = require("fs");
const { json } = require("stream/consumers");
const bioData = {
    name: "saurabh",
    age: "22",
    eduction: "B-voc"
}
// console.log(bioData);befour

// const jsonData = JSON.stringify(bioData)

// const objData = JSON.parse(jsonData)
// console.log(objData)


// task
// convert to json
// dusre file me add krna hai
// readfile
// again convert back to js obj ori
// console.log

const data = JSON.stringify(bioData);
// fs.writeFile('json1.json', data ,JSON,(err)=>{
//     console.log('Done')
// });
fs.readFile('json1.json', 'utf-8', (err, convertJsonToObj)=>{
    // console.log(x);
    const oriData = JSON.parse(convertJsonToObj);
    console.log(oriData);
    console.log(convertJsonToObj)
    
})

