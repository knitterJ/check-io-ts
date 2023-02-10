// Node implements File I/O using simple wrappers around standard POSIX functions. The Node File System (fs) module can be imported using the following syntax −
var fs = require('fs');


var text = fs.readFileSync("./mytext.txt").toString('utf-8');
console.log(text);
