"use strict";
/**
 * Define a custom Logger using winston
 */
Object.defineProperty(exports, "__esModule", { value: true });
const winston = require("winston");
exports.logger = new winston.Logger({
    level: "debug",
    transports: [new winston.transports.Console()]
});
function disableConsoleLog() {
    exports.logger.remove(winston.transports.Console);
}
exports.disableConsoleLog = disableConsoleLog;
//# sourceMappingURL=logger.js.map