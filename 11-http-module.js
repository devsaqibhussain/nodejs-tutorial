//Http module

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello, welcome to my first backend server!"); // response
  }
  if (req.url === "/about") {
    res.end("This is the about me section of the page!");
  }
  res.end(`
    <h1>Oops!</h1>
    <p>The webpage you are looking for doesnt exist</p>
    <a href="/">back to home</a>
    `);
});

server.listen(3000);
