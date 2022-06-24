const path = require('path');

console.log(path.dirname('C:\Users\Saurabh\Desktop/nodejsP/pathModule/path.js'))
console.log(path.extname('C:\Users\Saurabh\Desktop/nodejsP/pathModule/path.js'))
console.log(path.basename('C:\Users\Saurabh\Desktop/nodejsP/pathModule/path.js'))

console.log(path.parse('C:\Users\Saurabh\Desktop/nodejsP/pathModule/path.js'))

const apath = path.parse('C:\Users\Saurabh\Desktop/nodejsP/pathModule/path.js')
console.log(apath.name);

const a = path.join("users", "Desktop", 'ChikDamkdumb')
console.log(a);