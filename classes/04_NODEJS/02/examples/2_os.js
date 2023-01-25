// In-Built Module: os

const os = require("os");

console.log(os.type()); //Windows_NT
console.log(os.platform()); //win32
console.log(os.release()); //10.0.22621
console.log(os.arch()); //x64
console.log(os.hostname()); //DESKTOP-7590JIL

console.log(os.uptime());
