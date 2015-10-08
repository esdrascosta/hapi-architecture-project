//TODO utilizar joi para validação das rotas
var UserCtrl = require('../controllers').user;
var userCtrl = new UserCtrl();
var Joi = require('joi');

var schemaParams = Joi.object().keys({
    userId : Joi.number().integer()
});

var schemaPayload =  Joi.object().keys({
  name: Joi.string(),
  age: Joi.number().integer()
});

module.exports = [
  {
    method: 'POST',
    path: '/user',
    handler: userCtrl.create,
    config:{
        payload:{
          allow: 'application/json'
        },
        validate:{
          payload: schemaPayload
        }
    }
  },
  {
    method: 'GET',
    path: '/user',
    handler: userCtrl.getAll,
  },
  {
    method: 'GET',
    path: '/user/{userId}',
    handler: userCtrl.getOne,
    config:{
      validate:{
        params: schemaParams
      }
    }
  },
  {
    method: 'PUT',
    path: '/user/{userId}',
    handler: userCtrl.update,
    config:{
      payload:{
        allow: 'application/json'
      },
      validate:{
        params: schemaParams,
        payload: schemaPayload
      }
    }
  },
  {
    method: 'DELETE',
    path: '/user/{userId}',
    handler: userCtrl.remove,
    config:{
      validate:{
        params: schemaParams
      }
    }
  }
]
