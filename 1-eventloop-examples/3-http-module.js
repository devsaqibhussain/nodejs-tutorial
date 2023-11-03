const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request is processed"); // Every time we refresh the webpage( send request), console prints this.
  res.end("Home Page");
});

server.listen(3000, () => {
  console.log("server is started");
});
