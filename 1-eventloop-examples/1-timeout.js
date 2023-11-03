//Timeout      - ofloads the task and performs it after speicified amount of time once all the instant code blocks are executed.

console.log("First task");

setTimeout(() => {
  console.log("Second task");
}, 0); // even with zero timeout time, the javascript offloads the task and performs it once other instant code blocks are executed.

console.log("Third Task");
