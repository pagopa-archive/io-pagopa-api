"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clients = require("./lib/clients");
exports.clients = clients;
const servers = require("./lib/servers");
exports.servers = servers;
const App = require("./App");
const MockedProxyAPIApp = require("./MockedProxyAPIApp");
MockedProxyAPIApp.startApp();
App.startApp();
//# sourceMappingURL=index.js.map