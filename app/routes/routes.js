var Hoek = require('hoek');

// Array de arrays de todas as rotas no sistema;
var route_array=[];

var userRoutes = require('./user/user');
route_array.push(userRoutes);

module.exports = {
	endpoints :	Hoek.flatten(route_array)
}
