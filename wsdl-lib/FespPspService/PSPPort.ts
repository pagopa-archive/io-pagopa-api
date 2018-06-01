// Aliases for types used in WSDLs
 import { base64Binary, dateTime, date, gYear, int } from "../../lib/wsdl-types";

/* tslint:disable:max-line-length */
export interface IpspInviaRPTInput {
    /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
    identificativoDominio: string;
    /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
    identificativoPSP: string;
    /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
    identificativoIntermediarioPSP: string;
    /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
    identificativoCanale: string;
    /** http://ws.pagamenti.telematici.gov/#stModelloPagamento(0,1,2,4) */
    modelloPagamento: "0" | "1" | "2" | "4";
    elementoListaRPT: PSPPortTypes.IelementoListaRPT[];
}

export interface IpspInviaRPTOutput {
    pspInviaRPTResponse: PSPPortTypes.IpspInviaRPTResponse;
}

export interface IpspInviaCarrelloRPTInput {
    /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
    identificativoPSP: string;
    /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
    identificativoIntermediarioPSP: string;
    /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
    identificativoCanale: string;
    /** http://ws.pagamenti.telematici.gov/#stModelloPagamento(0,1,2,4) */
    modelloPagamento: "0" | "1" | "2" | "4";
    /** http://ws.pagamenti.telematici.gov/#string(undefined) */
    parametriProfiloPagamento: string;
    listaRPT: PSPPortTypes.IlistaRPT;
}

export interface IpspInviaCarrelloRPTOutput {
    pspInviaCarrelloRPTResponse: PSPPortTypes.IpspInviaCarrelloRPTResponse;
}

export interface IpspInviaCarrelloRPTCarteInput {
    /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
    identificativoPSP: string;
    /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
    identificativoIntermediarioPSP: string;
    /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
    identificativoCanale: string;
    /** http://ws.pagamenti.telematici.gov/#stModelloPagamento(0,1,2,4) */
    modelloPagamento: "0" | "1" | "2" | "4";
    /** http://ws.pagamenti.telematici.gov/#string(undefined) */
    parametriProfiloPagamento: string;
    listaRPT: PSPPortTypes.IlistaRPT;
    /** http://ws.pagamenti.telematici.gov/#string(undefined) */
    rrn: string;
    /** http://ws.pagamenti.telematici.gov/#string(undefined) */
    esitoTransazioneCarta: string;
    /** http://ws.pagamenti.telematici.gov/#stImporto(minInclusive,maxInclusive,fractionDigits,totalDigits) */
    importoTotalePagato: number; //TODO [#158031250] wsdl-to-ts fix
    /** http://ws.pagamenti.telematici.gov/#stISODateTime() */
    timestampOperazione: dateTime;
    /** http://ws.pagamenti.telematici.gov/#stText6(length) */
    codiceAutorizzativo: string;
}

export interface IpspInviaCarrelloRPTCarteOutput {
    pspInviaCarrelloRPTResponse: PSPPortTypes.IpspInviaCarrelloRPTResponse;
}

export interface IpspChiediRTInput {
    /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
    identificativoDominio: string;
    /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
    identificativoUnivocoVersamento: string;
    /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
    codiceContestoPagamento: string;
}

export interface IpspChiediRTOutput {
    pspChiediRTResponse: PSPPortTypes.IpspChiediRTResponse;
}

export interface IpspInviaAckRTInput {
    /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
    identificativoDominio: string;
    /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
    identificativoUnivocoVersamento: string;
    /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
    codiceContestoPagamento: string;
    ackRT: PSPPortTypes.IackRT;
}

export interface IpspInviaAckRTOutput {
    pspInviaAckRTResponse: PSPPortTypes.IpspInviaAckRTResponse;
}

export interface IpspChiediAvanzamentoRPTInput {
    /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
    identificativoDominio: string;
    /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
    identificativoUnivocoVersamento: string;
    /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
    codiceContestoPagamento: string;
}

export interface IpspChiediAvanzamentoRPTOutput {
    pspChiediAvanzamentoRPTResponse: PSPPortTypes.IpspChiediAvanzamentoRPTResponse;
}

export interface IpspChiediListaRTInput {
    /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
    identificativoRichiedente: string;
    /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
    identificativoIntermediarioPSP: string;
    /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
    identificativoCanale: string;
    /** http://ws.pagamenti.telematici.gov/#stModelloPagamento(0,1,2,4) */
    modelloPagamento: "0" | "1" | "2" | "4";
}

export interface IpspChiediListaRTOutput {
    pspChiediListaRTResponse: PSPPortTypes.IpspChiediListaRTResponse;
}

export interface IpspNotificaCancellazioneRPTInput {
    /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
    identificativoDominio: string;
    /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
    identificativoUnivocoVersamento: string;
    /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
    codiceContestoPagamento: string;
}

export interface IpspNotificaCancellazioneRPTOutput {
    pspNotificaCancellazioneRPTResponse: PSPPortTypes.IpspNotificaCancellazioneRPTResponse;
}

