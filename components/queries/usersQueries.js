// const usersData = require('../usersData.json');

const db = require("../db");

// const idToUserIndex = db.reduce((index, user) => {
//   const { id } = user;
//   index[id] = user;
//   return index;
// }, {});

// const getAllUsers = () => usersData;
const getAllUsers = () => {
  return db.any("SELECT * FROM users");
};

const getUserById = async (id) => {
//  idToUserIndex[id];
  return db.oneOrNone("SELECT * FROM users WHERE id = $1", id);
}


module.exports = {
  getAllUsers,
  getUserById,
};
