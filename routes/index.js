const express = require('express');
const SocketRouter = require('./socket.js');

const router = express.Router();

const validListeners = [SocketRouter];

router.use('/socket', SocketRouter.router);

const emitEvent = (eventName, ...args) => {
    validListeners.forEach(listener => {
        if(listener.validEvents[eventName] && typeof listener.validEvents[eventName] === 'function') {
            listener.validEvents[eventName](...args);
        }
    })
}

module.exports = {
    router,
    emitEvent
};