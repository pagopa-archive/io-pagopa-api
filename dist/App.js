"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const express = require("express");
const http = require("http");
const Configuration_1 = require("./Configuration");
const logger_1 = require("./api/utils/logger");
const NotificationAPI_1 = require("./api/NotificationAPI");
function startApp() {
    logger_1.logger.info("Starting Proxy PagoPa Server...");
    const app = express();
    setGlobalSettings(app);
    setServerRoutes(app);
    const server = http.createServer(app);
    server.listen(Configuration_1.CONFIG.CONTROLLER.PORT);
    server.on("error", onError);
    return server;
}
exports.startApp = startApp;
function stopServer(server) {
    logger_1.logger.info("Stopping PagoPa Mocked Server...");
    server.close();
}
exports.stopServer = stopServer;
function setServerRoutes(app) {
    app.post(Configuration_1.CONFIG.CONTROLLER.ROUTES.NOTIFICATION_REGISTER, (req) => {
        NotificationAPI_1.NotificationAPI.prototype.register(req.body);
    });
}
exports.setServerRoutes = setServerRoutes;
function setGlobalSettings(app) {
    app.set("port", Configuration_1.CONFIG.CONTROLLER.PORT);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
}
exports.setGlobalSettings = setGlobalSettings;
function onError(error) {
    logger_1.logger.error(`Server error ( ${Configuration_1.CONFIG.CONTROLLER.HOST} : ${Configuration_1.CONFIG.CONTROLLER.PORT} : ${error.code}`);
    process.exit(1);
}
exports.onError = onError;
//# sourceMappingURL=App.js.map