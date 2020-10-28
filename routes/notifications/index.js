'use strict';

const { create, retrieve, retrieveAll, update, _delete } = require('./notifications');

module.exports = (fastify, options, done) => {
  fastify.post('/', create);
  fastify.get('/:id', retrieve);
  fastify.get('/all', retrieveAll);
  fastify.put('/:id', update);
  fastify.delete('/:id', _delete);

  done();
}