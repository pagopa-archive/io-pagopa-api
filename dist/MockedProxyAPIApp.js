"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const express = require("express");
const http = require("http");
const Configuration_1 = require("./Configuration");
const MockedProxyAPIData_1 = require("./MockedProxyAPIData");
const logger_1 = require("./api/utils/logger");
function startApp() {
    logger_1.logger.info("Starting Proxy PagoPa Server...");
    const app = express();
    setGlobalSettings(app);
    setServerRoutes(app);
    const server = http.createServer(app);
    server.listen(Configuration_1.CONFIG.PAGOPA.PORT);
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
    app.post(Configuration_1.CONFIG.PAGOPA.SERVICES.NOTIFICATION_REGISTER, (req, res) => {
        if (req.body.identificativoPSP == "CDPSP" &&
            req.body.password == "password") {
            res
                .status(200)
                .json(MockedProxyAPIData_1.MockedProxyAPIData.prototype.getNodoAggiornaIscrizioneAvvisaturaRispostaMocked());
        }
        else {
            logger_1.logger.info(String(res));
            res
                .status(400)
                .json(MockedProxyAPIData_1.MockedProxyAPIData.prototype.getNodoAggiornaIscrizioneAvvisaturaErrorMocked());
        }
    });
}
exports.setServerRoutes = setServerRoutes;
function setGlobalSettings(app) {
    app.set("port", Configuration_1.CONFIG.PAGOPA.PORT);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
}
exports.setGlobalSettings = setGlobalSettings;
function onError(error) {
    logger_1.logger.error(`Server error ( ${Configuration_1.CONFIG.CONTROLLER.HOST} : ${Configuration_1.CONFIG.CONTROLLER.PORT} : ${error.code}`);
    process.exit(1);
}
exports.onError = onError;
//# sourceMappingURL=MockedProxyAPIApp.js.map