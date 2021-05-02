var net = require('net');
var client = new net.Socket({writeable: true}); //writeable true does not appear to help

client.on('close', function() {
console.log('Connection closed');
});
client.on('error', function(err) {
console.error('Connection error: ' + err);
console.error(new Error().stack);
});

client.connect(52275, '127.0.0.1', function() {
var count = 0;
console.log('Connected');
console.time('Czas ramki');
client.write('message message');
client.end();
//bufferSize does not seem to be an issue
//console.info(client.bufferSize);

client.on('data', function(data) { //funckja wysylajaca dane
    console.log('Received: ' + data); //wysylanie danych
    console.timeEnd('Czas ramki'); //koniec wyliczania czasu
	//client.destroy(); // kill client after server's response
});

client.on('close', function() { //funckja, ktora zamyka polaczenie
	console.log('Connection closed'); //wiadomosc ze zamyka polaczenie
});
});