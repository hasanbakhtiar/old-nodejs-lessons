const express = require('express');
const app = express();


app.set('view engine', 'pug');



// app.get('/',(req,res)=>{
//     res.render('index',{name: "Hasan",job:"Programer"});
// });

app.get('/',(req,res)=>{
    res.render('index',{name: "Hasan",job:"Programer"});
});

app.get('/home',(req,res)=>{
    res.render('home');
});

app.get('/contact',(req,res)=>{
    res.render('contact');
});

app.listen(3000, ()=>{
    console.log("express server is runing");
});