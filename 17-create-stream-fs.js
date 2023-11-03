const { createReadStream } = require("fs");

// const stream = createReadStream("./contents/big-file.txt");
const stream = createReadStream("./contents/big-file.txt", {
  highWaterMark: 90000,
  encoding: "utf8",
});
// default chunk size: 64Kb
//last buffer - remainder.
// Can change default chunk size and encoding method by using an object with following properties as 2nd argument to createReadStream.
// highWaterMark: size in bytes   - Controls size.
// Encoding: utf8                 - Encoding method.
stream.on("data", (data) => {
  console.log(data);
});
stream.on("error", (err) => {
  console.log(err);
});
