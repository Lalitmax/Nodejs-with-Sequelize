const { Sequelize } = require('sequelize')
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    // port: 3306,
    dialect: process.env.DB_DIALECT
});

const dbConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log("db connect sucess!✋")
    } catch (error) {
        console.error("Unable to Connect", error)
    }
}

module.exports = { dbConnection, sequelize }