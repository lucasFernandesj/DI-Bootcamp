const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const axios = require('axios');
const req = require('express/lib/request');
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/find' , (req , res)=>{
    getUser()
    res.sendFile(__dirname+'/public/find')
})




async function getUser() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      const data = await response.json()
      for(var i = 0 ; i < data.length ; i++){
          if(data.name === req.body.name){
              appendUser(data[i])
          }
      }
    } catch (error) {
      console.error(error);
    }
  }


  function appendUser(element){
    let div = document.createElement('div')
    div.innerText = element.name
    document.body.appendChild(div)
  }