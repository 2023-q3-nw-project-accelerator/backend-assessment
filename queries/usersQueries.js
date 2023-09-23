const database = require("../database.js");

const getAllUsers = () => {
  return database
    .any("SELECT * FROM users")
    .then((users) => users)
    .catch((err) => err); 
};

const getUserById = (id) => {
  return {};
};

module.exports = {
  getAllUsers,
  getUserById,
};
