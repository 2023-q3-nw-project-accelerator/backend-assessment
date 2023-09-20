const express = require('express');
const { getAllUsers, getUserById } = require('../queries/usersQueries');

const usersController = express.Router();

usersController.get('/', (req, res) => {
  try {
    users = getAllUsers() || [];
    res.status(200).json({ data: users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

usersController.get('/:id', (req, res) => {
  const { id } = req.params;
  user = getUserById(id);
  if (user) {
    res.status(200).json({ data: user });
  } else {
    res.status(404).json({ error: `User with id ${id} not found` });
  }
})

module.exports = usersController;