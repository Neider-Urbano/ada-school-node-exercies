const http = require("http");
const port = 3000;
const host = "127.0.0.1";
const data = require("./data.json");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(
    JSON.stringify({
      task: data,
    })
  );
  res.end();
});

server.listen(port, host, () => {
  console.log("listening on port " + port, host);
});
