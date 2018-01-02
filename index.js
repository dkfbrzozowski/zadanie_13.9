/*var http = require('http');
var server = http.createServer();
server.on('request', function (request, response) {
    //tutaj coś się dzieje :)
});

server.listen(9000);

server.on('request', function (request, response) {
    response.write('Hello world!');
    response.end();
});
*/



var http = require('http'),
    file = require('fs');

    server = http.createServer();
server.on('request', function(request, response){
    
    if (request.method === 'GET' && request.url === '/' ) {
        response.setHeader('Content-Type', 'text/html; charset=utf-8');
        file.readFile('./index.html', 'utf-8', function(err, data){ 
            response.write(data);
            response.end();
        });
    } else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'image/jpg');

        file.readFile('./404_error.jpg', function(err, data){ 
            
            response.write(data);
            response.end();
        });
    }
});

server.listen(9000);