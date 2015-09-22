var Hoek = require('hoek');
var userRoutes = require('./user.js');

// Array de arrays de todas as rotas no sistema;
var route_array=[];
route_array.push(userRoutes);

exports.endpoints = Hoek.flatten(route_array);
