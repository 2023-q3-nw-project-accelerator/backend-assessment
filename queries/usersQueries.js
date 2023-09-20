const usersData = require('../usersData.json');

const idToUserIndex = usersData.reduce((index, user) => {
  const { id } = user;
  index[id] = user;
  return index;
}, {});

const getAllUsers = () => usersData;

const getUserById = (id) => {
  return idToUserIndex[id];
}

const insertAllUsers = () => {
  try {

  } catch (error) {

  }
}

module.exports = {
  getAllUsers,
  getUserById,
}