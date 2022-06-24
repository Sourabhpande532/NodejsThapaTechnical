const os = require('os');

console.log(os.arch());
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());
console.log(os.uptime());
console.log(os.version());
console.log(os.userInfo());
console.log(os.release());
console.log(os.constants);
console.log(os.cpus());


const freememory = os.freemem();
// console.log(freememory);
console.log(`${freememory/1024 /1024/ 1024}`)

const totatme = os.totalmem();
// console.log(freememory);
console.log(`${totatme /1024 /1024/ 1024}`)