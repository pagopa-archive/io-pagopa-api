import * as soap from "soap";
import * as PagamentiTelematiciPspNodoService from "../wsdl-lib/PagamentiTelematiciPspNodoservice/PPTPort";
import * as IscrizioniAvvisaturaService from "../wsdl-lib/IscrizioniAvvisaturaService/PPTPort";
import * as NodoChiediElencoAvvisiDigitaliService from "../wsdl-lib/NodoChiediElencoAvvisiDigitaliService/PPTPort";
export { PagamentiTelematiciPspNodoService };
export { IscrizioniAvvisaturaService };
export { NodoChiediElencoAvvisiDigitaliService };
/**
 * Creates a client for the "PagamentiTelematiciPspNodo" service
 */
export declare function createPagamentiTelematiciPspNodoClient(options: soap.IOptions): Promise<soap.Client & PagamentiTelematiciPspNodoService.IPPTPortSoap>;
/**
 * Creates a client for the "IscrizioniAvvisatura" service
 */
export declare function createIscrizioniAvvisaturaClient(options: soap.IOptions): Promise<soap.Client & IscrizioniAvvisaturaService.IPPTPortSoap>;
/**
 * Creates a client for the "NodoChiediElencoAvvisiDigitali" service
 */
export declare function createNodoChiediElencoAvvisiDigitaliClient(options: soap.IOptions): Promise<soap.Client & NodoChiediElencoAvvisiDigitaliService.IPPTPortSoap>;
/**
 * Converts the callback based methods of a PagamentiTelematiciPspNodo client to
 * promise based methods.
 */
export declare class PagamentiTelematiciPspNodoAsyncClient {
    private readonly client;
    constructor(client: PagamentiTelematiciPspNodoService.IPPTPortSoap);
    nodoVerificaRPT: (input: PagamentiTelematiciPspNodoService.InodoVerificaRPTInput) => Promise<PagamentiTelematiciPspNodoService.InodoVerificaRPTOutput>;
    nodoAttivaRPT: (input: PagamentiTelematiciPspNodoService.InodoAttivaRPTInput) => Promise<PagamentiTelematiciPspNodoService.InodoAttivaRPTOutput>;
    nodoInviaRT: (input: PagamentiTelematiciPspNodoService.InodoInviaRTInput) => Promise<PagamentiTelematiciPspNodoService.InodoInviaRTOutput>;
    nodoChiediInformativaPA: (input: PagamentiTelematiciPspNodoService.InodoChiediInformativaPAInput) => Promise<PagamentiTelematiciPspNodoService.InodoChiediInformativaPAOutput>;
    nodoChiediTemplateInformativaPSP: (input: PagamentiTelematiciPspNodoService.InodoChiediTemplateInformativaPSPInput) => Promise<PagamentiTelematiciPspNodoService.InodoChiediTemplateInformativaPSPOutput>;
    nodoInviaFlussoRendicontazione: (input: PagamentiTelematiciPspNodoService.InodoInviaFlussoRendicontazioneInput) => Promise<PagamentiTelematiciPspNodoService.InodoInviaFlussoRendicontazioneOutput>;
    nodoChiediElencoQuadraturePSP: (input: PagamentiTelematiciPspNodoService.InodoChiediElencoQuadraturePSPInput) => Promise<PagamentiTelematiciPspNodoService.InodoChiediElencoQuadraturePSPOutput>;
    nodoChiediQuadraturaPSP: (input: PagamentiTelematiciPspNodoService.InodoChiediQuadraturaPSPInput) => Promise<PagamentiTelematiciPspNodoService.InodoChiediQuadraturaPSPOutput>;
    nodoInviaEsitoStorno: (input: PagamentiTelematiciPspNodoService.InodoInviaEsitoStornoInput) => Promise<PagamentiTelematiciPspNodoService.InodoInviaEsitoStornoOutput>;
    nodoInviaRichiestaRevoca: (input: PagamentiTelematiciPspNodoService.InodoInviaRichiestaRevocaInput) => Promise<PagamentiTelematiciPspNodoService.InodoInviaRichiestaRevocaOutput>;
}
/**
 * Converts the callback based methods of a IscrizioniAvvisatura client to
 * promise based methods.
 */
export declare class IscrizioniAvvisaturaAsyncClient {
    private readonly client;
    constructor(client: IscrizioniAvvisaturaService.IPPTPortSoap);
    nodoAggiornaIscrizioniAvvisatura: (input: IscrizioniAvvisaturaService.InodoAggiornaIscrizioniAvvisaturaInput) => Promise<IscrizioniAvvisaturaService.InodoAggiornaIscrizioniAvvisaturaOutput>;
}
/**
 * Converts the callback based methods of a NodoChiediElencoAvvisiDigitali
 * client to promise based methods.
 */
export declare class NodoChiediElencoAvvisiDigitaliAsyncClient {
    private readonly client;
    constructor(client: NodoChiediElencoAvvisiDigitaliService.IPPTPortSoap);
    nodoChiediElencoAvvisiDigitali: (input: NodoChiediElencoAvvisiDigitaliService.InodoChiediElencoAvvisiDigitaliInput) => Promise<NodoChiediElencoAvvisiDigitaliService.InodoChiediElencoAvvisiDigitaliOutput>;
}
