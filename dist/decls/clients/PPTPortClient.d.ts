/**
 * Define SOAP Clients to call PPTPort services provided by PagoPa
 */
import * as soap from "soap";
import { IPPTPortSoap } from "../types/IPPTPortSoap";
/**
 * Create a client for PagamentiTelematiciPspNodo SOAP service
 * @param {soap.IOptions} options - Soap options
 * @return {Promise<soap.Client & IPPTPortSoap>} Soap client created
 */
export declare function createPagamentiTelematiciPspNodoClient(options: soap.IOptions): Promise<soap.Client & IPPTPortSoap>;
/**
 * Converts the callback based methods of a PagamentiTelematiciPspNodo client to
 * promise based methods.
 */
export declare class PagamentiTelematiciPspNodoAsyncClient {
    private readonly client;
    readonly nodoVerificaRPT: import("../utils/SoapUtils").SoapMethodPromise<import("../types/yaml-to-ts/nodoVerificaRPT_ppt").nodoVerificaRPT_ppt, import("../types/yaml-to-ts/nodoVerificaRPTRisposta_ppt").nodoVerificaRPTRisposta_ppt>;
    readonly nodoAttivaRPT: import("../utils/SoapUtils").SoapMethodPromise<import("../types/yaml-to-ts/nodoAttivaRPT_ppt").nodoAttivaRPT_ppt, import("../types/yaml-to-ts/nodoAttivaRPTRisposta_ppt").nodoAttivaRPTRisposta_ppt>;
    constructor(client: IPPTPortSoap);
}
