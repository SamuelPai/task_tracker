const Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes){
    
    var Task = sequelize.define("Task", {
        id: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        task: Sequelize.STRING(300),
        completed: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
    });
return Task;
}