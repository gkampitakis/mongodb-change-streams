'use strict';

const { ObjectID } = require('mongodb');

async function create (fastify, req, res) {
  const payload = {
    message: req.body.message,
    createdAt: Date.now()
  };

  await fastify.mongodb.collection('notifications')
    .insertOne(payload);

  return payload;
}

function retrieve (fastify, req, res) {
  const _id = getObjectId(req);

  return fastify.mongodb.collection('notifications')
    .findOne({ _id });
}

function retrieveAll (fastify, req, res) {
  return fastify.mongodb.collection('notifications')
    .find().toArray();
}

async function update (fastify, req, res) {
  const _id = getObjectId(req);
  const { message } = req.body;

  await fastify.mongodb.collection('notifications')
    .updateOne({ _id }, {
      $set: {
        message,
        modifiedAt: Date.now()
      }
    });

  return { message };
}

async function _delete (fastify, req, res) {
  const _id = getObjectId(req);

  await fastify.mongodb.collection('notifications')
    .deleteOne({ _id });

  return { id: req.params.id };
}

function getObjectId (req) {
  const { id } = req.params;

  try {
    return ObjectID(id);
  } catch (error) {
    throw new Error('Invalid id provided');
  }
}

module.exports = {
  create,
  retrieve,
  retrieveAll,
  update,
  _delete
};
