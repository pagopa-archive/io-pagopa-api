
import * as clients from "./lib/clients";
import * as servers from "./lib/servers";

import { App } from "./App";
import { MockedProxyAPIApp } from "./MockedProxyAPIApp";

// re-export all the interfaces
export { clients };
export { servers };


new MockedProxyAPIApp().startServer();
new App().startServer();