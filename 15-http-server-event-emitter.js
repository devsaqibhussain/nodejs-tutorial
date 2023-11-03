// Setting up http server instead of tradition method:

const http = require("http");
// Traditional way of setting server like we did in past exercises:
// const server = http.createServer((req, res) => {
//   res.end("Welcome");
//   console.log("working");
// });

// server.listen(3000);

// Instead we can use .on and .emit methods since createserver extends the EventEmitter class in background:

const server = http.createServer();

server.on("request", (req, res) => {
  // request is specific method name here which node emits.
  res.end("We are still working");
  console.log("Working");
});

server.listen(3000);
