//setInterval

console.log("First Task");

setInterval(() => {
  console.log("Task is running every 2 sec");
}, 2000); // off-loads the code block and executes it every 2 sec after other instant code blocks are dont executing.

console.log("Task end");
