"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wsdl_paths = require("./wsdl-paths");
const utils_1 = require("./utils");
// import interfaces for "pagoPA" services (Nodo and Avvisatura)
const PagamentiTelematiciPspNodoService = require("../wsdl-lib/PagamentiTelematiciPspNodoservice/PPTPort");
exports.PagamentiTelematiciPspNodoService = PagamentiTelematiciPspNodoService;
const IscrizioniAvvisaturaService = require("../wsdl-lib/IscrizioniAvvisaturaService/PPTPort");
exports.IscrizioniAvvisaturaService = IscrizioniAvvisaturaService;
const NodoChiediElencoAvvisiDigitaliService = require("../wsdl-lib/NodoChiediElencoAvvisiDigitaliService/PPTPort");
exports.NodoChiediElencoAvvisiDigitaliService = NodoChiediElencoAvvisiDigitaliService;
/**
 * Creates a client for the "PagamentiTelematiciPspNodo" service
 */
function createPagamentiTelematiciPspNodoClient(options) {
    return utils_1.createClient(wsdl_paths.PagamentiTelematiciPspNodoService_WSDL_PATH, options);
}
exports.createPagamentiTelematiciPspNodoClient = createPagamentiTelematiciPspNodoClient;
/**
 * Creates a client for the "IscrizioniAvvisatura" service
 */
function createIscrizioniAvvisaturaClient(options) {
    return utils_1.createClient(wsdl_paths.IscrizioniAvvisaturaService_WSDL_PATH, options);
}
exports.createIscrizioniAvvisaturaClient = createIscrizioniAvvisaturaClient;
/**
 * Creates a client for the "NodoChiediElencoAvvisiDigitali" service
 */
function createNodoChiediElencoAvvisiDigitaliClient(options) {
    return utils_1.createClient(wsdl_paths.NodoChiediElencoAvvisiDigitaliService_WSDL_PATH, options);
}
exports.createNodoChiediElencoAvvisiDigitaliClient = createNodoChiediElencoAvvisiDigitaliClient;
/**
 * Converts the callback based methods of a PagamentiTelematiciPspNodo client to
 * promise based methods.
 */
class PagamentiTelematiciPspNodoAsyncClient {
    constructor(client) {
        this.client = client;
        this.nodoVerificaRPT = utils_1.promisifySoapMethod(this.client.nodoVerificaRPT);
        this.nodoAttivaRPT = utils_1.promisifySoapMethod(this.client.nodoAttivaRPT);
        this.nodoInviaRT = utils_1.promisifySoapMethod(this.client.nodoInviaRT);
        this.nodoChiediInformativaPA = utils_1.promisifySoapMethod(this.client.nodoChiediInformativaPA);
        this.nodoChiediTemplateInformativaPSP = utils_1.promisifySoapMethod(this.client.nodoChiediTemplateInformativaPSP);
        this.nodoInviaFlussoRendicontazione = utils_1.promisifySoapMethod(this.client.nodoInviaFlussoRendicontazione);
        this.nodoChiediElencoQuadraturePSP = utils_1.promisifySoapMethod(this.client.nodoChiediElencoQuadraturePSP);
        this.nodoChiediQuadraturaPSP = utils_1.promisifySoapMethod(this.client.nodoChiediQuadraturaPSP);
        this.nodoInviaEsitoStorno = utils_1.promisifySoapMethod(this.client.nodoInviaEsitoStorno);
        this.nodoInviaRichiestaRevoca = utils_1.promisifySoapMethod(this.client.nodoInviaRichiestaRevoca);
    }
}
exports.PagamentiTelematiciPspNodoAsyncClient = PagamentiTelematiciPspNodoAsyncClient;
/**
 * Converts the callback based methods of a IscrizioniAvvisatura client to
 * promise based methods.
 */
class IscrizioniAvvisaturaAsyncClient {
    constructor(client) {
        this.client = client;
        this.nodoAggiornaIscrizioniAvvisatura = utils_1.promisifySoapMethod(this.client.nodoAggiornaIscrizioniAvvisatura);
    }
}
exports.IscrizioniAvvisaturaAsyncClient = IscrizioniAvvisaturaAsyncClient;
/**
 * Converts the callback based methods of a NodoChiediElencoAvvisiDigitali
 * client to promise based methods.
 */
class NodoChiediElencoAvvisiDigitaliAsyncClient {
    constructor(client) {
        this.client = client;
        this.nodoChiediElencoAvvisiDigitali = utils_1.promisifySoapMethod(this.client.nodoChiediElencoAvvisiDigitali);
    }
}
exports.NodoChiediElencoAvvisiDigitaliAsyncClient = NodoChiediElencoAvvisiDigitaliAsyncClient;
//# sourceMappingURL=clients.js.map