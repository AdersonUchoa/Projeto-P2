const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const Sysuser = sequelize.define("Sysuser", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    login_email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Sysuser;
