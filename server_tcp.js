var net = require('net'); //wciagamy biblioteke o nazwie net;

var server = net.createServer(function(socket) { //tworzymy serwer
	socket.write('Echo server\r\n');  //wyslalnie wiadomosci
	socket.pipe(socket);  //tunelowania gniazda
});

server.listen(52275, '127.0.0.1'); //nasluchiwanie na porcie adresu