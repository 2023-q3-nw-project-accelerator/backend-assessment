const database = require("../database.js");

const getAllUsers = () => {
  return database
    .any("SELECT * FROM users")
      .then((users) => users)
      .catch((err) => err); 
};

const getUserById = (id) => {
  return database
    .any("SELECT * FROM users WHERE id = $1", [id])
      .then((user) => user )
      .catch((err=> err))
};

module.exports = {
  getAllUsers,
  getUserById,
};
