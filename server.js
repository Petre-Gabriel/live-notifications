const express = require('express');
const app = express();
const http = require('http').createServer(app);

// Security
const helmet = require('helmet');
const cors = require('cors');

// Models
const User = require('./models/User');

const AppConfig = require('./config.json');
const RootRouter = require('./routes/');


app.use(cors());
app.use(helmet());

const io = require('socket.io')(http, {
    path: '/',
    serveClient: AppConfig.exposeSocketIOFile,
    pingInterval: 10000,
    pingTimeout: 5000,
    cookie: false,

    cors: {
        origin: '*'
    }
});

// Middlewares
app.use('/', (req, res, next) => {
    res.set('X-Powered-By', 'Live Notifications Gabriel');
    res.io = io;
    
    next();
});
app.use('/', RootRouter.router); // for the router

io.on('connection', socket => {
    const {token, username} = socket.handshake.auth;
    socket.validatedUser = User.validateSocketID(username, token, socket.id);

    /* 
        Make the WS server accesible in any route
    */
    socket.onAny((eventName, ...args) => {
        RootRouter.emitEvent(eventName, socket, ...args);
    })
});

http.listen(AppConfig.port, () => {
    console.log(`Started Live Notifications server on port ${AppConfig.port}`);
});