const express = require("express");
const router = express.Router();
const data = require("../data.json");
const middleState = require("./middlewares/middleView");

router.get("/", (req, res) => {
  res.status(200).send({ task: data });
});

router.get("/view/:id", (req, res) => {
  const task = data.filter((task) => task.id == req.params.id);
  res.status(200).json({ task: task });
});

router.get("/:state", middleState, (req, res) => {
  const { state } = req.params;
  if (state === "complete") {
    res.redirect("http://localhost:4000/task/state/complete");
  } else if (state === "pendiente") {
    res.redirect("http://localhost:4000/task/state/pendiente");
  } else {
    res.status(400).send("Parametro state erroneo");
  }
});

router.get("/state/complete", (req, res) => {
  const json = data;
  const newJson = json.filter((task) => task.state == "completado");
  console.log(newJson);
  res.status(200).send({ task: newJson });
});

router.get("/state/pendiente", (req, res) => {
  const json = data;
  const newJson = json.filter((task) => task.state == "pendiente");
  console.log(newJson);
  res.status(200).send({ task: newJson });
});
module.exports = router;
