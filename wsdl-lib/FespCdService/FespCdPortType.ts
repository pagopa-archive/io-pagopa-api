// Aliases for types used in WSDLs
import { base64Binary, dateTime, date, gYear, int } from "../../lib/wsdl-types";

/* tslint:disable:max-line-length */
export interface IcdInfoPagamentoInput {
  /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
  identificativoDominio: string;
  /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
  identificativoUnivocoVersamento: string;
  /** http://ws.pagamenti.telematici.gov/#stText35(minLength,maxLength) */
  codiceContestoPagamento: string;
  /** http://ws.pagamenti.telematici.gov/#string(undefined) */
  idPagamento: string;
}

export interface IcdInfoPagamentoOutput {
  fault?: FespCdPortTypeTypes.Ifault;
  /** http://ws.pagamenti.telematici.gov/#string(undefined) */
  esito?: Esito;
}

export interface IFespCdPortTypeSoap {
  cdInfoPagamento: (
    input: IcdInfoPagamentoInput,
    cb: (
      err: any | null,
      result: IcdInfoPagamentoOutput,
      raw: string,
      soapHeader: { [k: string]: any }
    ) => any
  ) => void;
}

export namespace FespCdPortTypeTypes {
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
    /** http://ws.pagamenti.telematici.gov/#string(undefined) */
    originalFaultCode: string;
    /** http://ws.pagamenti.telematici.gov/#string(undefined) */
    originalFaultString: string;
    /** http://ws.pagamenti.telematici.gov/#string(undefined) */
    originalDescription: string;
  }
}

export enum Esito {
  OK = "OK",
  KO = "KO"
}
export const envelopeKey = "soapenv";