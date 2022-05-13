const express = require ('express')
const app = express()
const cors  =require('cors')
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())



app.listen(3000 ,()=>console.log('listening on 3000'))



app.post('/api',(req,res)=>{
    const {msg} = req.body
    console.log(req.body)
    res.send(`received POST request: ${msg}`)
})


app.get('/api/users',(req,res)=>{
    
    res.json([
        {"id":1,"firstName":"John","lastName":"Doe"},
{"id":2,"firstName":"Jane","lastName":"Doe"},
{"id":3,"firstName":"Ziv","lastName":"Chen"},
{"id":4,"firstName":"Isaac","lastName":"Groisman"},
{"id":5,"firstName":"Avner","lastName":"Maman"},
{"id":6,"firstName":"Megan","lastName":"Dreyfuss"}
     ]);
})