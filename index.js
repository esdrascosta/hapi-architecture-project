var Hapi   = require('hapi');
var server = new Hapi.Server();
var Routes = require('./app/routes');
var models = require("./app/models");
var i18n = require('i18n');

//opcional: pode-se configurar a detecção do locale da request
i18n.configure({
    locales:['en', 'pt'],
    directory: __dirname + '/app/locales',
    defaultLocale: 'pt'
});

server.connection({
	host: 'localhost',
	port: Number(process.env.PORT || 3000)
});

server.route(Routes.endpoints);

models.sequelize.sync().then(function () {
	server.start(function(){
	  console.log('Server running at: ', server.info.uri);
	});
});
