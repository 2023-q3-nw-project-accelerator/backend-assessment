const db = require("../db")

const idToUserIndex = db.usersData.reduce((index, user) => {
  const { id } = user
  index[id] = user
  return index
}, {})

const getAllUsers = () => db.usersData

const getUserById = (id) => {
  return idToUserIndex[id]
}

module.exports = {
  getAllUsers,
  getUserById,
}
