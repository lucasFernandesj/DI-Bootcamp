const express = require('express');
const app =express() 
const bodyParser = require('body-parser')
const router = express.Router();
const fs = require('fs');
const { nextTick } = require('process');



app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));









app.get('/items' , (req , res)=>{
    // let shoppingList;
    fs.readFile('shoppingList.json','utf8',(err ,data)=>{
        if(err){
            console.log(err)
        }
        //  shoppingList = JSON.parse(data)
        //  res.send(JSON.stringify(shoppingList),null,2)
        //  console.log(`list: ${shoppingList}`)
        //  console.log(`data: ${data}`)
        res.send(data)
    })
})

app.get('/items/:id' , (req , res)=>{

        fs.readFile('shoppingList.json','utf8',(err , data)=>{
            if(err){
                console.log(err)
            }
            let arr = JSON.parse(data)
            res.send(arr[req.params.id])
            

        })
        

})

app.post('/items' , (req , res, next)=>{
    try {
        let data = fs.readFileSync('shoppingList.json', 'utf8');
        
        let arr = JSON.parse(data)
        let name = req.body.name 
        let price = Number(req.body.price)
        let obj={
            id:arr.length,
            name:name,
            price:price
        }
        arr.push(obj)
        let newArr = JSON.stringify(arr,null,2)
        console.log(newArr)
        res.send(newArr)
        fs.writeFileSync('./shoppingList.json', newArr)
        
      } catch (err) {
        console.error(err);
      }
    
    
   
})




app.listen(3000)