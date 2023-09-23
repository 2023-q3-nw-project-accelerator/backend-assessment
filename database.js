const pg = require("pg-promise")();

const database = pg({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
});

database
  .connect()
  .then((res) => console.log("Database connected"))
  .catch((err) => console.log("Error connecting to database"));

module.exports = database;
