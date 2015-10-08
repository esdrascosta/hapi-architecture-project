var server = require('./server');
var models = require("./lib/models");

models.sequelize.sync().then( () => {
	server.start( () => {
	  console.log(`Server running at: ${server.info.uri}`);
	});
});
