const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res){
    if(req.url === '/formSheet'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream('../form/formSheet.html').pipe(res);
        
        // res.writeHead(200, {'Content-Type': 'text/javascript'});
        // fs.createReadStream('../verifyInput.js').pipe(res);
    }
    else if(req.url === '/carlosm'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream('../index.html').pipe(res);
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream('./404.html').pipe(res);
    }
});

server.listen(3000, '127.0.0.1');
console.log(`Server running at http://127.0.0.1:3000/`);