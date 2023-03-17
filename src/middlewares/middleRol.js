exports.middleRol = (req, res, next) => {
  if (req.rol === "admin") {
    next();
    next();
  } else {
    res.send({ error: "rol invalid" });
  }
};
