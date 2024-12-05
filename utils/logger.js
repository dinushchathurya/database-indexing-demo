const fs = require("fs");
const path = require("path");

const logFilePath = path.join(__dirname, "../logs/app.log");

const logToFile = (message) => {
    fs.appendFileSync(logFilePath, `${new Date().toISOString()} - ${message}\n`);
};

module.exports = {
    info: (message) => {
        console.log(message);
        logToFile(`INFO: ${message}`);
    },
    error: (message) => {
        console.error(message);
        logToFile(`ERROR: ${message}`);
    },
};
