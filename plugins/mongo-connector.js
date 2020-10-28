'use strict';

const { MongoClient } = require('mongodb');
const fp = require('fastify-plugin');

module.exports = fp(async (fastify, { url }) => {
  const client = await MongoClient.connect(url);

  fastify.decorate('mongodb', client);

  fastify.addHook('onClose', async () => {
    await client.close();
  });
});
