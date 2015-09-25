//TODO utilizar joi para validação das rotas
var User = require('../controllers').user;
var Joi = require('joi');

module.exports = [
  {
    method: 'POST',
    path: '/user',
    handler: User.create,
    config:{
        payload:{
          allow: 'application/json'
        },
        validate:{
          payload:{
              name: Joi.string(),
              age: Joi.number().integer()
          }
        }
    }
  },
  {
    method: 'GET',
    path: '/user',
    handler: User.getAll,
  },
  {
    method: 'GET',
    path: '/user/{userId}',
    handler: User.getOne,
  },
  {
    method: 'PUT',
    path: '/user/{userId}',
    handler: User.update
  },
  {
    method: 'DELETE',
    path: '/user/{userId}',
    handler: User.remove
  }
]
