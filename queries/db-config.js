const pgp = require("pg-promise")();
require("dotenv").config();

const conString = process.env.DB_URL;

const db = pgp(conString);

module.exports = db;