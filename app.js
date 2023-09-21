const express = require("express");
const cors = require("cors");
const db = require("./components/db");
const usersController = require("./components/controllers/usersController");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ data: "Service is running " });
});

app.get("/users", async (request, response) => {
  try {
    const users = await db.any("SELECT * FROM users");

    response.status(200).json({ data: users });
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});

app.use("/users", usersController);

app.all("*", (req, res) => {
  res.status(404).json({ error: "Not found" });
});

module.exports = app;
