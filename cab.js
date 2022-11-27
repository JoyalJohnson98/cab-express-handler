const sequelize = require('./db');
const { DataTypes } = require('sequelize');

const Cab_Details = sequelize.define('cab', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },
    name: {
        type: DataTypes.STRING(15),
        allowNull: false

    },
    color: {
        type: DataTypes.STRING(16),
        allowNull: false
    },

    cabplateno: {
        type: DataTypes.STRING(16),
        allowNull: false,
        unique: true

    },
    cabsize: {
        type: DataTypes.STRING(20),
        allowNull: false
        


    },
    


});

module.exports = Cab_Details;