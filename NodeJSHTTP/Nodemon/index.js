//npm i -g nodemon
const http = require('http');

const server = http.createServer((request,response)=>{
    console.log("find new want");
    // console.log(request.url);
    // console.log(request.headers);
    // console.log(request);
    response.writeHead(200,{'content-type':'text/html;charset=utf-8' });
    response.write("<h1>Hello Node Həsən</h1>");
    response.end();
});
server.listen(3000);
