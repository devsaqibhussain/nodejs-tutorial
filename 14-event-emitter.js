// Event driven programming:

const EventClass = require("events"); // Creates a new class, we mostly name it EventEmitter but you can name it whatever.

const myEvent = new EventClass(); // Creating a new instance of class (object).

// There are two methods we can use in event driven programming:
// myEvent.on("event name",(value you are receiving)=>{})   - Listens for the event.
// myEvent.emit("event name",value,value)                   - Triggers the event for said event name.

myEvent.on("testing", () => {
  console.log("working");
});
// Can create multiple listeners for same event each with different functionality:
myEvent.on("testing", (name, age) => {
  console.log(`Hi my name is ${name}, I am ${age} years old.`);
});

myEvent.emit("testing", "Saqib", "23");
