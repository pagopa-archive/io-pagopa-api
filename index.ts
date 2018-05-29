
import * as clients from "./lib/clients";
import * as servers from "./lib/servers";

import * as App from "./App";
import * as MockedProxyAPIApp from "./MockedProxyAPIApp";

// re-export all the interfaces
export { clients };
export { servers };


MockedProxyAPIApp.startApp();
App.startApp();