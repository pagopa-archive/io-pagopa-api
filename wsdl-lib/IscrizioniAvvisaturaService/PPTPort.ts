// Aliases for types used in WSDLs
 import { base64Binary, dateTime, date, gYear, int } from "../../lib/wsdl-types";

/* tslint:disable:max-line-length */
export interface InodoAggiornaIscrizioniAvvisaturaInput {
    /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
    identificativoPSP: string;
    /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
    identificativoIntermediarioPSP: string;
    /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
    identificativoCanale: string;
    /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
    password: string;
    datiNotifica: PPTPortTypes.IdatiNotifica;
}

export interface InodoAggiornaIscrizioniAvvisaturaOutput {
    fault: PPTPortTypes.Ifault;
    /** http://ws.pagamenti.telematici.gov/#stEsitoOperazione(length,OK,KO) */
    esitoOperazione: "OK" | "KO";
}

export interface IPPTPortSoap {
    nodoAggiornaIscrizioniAvvisatura: (input: InodoAggiornaIscrizioniAvvisaturaInput, cb: (err: any | null, result: InodoAggiornaIscrizioniAvvisaturaOutput, raw: string,  soapHeader: {[k: string]: any}) => any) => void;
}

export namespace PPTPortTypes {
    export interface IidentificativoUnivocoSoggetto {
        /** http://ws.pagamenti.telematici.gov/#stTipoIdentificativoUnivocoPersFG(length,F,G) */
        "sac:tipoIdentificativoUnivoco": "F" | "G";
        /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
        "sac:codiceIdentificativoUnivoco": string;
    }
    export interface IdatiNotifica {
        /** http://ws.pagamenti.telematici.gov/#stISODateTime() */
        dataOraRichiesta: dateTime;
        /** http://ws.pagamenti.telematici.gov/#stIdentificativoMessaggioRichiesta(minLength,maxLength) */
        identificativoMessaggioRichiesta: string;
        identificativoUnivocoSoggetto: PPTPortTypes.IidentificativoUnivocoSoggetto;
        /** http://ws.pagamenti.telematici.gov/#stTipoAzioneAggiornamento(length,A,D) */
        azioneDiAggiornamento: "A" | "D";
    }
    export interface Ifault {
        /** http://ws.pagamenti.telematici.gov/#string(undefined) */
        faultCode: string;
        /** http://ws.pagamenti.telematici.gov/#string(undefined) */
        faultString: string;
        /** http://ws.pagamenti.telematici.gov/#string(undefined) */
        id: string;
        /** http://ws.pagamenti.telematici.gov/#string(undefined) */
        description: string;
        /** http://ws.pagamenti.telematici.gov/#int(undefined) */
        serial: int;
    }
}
