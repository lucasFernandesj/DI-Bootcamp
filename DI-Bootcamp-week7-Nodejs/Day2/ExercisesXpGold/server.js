const express = require('express');
const app = exp();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('public'));

app.post('/',(req, res) => {
    const {name, adress, phone, email} = req.body;
    res.send({
       name,
       adress,
       phone,
       email 
    });
}).listen(3001)