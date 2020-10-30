'use strict';

const { create, retrieve, retrieveAll, update, _delete } = require('./notifications');
const { createSchema, retrieveSchema, retrieveAllSchema, updateSchema, _deleteSchema } = require('./notifications.schema');

module.exports = (fastify, options, done) => {
  fastify.post('/', { schema: createSchema }, (req, res) => create(fastify, req, res));
  fastify.get('/:id', { schema: retrieveSchema }, (req, res) => retrieve(fastify, req, res));
  fastify.get('/all', { schema: retrieveAllSchema }, (req, res) => retrieveAll(fastify, req, res));
  fastify.put('/:id', { schema: updateSchema }, (req, res) => update(fastify, req, res));
  fastify.delete('/:id', { schema: _deleteSchema }, (req, res) => _delete(fastify, req, res));

  done();
};
