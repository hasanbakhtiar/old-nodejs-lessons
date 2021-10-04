//npm i -g nodemon
const http = require('http');
const fs = require('fs');

const server = http.createServer((request,response)=>{

    response.writeHead(200,{'content-type':'text/html;charset=utf-8' });
    fs.readFile('test.html',(err,data)=>{
        if(err)
        throw err;
        response.end(data)
    })
});
server.listen(3000);
