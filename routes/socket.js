const express = require('express');

const User = require('../models/User');

const router = express.Router();

router.get('/', (req, res) => res.send('This is the route for the default socket.'));

// Socket events
const validEvents = {
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