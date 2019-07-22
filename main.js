const fs = require('fs');
const data = new Date();
console.log(data);
fs.appendFile('launch.logs', data, (err) => {
    if (err) {
        console.error(err)
        return
    }
})