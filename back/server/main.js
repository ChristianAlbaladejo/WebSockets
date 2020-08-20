var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var messages = [{
      carniceria: 0,
      fruteria: 0,
      pescaderia: 0,
      panaderia: 0
}];

app.use(express.static('public'));

app.get('/hello', function (req, res) {
      res.status(200).send("Hello World!");
    
});

io.on('connection', function (socket) {
      console.log('Alguien se ha conectado con Sockets');
      socket.emit('messages', messages);
    
      socket.on('new-message', function (data) {
            messages[0].carniceria = data.carniceria;
            messages[0].fruteria = data.fruteria;
            messages[0].pescaderia = data.pescaderia;
            messages[0].panaderia = data.panaderia;
            io.sockets.emit('messages', messages);
        
    });
    
});

server.listen(8080, function () {
      console.log("Servidor corriendo en http://192.168.200.227:8080");
});