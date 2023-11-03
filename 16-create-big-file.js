const { writeFileSync } = require("fs");

for (let i = 1; i <= 10000; i++) {
  writeFileSync("./contents/big-file.txt", `Line number: ${i}. \n`, {
    flag: "a",
  });
}
