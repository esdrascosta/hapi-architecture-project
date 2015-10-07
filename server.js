var Hapi   = require('hapi');
var server = new Hapi.Server();
var models = require("./lib/models");
var Routes = require('./lib/routes');
var i18n = require('i18n');

//opcional: pode-se configurar a detecção do locale da request
i18n.configure({
    locales:['en', 'pt'],
    directory: __dirname + '/lib/locales',
    defaultLocale: 'pt'
});

server.connection({
	host: 'localhost',
	port: Number(process.env.PORT || 3000)
});
server.route(Routes.endpoints);

module.exports=server;
