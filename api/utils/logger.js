"use strict";
/**
 * Define a custom Logger using winston
 */
exports.__esModule = true;
var winston = require("winston");
exports.logger = new winston.Logger({
    level: "debug",
    transports: [new winston.transports.Console()]
});
function disableConsoleLog() {
    exports.logger.remove(winston.transports.Console);
}
exports.disableConsoleLog = disableConsoleLog;
