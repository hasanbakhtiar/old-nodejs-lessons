const http = require('http');

const server = http.createServer((request,response)=>{

    response.writeHead(200,{'content-type':'text/html;charset=utf-8' });
   if(request.method === "GET"){
            if(request.url === '/')
            response.write("u here index");
            else if(request.url === '/contact')
            response.write('u here contact')
            else
            response.write('not found')}

});
server.listen(3000);
