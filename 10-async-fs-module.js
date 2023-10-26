//Asynchronous method / non-blocking:

const { writeFile, readFile } = require("fs");

readFile("./contents/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const firstFile = result;
  readFile("./contents/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const secondFile = result;
    writeFile(
      "./contents/write-asyn-text.txt",
      `The result of reading two files: "${firstFile}", "${secondFile}"`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result); //returns undefined as we are not performing any action beside writing to a file.
      }
    );
  });
});
