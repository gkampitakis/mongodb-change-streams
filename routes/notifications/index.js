'use strict';

const { create, retrieve, retrieveAll, update, _delete } = require('./notifications');

module.exports = (fastify, options, done) => {
  fastify.post('/', (req, res) => create(fastify, req, res));
  fastify.get('/:id', (req, res) => retrieve(fastify, req, res));
  fastify.get('/all', (req, res) => retrieveAll(fastify, req, res));
  fastify.put('/:id', (req, res) => update(fastify, req, res));
  fastify.delete('/:id', (req, res) => _delete(fastify, req, res));

  done();
};