export interface IpspInviaRichiestaStornoInput {
    /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
    identificativoDominio: string;
    /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
    identificativoUnivocoVersamento: string;
    /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
    codiceContestoPagamento: string;
    /** http://ws.pagamenti.telematici.gov/#base64Binary(undefined) */
    rr: base64Binary;
}

export interface IpspInviaRichiestaStornoOutput {
    pspInviaRichiestaStornoResponse: PSPPortTypes.IpspInviaRichiestaStornoResponse;
}

export interface IpspInviaRispostaRevocaInput {
    /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
    identificativoDominio: string;
    /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
    identificativoUnivocoVersamento: string;
    /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
    codiceContestoPagamento: string;
    /** http://ws.pagamenti.telematici.gov/#base64Binary(undefined) */
    er: base64Binary;
}

export interface IpspInviaRispostaRevocaOutput {
    pspInviaRispostaRevocaResponse: PSPPortTypes.IpspInviaRispostaRevocaResponse;
}

export interface IPSPPortSoap {
    pspInviaRPT: (input: IpspInviaRPTInput, cb: (err: any | null, result: IpspInviaRPTOutput, raw: string,  soapHeader: {[k: string]: any}) => any) => void;
    pspInviaCarrelloRPT: (input: IpspInviaCarrelloRPTInput, cb: (err: any | null, result: IpspInviaCarrelloRPTOutput, raw: string,  soapHeader: {[k: string]: any}) => any) => void;
    pspInviaCarrelloRPTCarte: (input: IpspInviaCarrelloRPTCarteInput, cb: (err: any | null, result: IpspInviaCarrelloRPTCarteOutput, raw: string,  soapHeader: {[k: string]: any}) => any) => void;
    pspChiediRT: (input: IpspChiediRTInput, cb: (err: any | null, result: IpspChiediRTOutput, raw: string,  soapHeader: {[k: string]: any}) => any) => void;
    pspInviaAckRT: (input: IpspInviaAckRTInput, cb: (err: any | null, result: IpspInviaAckRTOutput, raw: string,  soapHeader: {[k: string]: any}) => any) => void;
    pspChiediAvanzamentoRPT: (input: IpspChiediAvanzamentoRPTInput, cb: (err: any | null, result: IpspChiediAvanzamentoRPTOutput, raw: string,  soapHeader: {[k: string]: any}) => any) => void;
    pspChiediListaRT: (input: IpspChiediListaRTInput, cb: (err: any | null, result: IpspChiediListaRTOutput, raw: string,  soapHeader: {[k: string]: any}) => any) => void;
    pspNotificaCancellazioneRPT: (input: IpspNotificaCancellazioneRPTInput, cb: (err: any | null, result: IpspNotificaCancellazioneRPTOutput, raw: string,  soapHeader: {[k: string]: any}) => any) => void;
    pspInviaRichiestaStorno: (input: IpspInviaRichiestaStornoInput, cb: (err: any | null, result: IpspInviaRichiestaStornoOutput, raw: string,  soapHeader: {[k: string]: any}) => any) => void;
    pspInviaRispostaRevoca: (input: IpspInviaRispostaRevocaInput, cb: (err: any | null, result: IpspInviaRispostaRevocaOutput, raw: string,  soapHeader: {[k: string]: any}) => any) => void;
}

