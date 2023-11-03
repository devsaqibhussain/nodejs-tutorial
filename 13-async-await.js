//Using async await to avoid callback hell:

//First we will use fs/promise modules then we will make those promises our selfs:
const { readFile, writeFile } = require("fs/promises");

const start = async () => {
  try {
    const first = await readFile("./contents/first.txt");
    const second = await readFile("./contents/second.txt");
    await writeFile(
      "./contents/async-await-write",
      `This is the result of reading: 
      1: ${first}
      2:${second}`
    );
  } catch (err) {
    console.log(err);
  }
};
start();
// ----------------------------------------------------------------------------------------------------
// // The normal method to avoid callback hell is to create promises and use .then and .catch methods.
// const { readFile, writeFile } = require("fs");

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText("./contents/first.txt")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // Now to read multiple files, its better to use await and asign the output of promise to a variable which can then be used in write operation etc.

// const startRead = async () => {
//   // Use try and catch blocks when using await for error handling:
//   try {
//     const first = await getText("./contents/first.txt");
//     const second = await getText("./contents/second.txt");
//     console.log(first, second);
//   } catch (err) {
//     console.log(err);
//   }
// };
// startRead();
