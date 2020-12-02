
var fs=require('fs');

fs.promises.stat(__dirname)
.then(d=>console.log(d.isDirectory()))