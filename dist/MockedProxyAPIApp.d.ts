/// <reference types="node" />
import * as core from "express-serve-static-core";
import * as http from "http";
export declare function startApp(): http.Server;
export declare function stopServer(server: http.Server): void;
export declare function setServerRoutes(app: core.Express): void;
export declare function setGlobalSettings(app: core.Express): void;
export declare function onError(error: NodeJS.ErrnoException): void;
