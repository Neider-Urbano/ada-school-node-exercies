//servidor con modulo HTTP
// const http = require("http");
// const port = 3000;
// const host = "127.0.0.1";
// const data = require("./data.json");
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "application/json" });
//   res.write(
//     JSON.stringify({
//       task: data,
//     })
//   );
//   res.end();
// });

// server.listen(port, host, () => {
//   console.log("listening on port " + port, host);
// });

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
