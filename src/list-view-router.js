const express = require("express");
const router = express.Router();
const data = require("../data.json");

router.get("/", (req, res) => {
  res.status(200).send({ task: data });
});

router.get("/complete", (req, res) => {
  const json = data;
  const newJson = json.filter((task) => task.state == "completado");
  console.log(newJson);
  res.status(200).send({ task: newJson });
});

router.get("/pendiente", (req, res) => {
  const json = data;
  const newJson = json.filter((task) => task.state == "pendiente");
  console.log(newJson);
  res.status(200).send({ task: newJson });
});
module.exports = router;
