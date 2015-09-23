/**
 * Exemplo de um Model
 */
module.exports = function(sequelize, DataTypes){
    return sequelize.define('User',{
          id:{ type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
          name:{ type: DataTypes.STRING },
          age:{ type: DataTypes.INTEGER}
        });
}
