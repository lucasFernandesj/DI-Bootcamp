let http = require('http');



http.createServer(function (req, res) {
    res.send("<h1>This is the first response</h1> <h2>This is the second response</h2> <h3>This is the third response</h3>")
  }).listen(3000);

  