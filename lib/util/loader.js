/**
 * Encontra todos os arquivos contidos em um determinado diretório
 */
var fs = require('fs');

module.exports = function(directory,cb){
  fs.readdirSync(directory)
    .filter(function(file) {
      return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function(file) {
        cb(file);
    });
};
