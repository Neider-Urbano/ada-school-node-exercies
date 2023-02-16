const express = require("express");
const router = express.Router();
var data = require("../data.json");

router.post("/", (req, res) => {
  const newTask = req.body;
  var idValue = 1;
  if (data.length > 0) {
    idValue = Math.max(...data.map((task) => task.id)) + 1;
  }
  const newJson = {
    id: idValue,
    name: newTask.name,
    description: newTask.description,
    state: newTask.state,
  };
  data.push(newJson);
  console.log(data);
  res.status(200).send("La tarea fue registrada");
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const newJson = data.filter((task) => task.id != id);
  if (newJson.length !== data.length) {
    console.log(newJson);
    res.status(200).send({ task: newJson });
  } else {
    res.status(400).send("La tarea no fue encontrada");
  }
});

router.put("/:id", (req, res) => {
  const newTask = req.body;
  const id = req.params.id;
  var encontrado = false;
  const json = data.map((task) => {
    if (task.id == id) {
      task.name = newTask.name;
      task.description = newTask.description;
      task.state = newTask.state;
      encontrado = true;
    }
    return task;
  });
  if (encontrado) {
    data = json;
    console.log(data);
    res.status(200).send("La tarea fue actualizada");
  } else {
    res.status(400).send("La tarea no fue encontrada");
  }
});

module.exports = router;
