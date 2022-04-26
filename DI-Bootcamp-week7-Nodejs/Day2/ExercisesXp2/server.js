const express = require('express')
const app = express() 


const user = {
    firstname: 'John',
    lastname: 'Doe'
}

// app.get('/' , (req , res)=>{
//     res.json(user)
    
// })


//exercise 2
app.get('/:id' , (req , res)=>{
    console.log(req.params.id) 
    res.json(req.params)
})

//exercise 3
app.use('/' , express.static('public'))






module.exports={
    user:user
}

app.listen(3000 ,()=>console.log('listening on 3000'))