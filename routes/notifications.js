const express = require('express');

const router = express.Router();

router.get('/', (req, res) => res.send('This is the route for the notifications socket.'));

// Socket events
const validEvents = {
    // Create object methods named by the socket event name you want to listen to
    'ready': (socket, ...args) => {
        if(socket.validatedUser === null)
            socket.emit('notification', 'User is not valid.');
        else {
            setInterval(() => {
                socket.emit('notification', `User #${socket.validatedUser.id}`);
            }, 2000);
        }
    }
}

module.exports = {
    router,
    validEvents
};