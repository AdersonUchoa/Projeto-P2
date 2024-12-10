const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const Passenger = sequelize.define("Passenger", {
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    birth_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    passport_number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Passenger;

