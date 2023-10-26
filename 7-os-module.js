// Built in modules.

const os = require("os") // We will not use path for built in modules just like we do in react.

// User info:
const name = os.userInfo()
console.log(name)

// System uptime:
console.log(`The system uptime is: ${os.uptime()} seconds`)

// operating system info:
const currentOs = {
    name: os.type(),
    version: os.version(),
    release: os.release(),
    freeMem: os.freemem(),
    totalMem: os.totalmem(),
}
console.log(currentOs)