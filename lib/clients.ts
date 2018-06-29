import * as soap from "soap";

import * as wsdl_paths from "./wsdl-paths";
import { createClient, promisifySoapMethod, readWsdl } from "./utils";

// import interfaces for "pagoPA" services (Nodo and Avvisatura)
import * as PagamentiTelematiciPspNodoService from "../wsdl-lib/PagamentiTelematiciPspNodoservice/PPTPort";
import * as IscrizioniAvvisaturaService from "../wsdl-lib/IscrizioniAvvisaturaService/PPTPort";
import * as NodoChiediElencoAvvisiDigitaliService from "../wsdl-lib/NodoChiediElencoAvvisiDigitaliService/PPTPort";

// re-export all the interfaces (needed by client app)
export { PagamentiTelematiciPspNodoService };
export { IscrizioniAvvisaturaService };
export { NodoChiediElencoAvvisiDigitaliService };

/**
 * Creates a client for the "PagamentiTelematiciPspNodo" service
 */
export function createPagamentiTelematiciPspNodoClient(options: soap.IOptions): Promise<soap.Client & PagamentiTelematiciPspNodoService.IPPTPortSoap> {
  return createClient<PagamentiTelematiciPspNodoService.IPPTPortSoap>(wsdl_paths.FespPspService_WSDL_PATH, options);
}

/**
 * Creates a client for the "IscrizioniAvvisatura" service
 */
export function createIscrizioniAvvisaturaClient(options: soap.IOptions): Promise<soap.Client & IscrizioniAvvisaturaService.IPPTPortSoap> {
  return createClient<IscrizioniAvvisaturaService.IPPTPortSoap>(wsdl_paths.IscrizioniAvvisaturaService_WSDL_PATH, options);
}

/**
 * Creates a client for the "NodoChiediElencoAvvisiDigitali" service
 */
export function createNodoChiediElencoAvvisiDigitaliClient(options: soap.IOptions): Promise<soap.Client & NodoChiediElencoAvvisiDigitaliService.IPPTPortSoap> {
  return createClient<NodoChiediElencoAvvisiDigitaliService.IPPTPortSoap>(wsdl_paths.NodoChiediElencoAvvisiDigitaliService_WSDL_PATH, options);
}

/**
 * Converts the callback based methods of a PagamentiTelematiciPspNodo client to
 * promise based methods.
 */
export class PagamentiTelematiciPspNodoAsyncClient {

  constructor(private readonly client: PagamentiTelematiciPspNodoService.IPPTPortSoap) {}

  nodoVerificaRPT = promisifySoapMethod(this.client.nodoVerificaRPT)
  nodoAttivaRPT = promisifySoapMethod(this.client.nodoAttivaRPT)
  nodoInviaRT = promisifySoapMethod(this.client.nodoInviaRT)
  nodoChiediInformativaPA = promisifySoapMethod(this.client.nodoChiediInformativaPA)
  nodoChiediTemplateInformativaPSP = promisifySoapMethod(this.client.nodoChiediTemplateInformativaPSP)
  nodoInviaFlussoRendicontazione = promisifySoapMethod(this.client.nodoInviaFlussoRendicontazione)
  nodoChiediElencoQuadraturePSP = promisifySoapMethod(this.client.nodoChiediElencoQuadraturePSP)
  nodoChiediQuadraturaPSP = promisifySoapMethod(this.client.nodoChiediQuadraturaPSP)
  nodoInviaEsitoStorno = promisifySoapMethod(this.client.nodoInviaEsitoStorno)
  nodoInviaRichiestaRevoca = promisifySoapMethod(this.client.nodoInviaRichiestaRevoca)

}

/**
 * Converts the callback based methods of a IscrizioniAvvisatura client to
 * promise based methods.
 */
export class IscrizioniAvvisaturaAsyncClient {

  constructor(private readonly client: IscrizioniAvvisaturaService.IPPTPortSoap) {}

  nodoAggiornaIscrizioniAvvisatura = promisifySoapMethod(this.client.nodoAggiornaIscrizioniAvvisatura)

}

/**
 * Converts the callback based methods of a NodoChiediElencoAvvisiDigitali
 * client to promise based methods.
 */
export class NodoChiediElencoAvvisiDigitaliAsyncClient {

  constructor(private readonly client: NodoChiediElencoAvvisiDigitaliService.IPPTPortSoap) {}

  nodoChiediElencoAvvisiDigitali = promisifySoapMethod(this.client.nodoChiediElencoAvvisiDigitali)

}
