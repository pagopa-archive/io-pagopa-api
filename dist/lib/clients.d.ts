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
    nodoVerificaRPT: import("../lib/utils").SoapMethodPromise<PagamentiTelematiciPspNodoService.InodoVerificaRPTInput, PagamentiTelematiciPspNodoService.InodoVerificaRPTOutput>;
    nodoAttivaRPT: import("../lib/utils").SoapMethodPromise<PagamentiTelematiciPspNodoService.InodoAttivaRPTInput, PagamentiTelematiciPspNodoService.InodoAttivaRPTOutput>;
    nodoInviaRT: import("../lib/utils").SoapMethodPromise<PagamentiTelematiciPspNodoService.InodoInviaRTInput, PagamentiTelematiciPspNodoService.InodoInviaRTOutput>;
    nodoChiediInformativaPA: import("../lib/utils").SoapMethodPromise<PagamentiTelematiciPspNodoService.InodoChiediInformativaPAInput, PagamentiTelematiciPspNodoService.InodoChiediInformativaPAOutput>;
    nodoChiediTemplateInformativaPSP: import("../lib/utils").SoapMethodPromise<PagamentiTelematiciPspNodoService.InodoChiediTemplateInformativaPSPInput, PagamentiTelematiciPspNodoService.InodoChiediTemplateInformativaPSPOutput>;
    nodoInviaFlussoRendicontazione: import("../lib/utils").SoapMethodPromise<PagamentiTelematiciPspNodoService.InodoInviaFlussoRendicontazioneInput, PagamentiTelematiciPspNodoService.InodoInviaFlussoRendicontazioneOutput>;
    nodoChiediElencoQuadraturePSP: import("../lib/utils").SoapMethodPromise<PagamentiTelematiciPspNodoService.InodoChiediElencoQuadraturePSPInput, PagamentiTelematiciPspNodoService.InodoChiediElencoQuadraturePSPOutput>;
    nodoChiediQuadraturaPSP: import("../lib/utils").SoapMethodPromise<PagamentiTelematiciPspNodoService.InodoChiediQuadraturaPSPInput, PagamentiTelematiciPspNodoService.InodoChiediQuadraturaPSPOutput>;
    nodoInviaEsitoStorno: import("../lib/utils").SoapMethodPromise<PagamentiTelematiciPspNodoService.InodoInviaEsitoStornoInput, PagamentiTelematiciPspNodoService.InodoInviaEsitoStornoOutput>;
    nodoInviaRichiestaRevoca: import("../lib/utils").SoapMethodPromise<PagamentiTelematiciPspNodoService.InodoInviaRichiestaRevocaInput, PagamentiTelematiciPspNodoService.InodoInviaRichiestaRevocaOutput>;
}
/**
 * Converts the callback based methods of a IscrizioniAvvisatura client to
 * promise based methods.
 */
export declare class IscrizioniAvvisaturaAsyncClient {
    private readonly client;
    constructor(client: IscrizioniAvvisaturaService.IPPTPortSoap);
    nodoAggiornaIscrizioniAvvisatura: import("../lib/utils").SoapMethodPromise<IscrizioniAvvisaturaService.InodoAggiornaIscrizioniAvvisaturaInput, IscrizioniAvvisaturaService.InodoAggiornaIscrizioniAvvisaturaOutput>;
}
/**
 * Converts the callback based methods of a NodoChiediElencoAvvisiDigitali
 * client to promise based methods.
 */
export declare class NodoChiediElencoAvvisiDigitaliAsyncClient {
    private readonly client;
    constructor(client: NodoChiediElencoAvvisiDigitaliService.IPPTPortSoap);
    nodoChiediElencoAvvisiDigitali: import("../lib/utils").SoapMethodPromise<NodoChiediElencoAvvisiDigitaliService.InodoChiediElencoAvvisiDigitaliInput, NodoChiediElencoAvvisiDigitaliService.InodoChiediElencoAvvisiDigitaliOutput>;
}
