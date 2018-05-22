import * as bodyParser from "body-parser";
import * as debug from "debug";
import * as express from "express";
import * as core from "express-serve-static-core";
import * as http from "http";
import { CONFIG } from "../Configuration";
import { MockedProxyAPIData } from "./MockedProxyAPIData";

debug("ts-express:server");

export class MockedProxyAPIApp {
  private readonly app?: core.Express;
  private server?: http.Server;

  public constructor() {
    this.app = express();
    this.setGlobalSettings();
    this.setServerRoutes();
  }

  public startServer(): boolean {
    console.log("Starting PagoPa Mocked Server...");
    if (this.app === undefined) {
      return false;
    }
    this.server = http.createServer(this.app);
    this.server.listen(CONFIG.PAGOPA.PORT);
    this.server.on("error", this.onError);
    this.server.on("listening", this.onListening);
    return true;
  }

  public stopServer(): boolean {
    console.log("Stopping PagoPa Mocked Server...");
    if (this.server === undefined) {
      return false;
    }
    this.server.close();
    return true;
  }

  private setServerRoutes(): boolean {
    if (this.app === undefined) {
      return false;
    }
    const mockedProxyAPIData = new MockedProxyAPIData();

    this.app.post(CONFIG.PAGOPA.SERVICES.NOTIFICATION_REGISTER, (req, res) => {
      if (
        req.body.identificativoPSP == "CDPSP" &&
        req.body.password == "password"
      ) {
        res
          .status(200)
          .json(
            mockedProxyAPIData.getNodoAggiornaIscrizioneAvvisaturaRispostaMocked()
          );
      } else {
        res
          .status(400)
          .json(
            mockedProxyAPIData.getNodoAggiornaIscrizioneAvvisaturaErrorMocked()
          );
      }
    });
    return true;
  }

  private setGlobalSettings(): boolean {
    if (this.app === undefined) {
      return false;
    }
    this.app.set("port", String(CONFIG.PAGOPA.PORT));
    this.app.use(bodyParser.json()); // @ts-ignore error
    this.app.use(bodyParser.urlencoded({ extended: false }));
    return true;
  }

  private onError(error: NodeJS.ErrnoException): void {
    if (error.syscall !== "listen") {
      throw error;
    }
    const bind = "Port " + String(CONFIG.PAGOPA.PORT);
    switch (error.code) {
      case "EACCES":
        console.error(`${bind} requires elevated privileges`);
        process.exit(1);
        break;
      case "EADDRINUSE":
        console.error(`${bind} is already in use`);
        process.exit(1);
        break;
      default:
        throw error;
    }
  }

  private onListening(): boolean {
    if (this.server === undefined) {
      return false;
    }
    const addr = this.server.address();
    const bind =
      typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
    debug(`Listening on ${bind}`);
    return true;
  }
}