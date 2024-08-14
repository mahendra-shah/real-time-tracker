const express = require('express');
const path = require('path');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname + '/public')));

io.on('connection', (socket) => {
    console.log('a user connected');

    // socket.on('set-role', (role) => {
    //     users[socket.id] = { role, location: null };
    //     console.log(`User with ID ${socket.id} is a ${role}`);
    // });

    socket.on('send-location', (location) => {
        io.emit('get-location', {id: socket.id, ...location});
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
        io.emit('user-disconnect', socket.id);
    });
});

app.get('/', (req, res) => {
    res.render('index');
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});