export namespace PSPPortTypes {
    export interface IelementoListaRPT {
        /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
        identificativoUnivocoVersamento: string;
        /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
        codiceContestoPagamento: string;
        /** http://ws.pagamenti.telematici.gov/#string(undefined) */
        parametriProfiloPagamento: string;
        /** http://ws.pagamenti.telematici.gov/#string(undefined) */
        tipoFirma: string;
        /** http://ws.pagamenti.telematici.gov/#base64Binary(undefined) */
        rpt: base64Binary;
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
    export interface IlistaErroriRPT {
        fault: PSPPortTypes.Ifault[];
    }
    export interface IpspInviaRPTResponse {
        /** http://ws.pagamenti.telematici.gov/#string(undefined) */
        esitoComplessivoOperazione: string;
        /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
        identificativoCarrello: string;
        /** http://ws.pagamenti.telematici.gov/#string(undefined) */
        parametriPagamentoImmediato: string;
        listaErroriRPT: PSPPortTypes.IlistaErroriRPT;
    }
    export interface IelementoListaCarrelloRPT {
        /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
        identificativoDominio: string;
        /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
        identificativoUnivocoVersamento: string;
        /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
        codiceContestoPagamento: string;
        /** http://ws.pagamenti.telematici.gov/#string(undefined) */
        tipoFirma: string;
        /** http://ws.pagamenti.telematici.gov/#base64Binary(undefined) */
        rpt: base64Binary;
    }
    export interface IlistaRPT {
        elementoListaCarrelloRPT: PSPPortTypes.IelementoListaCarrelloRPT[];
    }
    export interface IpspInviaCarrelloRPTResponse {
        fault: PSPPortTypes.Ifault;
        /** http://ws.pagamenti.telematici.gov/#string(undefined) */
        esitoComplessivoOperazione: string;
        /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
        identificativoCarrello: string;
        /** http://ws.pagamenti.telematici.gov/#string(undefined) */
        parametriPagamentoImmediato: string;
        listaErroriRPT: PSPPortTypes.IlistaErroriRPT;
    }
    export interface IpspChiediRTResponse {
        fault: PSPPortTypes.Ifault;
        /** http://ws.pagamenti.telematici.gov/#string(undefined) */
        tipoFirma: string;
        /** http://ws.pagamenti.telematici.gov/#base64Binary(undefined) */
        rt: base64Binary;
    }
    export interface IdatiMessaggioReferenziato {
        /** http://www.cnipa.gov.it/schemas/2010/Pagamenti/Ack_1_0/#stIdentificativoDominio(maxLength) */
        identificativoDominio: string;
        /** http://www.cnipa.gov.it/schemas/2010/Pagamenti/Ack_1_0/#stIdentificativoUnivocoVersamento(maxLength) */
        identificativoUnivocoVersamento: string;
        /** http://www.cnipa.gov.it/schemas/2010/Pagamenti/Ack_1_0/#stCodiceContestoPagamento(maxLength) */
        codiceContestoPagamento: string;
        /** http://www.cnipa.gov.it/schemas/2010/Pagamenti/Ack_1_0/#stIdentificativoMessaggioReferenziato(maxLength) */
        identificativoMessaggioReferenziato: string;
        /** http://www.cnipa.gov.it/schemas/2010/Pagamenti/Ack_1_0/#stISODateTime() */
        dataOraMessaggioReferenziato: dateTime;
        /** http://www.cnipa.gov.it/schemas/2010/Pagamenti/Ack_1_0/#stTipologiaMessaggioReferenziato(RPT,RT) */
        tipologiaMessaggioReferenziato: "RPT" | "RT";
        /** http://www.cnipa.gov.it/schemas/2010/Pagamenti/Ack_1_0/#stMittenteMessaggio(maxLength) */
        mittenteMessaggioReferenziato: string;
    }
    export interface ImotivazioneStatoErrato {
        /** http://www.cnipa.gov.it/schemas/2010/Pagamenti/Ack_1_0/#stCodiceErrore(maxLength) */
        codiceErrore: string;
        /** http://www.cnipa.gov.it/schemas/2010/Pagamenti/Ack_1_0/#stElementoReferenziato(maxLength) */
        elementoReferenziato: string;
        /** http://www.cnipa.gov.it/schemas/2010/Pagamenti/Ack_1_0/#stInformazioniAggiuntive(maxLength) */
        InformazioniAggiuntive: Array<string>;
    }
    export interface IinformazioniStatoMessaggioReferenziato {
        /** http://www.cnipa.gov.it/schemas/2010/Pagamenti/Ack_1_0/#stStatoMessaggio(ACTC,RJCT) */
        statoMessaggioReferenziato: "ACTC" | "RJCT";
        motivazioneStatoErrato: PSPPortTypes.ImotivazioneStatoErrato;
    }
    export interface IackRT {
        /** http://www.cnipa.gov.it/schemas/2010/Pagamenti/Ack_1_0/#stIdentificativoMessaggio(maxLength) */
        identificativoACK: string;
        /** http://www.cnipa.gov.it/schemas/2010/Pagamenti/Ack_1_0/#stISODateTime() */
        dataOraACK: dateTime;
        /** http://www.cnipa.gov.it/schemas/2010/Pagamenti/Ack_1_0/#stMittenteMessaggio(maxLength) */
        mittenteACK: string;
        datiMessaggioReferenziato: PSPPortTypes.IdatiMessaggioReferenziato;
        informazioniStatoMessaggioReferenziato: PSPPortTypes.IinformazioniStatoMessaggioReferenziato;
    }
    export interface IpspInviaAckRTResponse {
        fault: PSPPortTypes.Ifault;
        /** http://ws.pagamenti.telematici.gov/#string(undefined) */
        esito: string;
    }
    export interface IpspChiediAvanzamentoRPTResponse {
        fault: PSPPortTypes.Ifault;
        /** http://ws.pagamenti.telematici.gov/#string(undefined) */
        value: string;
    }
    export interface IelementoListaRTResponse {
        /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
        identificativoDominio: string;
        /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
        identificativoUnivocoVersamento: string;
        /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
        codiceContestoPagamento: string;
    }
    export interface IpspChiediListaRTResponse {
        fault: PSPPortTypes.Ifault;
        elementoListaRTResponse: PSPPortTypes.IelementoListaRTResponse[];
    }
    export interface IpspNotificaCancellazioneRPTResponse {
        fault: PSPPortTypes.Ifault;
        /** http://ws.pagamenti.telematici.gov/#string(undefined) */
        esito: string;
    }
    export interface IpspInviaRichiestaStornoResponse {
        fault: PSPPortTypes.Ifault;
        /** http://ws.pagamenti.telematici.gov/#string(undefined) */
        esito: string;
    }
    export interface IpspInviaRispostaRevocaResponse {
        fault: PSPPortTypes.Ifault;
        /** http://ws.pagamenti.telematici.gov/#string(undefined) */
        esito: string;
    }
}
