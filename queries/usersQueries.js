const db = require("./db-config");

const getAllUsers = async () => {
  try {
    const ret = await db.manyOrNone(`SELECT * FROM users`);
    return ret;
  } catch (error) {
    console.error(error);
    return false;
  }
};
const getUserById = async (id) => {
  try {
    const ret = await db.oneOrNone(`SELECT * FROM users WHERE id = $[id]`, { id });
    return ret;
  } catch (error) {
    console.error(error);
    return false;
  }
}

module.exports = {
  getAllUsers,
  getUserById,
}