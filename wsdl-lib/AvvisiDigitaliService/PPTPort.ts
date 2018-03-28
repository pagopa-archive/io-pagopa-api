// Aliases for types used in WSDLs
 type base64Binary = string;
 type dateTime = Date; 
 type date = Date; 
 type gYear = number; 
 type int = number;

/* tslint:disable:max-line-length */
export interface IpspInviaAvvisoDigitaleInput {
    /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
    identificativoPSP: string;
    /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
    identificativoIntermediarioPSP: string;
    /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
    identificativoCanale: string;
    avvisoDigitale: PPTPortTypes.IavvisoDigitale;
}

export interface IpspInviaAvvisoDigitaleOutput {
    fault: PPTPortTypes.Ifault;
    /** http://ws.pagamenti.telematici.gov/#stEsitoOperazione(length,OK,KO) */
    esitoOperazione: "OK" | "KO";
}

export interface IPPTPortSoap {
    pspInviaAvvisoDigitale: (input: IpspInviaAvvisoDigitaleInput, cb: (err: any | null, result: IpspInviaAvvisoDigitaleOutput, raw: string,  soapHeader: {[k: string]: any}) => any) => void;
}

export namespace PPTPortTypes {
    export interface IidentificativoUnivocoPagatore {
        /** http://ws.pagamenti.telematici.gov/#stTipoIdentificativoUnivocoPersFG(length,F,G) */
        tipoIdentificativoUnivoco: "F" | "G";
        /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
        codiceIdentificativoUnivoco: string;
    }
    export interface IsoggettoPagatore {
        /** http://ws.pagamenti.telematici.gov/#stText70(minLength,maxLength) */
        anagraficaPagatore: string;
        identificativoUnivocoPagatore: PPTPortTypes.IidentificativoUnivocoPagatore;
    }
    export interface IdatiSingoloVersamento {
        /** http://ws.pagamenti.telematici.gov/#stIBANIdentifier(pattern) */
        ibanAccredito: string;
        /** http://ws.pagamenti.telematici.gov/#stIBANIdentifier(pattern) */
        ibanAppoggio: string;
    }
    export interface IavvisoDigitale {
        /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
        identificativoDominio: string;
        /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
        anagraficaBeneficiario: string;
        /** http://ws.pagamenti.telematici.gov/#stIdentificativoMessaggioRichiesta(minLength,maxLength) */
        identificativoMessaggioRichiesta: string;
        /** http://ws.pagamenti.telematici.gov/#stTassonomiaAvviso(pattern,00,01,02,03,04,05,06,07,08,09,10,11,12) */
        tassonomiaAvviso: "00" | "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12";
        /** http://ws.pagamenti.telematici.gov/#stCodiceAvviso(pattern) */
        codiceAvviso: string;
        soggettoPagatore: PPTPortTypes.IsoggettoPagatore;
        /** http://ws.pagamenti.telematici.gov/#stISODate() */
        dataScadenzaPagamento: date;
        /** http://ws.pagamenti.telematici.gov/#stISODate() */
        dataScadenzaAvviso: date;
        /** http://ws.pagamenti.telematici.gov/#stImporto(minInclusive,maxInclusive,fractionDigits,totalDigits) */
        importoAvviso: "minInclusive" | "maxInclusive" | "fractionDigits" | "totalDigits";
        /** http://ws.pagamenti.telematici.gov/#stEMail(pattern,maxLength) */
        eMailSoggetto: string;
        /** http://ws.pagamenti.telematici.gov/#stCellulareSoggetto(pattern) */
        cellulareSoggetto: string;
        /** http://ws.pagamenti.telematici.gov/#stText140(minLength,maxLength) */
        descrizionePagamento: string;
        /** http://ws.pagamenti.telematici.gov/#stText140(minLength,maxLength) */
        urlAvviso: string;
        datiSingoloVersamento: PPTPortTypes.IdatiSingoloVersamento[];
        /** http://ws.pagamenti.telematici.gov/#stTipoPagamento(pattern,0,1) */
        tipoPagamento: "0" | "1";
        /** http://ws.pagamenti.telematici.gov/#stTipoOperazione(length,C,U,D) */
        tipoOperazione: "C" | "U" | "D";
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
