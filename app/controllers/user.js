//TODO tratar erros e criar Helpers/Managers
var User = require('../models').User;
var Boom = require('boom');
var Messages = require('i18n').__;

function UserCtrl() {
    if(!(this instanceof UserCtrl)) return new UserCtrl();
}

UserCtrl.prototype.create = function (request, reply) {

  User.create({
              name: request.payload['name'],
              age: request.payload['age']
          }).then(function (data) {
              reply({ 'id' : data.id }).code(201);
          },function(err){
                reply(Boom.badRequest(i18n_('unexpected_error'), err));
          });
};

UserCtrl.prototype.getAll = function (request, reply) {
  User.all().then(function(users){
      reply(users);
  },function(err){
    reply(Boom.badRequest(i18n_('unexpected_error'), err));
  });
};

UserCtrl.prototype.getOne = function (request, reply) {
    var userId = request.params.userId;
    User.findById(userId).then(function(user){
      if(user)
        reply(user);
      else
        reply(Boom.notFound(  Messages('%s not_found', 'User : '+userId )));
    },function(err){
      reply(Boom.badRequest(i18n_('unexpected_error'), err));
    });
};

UserCtrl.prototype.update = function (request, reply) {

  var userId = request.params.userId;
  var name = request.payload['name'],
      age = request.payload['age'];

    var u = {};
    if(name) u['name']=name;
    if(age) u['age']=age;

  User.findById(userId).then(function(user) {

    if(user){

      user.update(u).then(function(user) {
        reply().code(204);
      },function(err) {
        reply( Boom.badRequest(i18n_('unexpected_error'), err) );
      });

    }else{
      reply( Boom.notFound( Messages('%s not_found', 'User : '+userId ) ) );
    }

  },function(err){
    reply(Boom.badRequest(i18n_('unexpected_error'), err));
  });
};

UserCtrl.prototype.remove = function (request, reply) {

  var userId = request.params.userId;

  User.findById(userId).then(function(user){
    if(user){
      user.destroy();
      reply().code(204);
    } else{
      reply( Boom.notFound( Messages('%s not_found', 'User : '+userId ) ) );
    }
  },function(error) {
    reply(Boom.badRequest(i18n_('unexpected_error'), err));
  });
};

module.exports = UserCtrl;
