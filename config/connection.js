require('dotenv').config();

const { Sequelize } = require('sequelize');

const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: process.env.DB_HOST,
      dialect: 'postgres',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

sequelize.authenticate()
    .then(() => console.log('success'))
    .catch(err => console.log('DB error'))

module.exports = sequelize;
