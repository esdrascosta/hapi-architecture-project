/**
 * Carrega os controllers disponibilizado pelo nome do arquivo
 */
var loader = require('../util/loader');

var controllers = {};

loader(__dirname,(file) => {
  var controllerName = file.substring(0,file.indexOf('.'));
  controllers[controllerName] = require('./'+file);
});

module.exports = controllers;
