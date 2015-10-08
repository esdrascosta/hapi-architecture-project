"use strict";

//TODO tratar erros e criar Helpers/Managers
var User = require('../models').User;
var Boom = require('boom');
var Messages = require('i18n').__;

class UserCtrl {

  create(request, reply) {
    User.create({
      name: request.payload['name'],
      age: request.payload['age']
    }).then(
      (data) => {
        reply({
          'id': data.id
        }).code(201);
      }, (err) => {
        reply(Boom.badRequest(i18n_('unexpected_error'), err));
      }
    );
  }

  getAll(request, reply) {
    User.all().then((users) => {
      reply(users);
    }, (err) => {
      reply(Boom.badRequest(i18n_('unexpected_error'), err));
    });
  }

  getOne(request, reply) {
    var userId = request.params.userId;
    User.findById(userId).then((user) => {
      if (user)
        reply(user);
      else
        reply(Boom.notFound(Messages('%s not_found', 'User : ' + userId)));
    }, (err) => {
      reply(Boom.badRequest(i18n_('unexpected_error'), err));
    });
  }

  update(request, reply) {

    var userId = request.params.userId;
    var name = request.payload['name'],
      age = request.payload['age'];

    var u = {};
    if (name) u['name'] = name;
    if (age) u['age'] = age;

    User.findById(userId).then((user) => {

      if (user) {

        user.update(u).then((user) => {
          reply().code(204);
        }, (err) => {
          reply(Boom.badRequest(i18n_('unexpected_error'), err));
        });

      } else {
        reply(Boom.notFound(Messages('%s not_found', 'User : ' + userId)));
      }

    }, (err) => {
      reply(Boom.badRequest(i18n_('unexpected_error'), err));
    });
  }

  remove(request, reply) {

    var userId = request.params.userId;

    User.findById(userId).then((user) => {
      if (user) {
        user.destroy();
        reply().code(204);
      } else {
        reply(Boom.notFound(Messages('%s not_found', 'User : ' + userId)));
      }
    }, (error) => {
      reply(Boom.badRequest(i18n_('unexpected_error'), err));
    });
  };

}

module.exports = UserCtrl;
