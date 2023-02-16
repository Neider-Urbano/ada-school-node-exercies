//servidor con EXPRESS
const express = require("express");
const app = express();
const port = 3000;
const data = require("./data.json");
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({ task: data });
});

app.listen(port, () => {
  console.log("listening on port " + port);
});
