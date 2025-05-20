const os = require('os')

// info about the user
const user = os.userInfo()

// method returns the system uptime in seconds


console.log(`System uptime is ${os.uptime()} seconds`)
console.log(user)
