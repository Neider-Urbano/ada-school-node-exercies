const express = require("express");
const generateAccessToken = require("./utils/generateAccessToken");
const routerLogin = express.Router();

const users = [
  {
    name: "neider",
    email: "neider@gmail.com",
    rol: "admin",
  },
  {
    name: "julian",
    email: "julian@gmail.com",
    rol: "user",
  },
];

routerLogin.post("/", (req, res) => {
  const { email } = req.body;
  const user = users.filter((user) => user.email === email);
  if (user.length < 1) res.status(400).send("email invalid");
  else {
    const accessToken = generateAccessToken(user[0]);
    res.status(200).send(accessToken);
  }
});

module.exports = routerLogin;
