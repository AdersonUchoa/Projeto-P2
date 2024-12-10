const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const Flight = sequelize.define("Flight", {
    flight_number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    departure_airport: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    arrival_airport: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    departure_time: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    arrival_time: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    aircraft_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = Flight;

