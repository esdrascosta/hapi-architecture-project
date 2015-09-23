//TODO tratar erros e criar Helpers/Managers
var User  = require('../models').User;

module.exports = {
  create: function (request, reply){
      User.create({
                  name: request.payload['name'],
                  age: request.payload['age']
              }).then(function () {
                  reply.redirect('/');
              });
  },
  getAll: function (request, reply){

    User.all().then(function(users){
      if (users){
        reply(users);
      }else{
        reply().code(404);
      }
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
}
