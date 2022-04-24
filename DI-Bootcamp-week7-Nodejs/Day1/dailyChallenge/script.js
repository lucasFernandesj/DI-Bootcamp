const main = require('./main')
const http = require('http')




const b = 5;

const sum = main.largeNumber + b
console.log(sum)



http.createServer(function (req, res) {
    res.send(`My module is:\n${sum} 
    <h1>Hi there at the front end</h1>
    `); 
    
  }).listen(3000); 

  
