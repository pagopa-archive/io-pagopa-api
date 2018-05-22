"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Configuration_1 = require("../Configuration");
const clients = require("../lib/clients");
// Notification Service for PagoPA communications
class NotificationAPI {
    // Retrieve wallet containing payment methods
    register(richiestaAggiornamento) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = Configuration_1.CONFIG.PAGOPA.HOST +
                ":" +
                Configuration_1.CONFIG.PAGOPA.PORT +
                Configuration_1.CONFIG.PAGOPA.SERVICES.NOTIFICATION_REGISTER;
            /*TRASFORMARE IL BODY IN WSDL*/
            let requestOptions;
            function customReq(options, callback) {
                requestOptions = options;
                callback(null, null, null);
            }
            let iscrizioniAvvisaturaClientBase = yield clients.createIscrizioniAvvisaturaClient({
                endpoint: url,
                envelopeKey: "soapenv",
                request: customReq
            });
            // iscrizioniAvvisaturaClientBase.addHttpHeader("Host", url);
            let iscrizioniAvvisaturaClient = new clients.IscrizioniAvvisaturaAsyncClient(iscrizioniAvvisaturaClientBase);
            let input = {
                identificativoCanale: richiestaAggiornamento.identificativoCanale,
                identificativoIntermediarioPSP: richiestaAggiornamento.identificativoIntermediarioPSP,
                identificativoPSP: richiestaAggiornamento.identificativoPSP,
                password: richiestaAggiornamento.password
            };
            let output;
            try {
                output = yield iscrizioniAvvisaturaClient.nodoAggiornaIscrizioniAvvisatura(input);
            }
            catch (_a) { }
            return requestOptions;
        });
    }
}
exports.NotificationAPI = NotificationAPI;
//# sourceMappingURL=NotificationAPI.js.map