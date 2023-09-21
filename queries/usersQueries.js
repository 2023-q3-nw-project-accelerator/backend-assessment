// const usersData = require('../usersData.json');

const db = require('../../db')

// const idToUserIndex = usersData.reduce((index, user) => {
//   const { id } = user;
//   index[id] = user;
//   return index;
// }, {});

// const getAllUsers = () => usersData;
const getAllUsers = () => {
  return db.any('SELECT * FROM users');
};


// const getUserById = async (id) => {
//   return idToUserIndex[id];
// }

const getUserById = async (id) => {
  return db.oneOrNone('SELECT * FROM users WHERE id = $1', id);
};

module.exports = {
  getAllUsers,
  getUserById,
}