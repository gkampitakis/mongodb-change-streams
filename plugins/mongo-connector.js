'use strict';

const { MongoClient } = require('mongodb');
const fp = require('fastify-plugin');

module.exports = fp(async (fastify, { url, database, mongoOptions }, done) => {
  const client = new MongoClient(url, mongoOptions);

  await client.connect();

  fastify.decorate('mongodb', client.db(database));

  fastify.addHook('onClose', async () => {
    await client.close();
  });

  done();
});
