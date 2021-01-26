//require Winston
const { createLogger, format, transports, config } = require('winston');

//Logger configuration
const logger = createLogger({
    transports: [
        new transports.Console()
    ]
});

//Create the logger
const userLogger = createLogger({
    transports: [
        new transports.Console()
    ]
});
const errorLogger = createLogger({
    transports: [
        new transports.Console()
    ]
});

module.exports = logger;
module.exports = {
    userLogger: userLogger,
    errorLogger: errorLogger
};