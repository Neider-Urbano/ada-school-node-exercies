exports.middleRol = (req, res, next) => {
  if (req.rol === "admin") {
    next();
  } else {
    res.status(400).send({ error: "rol invalid" });
  }
};
