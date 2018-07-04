/**
 * Define SOAP Clients to call PPTPort services provided by PagoPa
 */

import * as soap from "soap";
import { PAGAMENTI_TELEMATICI_WSDL_PATH } from "../Configuration";
import { IPPTPortSoap } from "../types/IPPTPortSoap";
import { createClient, promisifySoapMethod } from "../utils/SoapUtils";

/**
 * Create a client for PagamentiTelematiciPspNodo SOAP service
 * @param {soap.IOptions} options - Soap options
 * @return {Promise<soap.Client & IPPTPortSoap>} Soap client created
 */
export function createPagamentiTelematiciPspNodoClient(
  options: soap.IOptions
): Promise<soap.Client & IPPTPortSoap> {
  return createClient<IPPTPortSoap>(PAGAMENTI_TELEMATICI_WSDL_PATH, options);
}

/**
 * Converts the callback based methods of a PagamentiTelematiciPspNodo client to
 * promise based methods.
 */
export class PagamentiTelematiciPspNodoAsyncClient {
  public readonly nodoVerificaRPT = promisifySoapMethod(
    this.client.nodoVerificaRPT
  );
  public readonly nodoAttivaRPT = promisifySoapMethod(
    this.client.nodoAttivaRPT
  );
  constructor(private readonly client: IPPTPortSoap) {}
}
