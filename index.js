var Hapi = require('hapi');
var server = new Hapi.Server();
var Routes = require('./app/routes');

server.connection({
	host: 'localhost',
	port: Number(process.env.PORT || 3000)
});

server.route(Routes.endpoints);
server.start(function(){
  console.log('Server running at: ', server.info.uri);
});
