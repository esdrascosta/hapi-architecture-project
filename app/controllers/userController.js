module.exports = {
  create: function (request, reply){
      return reply("create");
  },
  getAll: function (request, reply){
      return reply("getAll");
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
