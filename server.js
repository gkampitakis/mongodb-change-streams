'use strict';

const server = require('fastify')();
const { mongoPlugin } = require('./plugins');
const routes = require('./routes');

server.register(mongoPlugin, {
  url: 'mongodb://localhost:27011,localhost:27012,localhost:27013/?replicaSet=rs0',
  database: 'change-streams',
  mongoOptions: {
    useUnifiedTopology: true
  }
});

server.register(routes);

module.exports = server;
