//servidor con EXPRESS
const express = require("express");
const app = express();
const port = 4000;
app.use(express.json());

//middleware a nivel de aplicacion
app.use((req, res, next) => {
  if (
    req.method == "GET" ||
    req.method == "POST" ||
    req.method == "PUT" ||
    req.method == "DELETE"
  ) {
    next();
  } else {
    res.send("Metodo http invalido").status(400);
  }
});

const taskVie = require("./src/list-view-router");
const taskEdit = require("./src/list-edit-router");
const routerLogin = require("./src/login-route");
const { middleToken } = require("./src/middlewares/middleToken");
const { middleRol } = require("./src/middlewares/middleRol");

app.use("/task", taskVie);
app.use("/task", [middleToken, middleRol], taskEdit);
app.use("/login", routerLogin);

app.get("/", (req, res) => {
  res.status(200).send("Bienvenido a mi servidor");
});

app.listen(port, () => {
  console.log("listening on port " + port);
});
