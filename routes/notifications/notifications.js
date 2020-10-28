'use strict';

function create (req, res) {
  return { message: 'Hello World' };
}

function retrieve (req, res) {
  return { message: 'Hello World' };
}

function retrieveAll (req, res) {
  return { message: 'Hello World' };
}


function update (req, res) {
  return { message: 'Hello World' };
}

function _delete (req, res) {
  return { message: 'Hello World' }
}

module.exports = {
  create,
  retrieve,
  retrieveAll,
  update,
  _delete
};