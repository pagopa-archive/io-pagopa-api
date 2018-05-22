"use strict";
/**
 * Italia PagoPA Proxy
 * Cittadinanza Digitale PagoPA services
 */
Object.defineProperty(exports, "__esModule", { value: true });
// App configuration
exports.CONFIG = {
    // PagoPa-Api SOAP configuration
    CONTROLLER: {
        PORT: 3000,
        HOST: "http://127.0.0.1",
        ROUTES: {
            NOTIFICATION_REGISTER: "/notifications/register"
        }
    },
    // Proxy Restful Configuration
    PAGOPA: {
        HOST: "http://127.0.0.1",
        PORT: 3001,
        SERVICES: {
            NOTIFICATION_REGISTER: "/notifications/register"
        }
    }
};
//# sourceMappingURL=Configuration.js.map