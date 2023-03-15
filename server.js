//servidor con EXPRESS
const express = require("express");
const app = express();
const port = 4000;
const data = require("./data.json");
app.use(express.json());
const taskVie = require("./src/list-view-router");
const taskEdit = require("./src/list-edit-router");
app.use("/task", taskVie);
app.use("/task", taskEdit);

app.get("/", (req, res) => {
  res.status(200).send("Bienvenido a mi servidor");
});

app.listen(port, () => {
  console.log("listening on port " + port);
});
