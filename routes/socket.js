const express = require('express');
const io = require('socket.io');

const router = express.Router();

router.get('/', (req, res) => res.json({text: 'da'}));

module.exports = router;