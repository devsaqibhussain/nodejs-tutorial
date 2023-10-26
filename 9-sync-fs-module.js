// Synchronouse pattern / blocking

const {readFileSync, writeFileSync} = require("fs") // Destructing the required property, can also use a variable to import too.


// Reading the file using node:

const firstFile = readFileSync("./contents/first.txt","utf8") // Accepts a file path and decoding method.
console.log(firstFile)

// Writing to file using node:

writeFileSync("./contents/writingText.txt",`Here is the result of read cmd: ${firstFile}`)

// If the file doesn't exist, node will create the file, otherwise node will overwrite the existing file by default. We can append text to existing file by providing a third argument {flag:"a"}

writeFileSync("./contents/appendingText.txt",`Here is the result of read cmd: ${firstFile}`,{flag:"a"}) // will append each time the code is run.