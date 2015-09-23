/**
 *  Modulo que carrega as rotas dos arquivos
 */
var Hoek = require('hoek');
var loader = require('../util/loader')

/**
 * Array de array de todas as rotas no sistema
 */
var route_array=[];

loader(__dirname,function(file){
  var route = require('./'+file);
  route_array.push(route);
});

exports.endpoints = Hoek.flatten(route_array);
