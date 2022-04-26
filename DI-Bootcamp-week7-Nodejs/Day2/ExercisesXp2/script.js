let server = import('./server')
let user = server.user


app.get('/' , (req , res)=>{
    res.json(user)
    
})



app.listen(3000 ,()=>console.log('listening on 3000'))