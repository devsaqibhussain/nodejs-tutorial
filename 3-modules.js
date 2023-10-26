// Modules      
// - Similar to ES6 modules, allows sharing part of code accross the files.
// - Every file is a module(by default). Check the mind-gernade where we are not using module object but are still able to use the function in another file

const names = require("./4-names") // Always start with ./ for local custom modules.
const {sayHi, sayHow} = require("./5-utils")

sayHi(names.firstName)
sayHow(names.lastName)


// When importing a module, the node wraps the code inside a function, so if a function is invoked in original file. the function will executed when imported. 

require("./6-mind-gernade") // When you import a function you actually invoke it if its invoked in its own code.