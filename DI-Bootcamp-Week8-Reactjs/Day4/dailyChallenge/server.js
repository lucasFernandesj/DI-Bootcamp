const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.listen(process.env.PORT||5000,()=>{
    console.log(`listening on port ${process.env.PORT||5000}`)
})


app.get('/api/hello' , (req , res)=>{
    res.send('Hello from express')
})

app.post('/api/world' , (req , res)=>{
    const {text} = req.body
    res.send(`received POST request: ${text}`)
})


app.get('/api/test' , (req , res)=>{
    res.send('Test working')
})