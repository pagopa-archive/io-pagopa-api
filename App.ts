import * as bodyParser from "body-parser";
import * as express from "express";
import * as core from "express-serve-static-core";
import * as http from "http";
import { CONFIG } from "./Configuration";
import { logger } from "./api/utils/logger"
import {NotificationAPI} from "./api/NotificationAPI"


export function startApp(): http.Server {
  logger.info("Starting Proxy PagoPa Server...");
  const app = express();
  setGlobalSettings(app);
  setServerRoutes(app);
  const server = http.createServer(app);
  server.listen(CONFIG.CONTROLLER.PORT);
  server.on("error", onError);
  return server;
}
export function stopServer(server: http.Server): void {
  logger.info("Stopping PagoPa Mocked Server...");
  server.close();
}

export function setServerRoutes(app: core.Express): void {
app.post(CONFIG.CONTROLLER.ROUTES.NOTIFICATION_REGISTER, (req: express.Request) => {
      NotificationAPI.prototype.register(req.body);
  })
}

  export function setGlobalSettings(app: core.Express): void {
    app.set("port", CONFIG.CONTROLLER.PORT);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
  }

  export function onError(error: NodeJS.ErrnoException): void {
    logger.error(
      `Server error ( ${CONFIG.CONTROLLER.HOST} : ${
        CONFIG.CONTROLLER.PORT
      } : ${error.code}`
    );
    process.exit(1);
  }