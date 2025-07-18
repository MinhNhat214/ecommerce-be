const fs = require("fs").promises;
const path = require('path');

const fileName = path.join(__dirname, '../Logs', 'logs.log');
const logEvents = async (msg) => {
    try {
        await fs.appendFile(fileName, msg)
    } catch (error) {
        console.error(error)
    }
};

module.exports = logEvents
