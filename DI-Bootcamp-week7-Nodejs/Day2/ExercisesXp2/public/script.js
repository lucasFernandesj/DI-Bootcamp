const { json } = require("express/lib/response");

fetch('/users')
.then((data)=>json.response(data))
.then((data)=>console.log(data))