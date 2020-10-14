let http = require('http');

http.createServer(function(req, resp){
    resp.writeHead(404,{"Content-Type" : "text/html"});
    resp.write("Hello World !!");
    resp.end();
}).listen(8080);