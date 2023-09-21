const db = require("../db")

const idToUserIndex = db.usersData.reduce((index, user) => {
  const { id } = user
  index[id] = user
  return index
}, {})

const getAllUsers = async () => {
  const users = await db.any("SELECT * FROM users")
  return users
}

const getUserById = async (id) => {
  const userId = await db.oneOrNone("SELECT * FROM users WHERE id = $1", [id])
  return userId
}

module.exports = {
  getAllUsers,
  getUserById,
}
