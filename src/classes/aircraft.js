const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const Aircraft = sequelize.define("Aircraft", {
    model: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    manufacturer: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = Aircraft;