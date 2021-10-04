const express = require('express');
const app = express();

app.get('/hello',(req,res)=>{
    res.send('hello express');
});

app.listen(3000, ()=>{
    console.log("express server is runing");
});