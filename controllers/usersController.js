const express = require("express");
const { getAllUsers, getUserById } = require("../queries/usersQueries");

const usersController = express.Router();

usersController.get("/", async (req, res) => {
  try {
    const users = await getAllUsers();
    response.status(200).json({ data: users });
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});

usersController.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getUserById(id);
    if (user) {
      res.status(200).json({ data: user });
    }
    res.status(404).json({ error: `User with id ${id} not found` });
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = usersController;
