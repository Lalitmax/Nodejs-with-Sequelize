const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/dbConnect')
const User = sequelize.define("User", {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    }
}, {
    // freezeTableName:true
    tableName: "users"
})
console.log(User === sequelize.models.User); // true

module.exports = { User }