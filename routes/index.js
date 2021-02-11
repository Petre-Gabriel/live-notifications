const express = require('express');
const SocketRouter = require('./socket.js');

const router = express.Router();

router.use('/socket', SocketRouter);

module.exports = router;