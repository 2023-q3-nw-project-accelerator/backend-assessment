const express = require("express");
const { getAllUsers, getUserById } = require("../queries/usersQueries");

const usersController = express.Router();

usersController.get("/", async (req, res) => {
  try{
    users = getAllUsers() || [];
    res.status(200).json({ data: users });
  }
  catch (err){
    res.status(500).json({error: err.message})
  }
  
});

usersController.get("/:id", async (req, res) => {
  try{
    const { id } = req.params;
    user = getUserById(id);
    if (user) {
      res.status(200).json({ data: user });
    } else {
      res.status(404).json({ error: `User with id ${id} not found` });
    }
  }
  catch(err){
    res.status(500).json({error: err.message})
  }
  
});

module.exports = usersController;