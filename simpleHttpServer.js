var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (request, response) {
	
	if(request.url.indexOf('?') > -1) {
		request.url = request.url.substring(0, request.url.indexOf('?'))
	}
	var filePath = '.' + request.url;
	if(filePath == './')
	{
		filePath = './index.html';
	}
	var extName = path.extname(filePath);
	var contType = 'text/html';
	switch(extName) {
		case '.js':
			contType = 'text/javascript';
			break;
		case '.css':
			contType = 'text/css';
			break;
		case '.png':
			contType = 'image/png';
			break;
	}

	fs.exists(filePath, function(exists) {
		if(exists) {
			fs.readFile(filePath, function(error, content){
				if(error) {
					response.writeHead(500);
					response.end();
				}else{
					response.writeHead(200, {'Content-Type':contType});
					response.end(content, 'utf-8');
				}
			});
		}else{
			response.writeHead(404);
			response.end();
		}
	});
	
}).listen(8125);
console.log('Server is running at http://127.0.0.1:8125/');