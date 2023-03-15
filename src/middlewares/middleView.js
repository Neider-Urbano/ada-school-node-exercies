const middleState = (req, res, next) => {
  const { state } = req.params;
  if (state === "complete" || state === "pendiente") {
    next();
  } else {
    res.status(400).send("parametro state invalid");
  }
};

module.exports = middleState;
