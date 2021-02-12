const express = require('express');
const NotificationsRoute = require('./notifications.js');

const router = express.Router();

const validListeners = [NotificationsRoute];

router.use('/messages', NotificationsRoute.router);

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