const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// const configRoutes = require('../config/routes.js')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

//configRoutes(server)

server.get('/', (req, res) => {
    res(200).send('Server Running');
})

module.exports = server;