const fs = require('fs');

fs.appendFile('demo.txt', 'hello node \n',(err)=>{
    if(err)
    throw err;
    console.log('success');
});


fs.writeFile('demo1.txt', 'hello JS1  \n',(err)=>{
    if(err)
    throw err;
    console.log('success');
});

fs.writeFile('demo2.txt', 'hello JS1  \n',(err)=>{
    if(err)
    throw err;
    console.log('success');
});