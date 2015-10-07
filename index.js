var server = require('./server');
var models = require("./lib/models");

models.sequelize.sync().then(function () {
	server.start(function(){
	  console.log('Server running at: ', server.info.uri);
	});
});
