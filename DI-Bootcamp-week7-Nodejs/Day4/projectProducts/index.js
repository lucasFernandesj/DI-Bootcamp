const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "public"));
app.set("view engine", "ejs");
const fs = require('fs');
const { DefaultDeserializer } = require('v8');



app.get('/' , (req , res)=>{
    res.sendFile(__dirname+'/public/index.html')
    
})

app.get('/views/res' , (req , res)=>{
    res.sendFile(__dirname+'/views/res.ejs' ,{params:req.body})
})


let arr=[]
app.post("/posted", (req, res) => {
    arr.push(req.body)
    
    console.log(arr)

    
        


       
    res.render("posted", { list: JSON.stringify(arr)  });
  });
  
app.listen(3000)