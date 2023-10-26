const path = require("path");

// Path.sep     - Returns the path seperator based on your system. Its "\" in windows and "/" in MacOS.
console.log(path.sep)

// Path.join    - Returns optimal path using system specific seperators. Accepts comma seperated segments of path.

const filePath = path.join("/contents","subfolder","test.txt") 

console.log(filePath) // replaces /contents with \contents since thats the path seperator for windowsOS


//path.basename - Returns the name of file at the base(end) of path tree.

const base = path.basename(filePath)

console.log(base) // returns test.txt as that is the base of our current path.

//path.resolve  - Returns an absolute path.

const absolute  = path.resolve(__dirname,"contents","subfolder","test.txt")
console.log(absolute)