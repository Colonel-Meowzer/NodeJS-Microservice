'use strict';
module.exports = function(sequelize, DataTypes) {
  var hello_world = sequelize.define('hello_world', {
    hello: DataTypes.STRING,
    world: DataTypes.STRING
  }, 
  {
    schema: "ods"
  });
  return hello_world;
};