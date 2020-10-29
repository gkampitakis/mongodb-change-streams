'use strict';

const notifications = require('./notifications');

module.exports = (fastify, options, done) => {
  fastify.register(notifications, { prefix: '/notification' });

  done();
};
