const express = require('express')
const bodyParser = require('body-parser');
const app = express()

let list=[
    {id: 1 ,name:'ball', price:10},
    {id: 2 ,name:'hat', price:20}
]

app.get('/items',(req , res)=>{
    res.send(list)
})

app.get('/items/:id' , (req , res)=>{
    
    res.send(req.params.id)
})

app.post('/items' , (req,res)=>{
    let obj={
        id:list.length+1,
        name:req.body.name,
        price:req.body.price
    }
    list.push(obj)
    res.send('item added')
})


app.listen(3000)