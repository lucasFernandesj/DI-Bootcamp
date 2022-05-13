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

