const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.middleToken = (req, res, next) => {
  const accessToken = req.headers["authorization"] || req.query.accesstoken;
  if (!accessToken) res.send("token denied");
  jwt.verify(accessToken, process.env.SECRET, (err, user) => {
    if (err) {
      res.status(400).send({ error: err });
    } else {
      req.rol = user.rol;
      next();
    }
  });
};
