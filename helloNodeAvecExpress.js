var express = require('express');
var app = express();

app.get('/',(request,response)=>{
    response.setHeader('Content-type','text/plain');
    response.end('Bonjour de Node.js avec Express');
});

app.listen(8888);

console.log("heloo houuuuu");