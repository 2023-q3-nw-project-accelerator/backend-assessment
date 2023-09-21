const db = require("../db")

const getAllUsers = async () => {
  const users = db.any('SELECT * FROM users');
  return users;
};

const getUserById = async (id) => {
  const user = db.oneOrNone('SELECT * FROM users where id = $1', [id]);
  return user;
}

module.exports = {
  getAllUsers,
  getUserById,
}