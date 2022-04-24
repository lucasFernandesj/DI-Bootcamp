const date = require('./main2') 
const http = require('http') 

http.createServer(req , res =>{
    res.send(`<h1>${date.getDate}</h1>`)
}).listen(8080)