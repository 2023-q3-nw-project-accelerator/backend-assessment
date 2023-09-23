const express = require("express");
const { getAllUsers, getUserById } = require("../queries/usersQueries");

const usersController = express.Router();

// /users
usersController.get("/", (req, res) => {
  getAllUsers()
    .then((users) => {
      res.status(200).json({ data: users });
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ error: "An error has ocurred when tries to get all users" })
    });
});

usersController.get("/:id", (req, res) => {
  const { id } = req.params;
  getUserById(id)
    
    .then((user) => {
      if (!user.length) {
        res.status(404).json({ error: "This user doesn't exist" });
      } else { 
        res.status(200).json({ data: user });
      }
    })
    .catch((err) => {
      console.log(err)
      res
        .status(500)
        .json({ error: "An error has ocurred when tries to get the user" });
    })
  
});

module.exports = usersController;
