const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const Boarding_pass = sequelize.define("Boarding_pass", {
    seat_number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    passenger_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    flight_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    issue_time: {
        type: DataTypes.DATE,
        allowNull: false,
    },
});

module.exports = Boarding_pass;
