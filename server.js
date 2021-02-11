const express = require('express');
const app = express();
const http = require('http').createServer(app);

const AppConfig = require('./config.json');

const RootRouter = require('./routes/');

app.use('/', RootRouter);

app.listen(AppConfig.port, () => {
    console.log(`Started Live Notifications server on port ${AppConfig.port}`);
});