// Installing and using dependencies.

// use npm init for step by step setup of package.json file which contains the data about all the dependcies we will solve and help create node modules for said dependencies.

// we can also use npm init -y to use default values for package.json file which can be modified later, this provides much faster setup.

// using command npm i lodash we install lodash dependency locally in our folder. We can then use it in our projects as follow:

const lodash = require("lodash");

const arr = [1, [2], [3, [4, [5]]]];

// Flattening this arr using lodash dependency:

const flattenArr = lodash.flattenDeep(arr);
console.log(flattenArr); // returns [1,2,3,4,5]
console.log("testing");
