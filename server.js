'use strict';

const server = require('fastify')();
const { mongoPlugin } = require('./plugins');
const routes = require('./routes');

server.register(mongoPlugin, {
  url: 'mongodb://localhost:27017'
});

server.register(routes);

module.exports = server;
