//TODO tratar erros e criar Helpers/Managers
var User = require('../models').User;
var Boom = require('boom');
var Messages = require('i18n').__;

module.exports = {
  create: function (request, reply){
      User.create({
                  name: request.payload['name'],
                  age: request.payload['age']
              }).then(function (data) {
                  reply({ 'id' : data.id, 'message': Messages('hello') }).code(201);
              },function(err){
                    reply(Boom.badRequest(i18n_('unexpected_error'), err));
              });
  },
  getAll: function (request, reply){

    User.all().then(function(users){
        reply(users);
    });

  },
  getOne:  function (request, reply){
      return reply("getAne");
  },
  update: function (request, reply){
      return reply("update");
  },
  remove: function (request, reply){
      return reply("remove");
  }
};
