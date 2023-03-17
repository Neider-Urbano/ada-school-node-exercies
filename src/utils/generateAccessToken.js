const jwt = require("jsonwebtoken");
require("dotenv").config();

function generateAccessToken(user) {
  return jwt.sign(user, process.env.SECRET, { expiresIn: "10m" });
}

module.exports = generateAccessToken;
