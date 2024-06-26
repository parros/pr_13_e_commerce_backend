require('dotenv').config()
const express = require('express');
const routes = require('./routes');

// import sequelize connection
const sequelize = require('./config/connection')
const db = require('./models')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
})