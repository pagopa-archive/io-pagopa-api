import { risposta_ppt } from "./risposta_ppt";
import { nodoTipoDatiPagamentoPA_ppt } from "./nodoTipoDatiPagamentoPA_ppt";
import * as t from "io-ts";
declare const _esitoNodoVerificaRPTRisposta_ppt2: t.ExactType<t.IntersectionType<[t.InterfaceType<{}, t.TypeOfProps<{}>, t.OutputOfProps<{}>, t.mixed>, t.PartialType<{
    esito: t.StringType;
    datiPagamentoPA: t.Type<nodoTipoDatiPagamentoPA_ppt, nodoTipoDatiPagamentoPA_ppt, t.mixed>;
}, t.TypeOfPartialProps<{
    esito: t.StringType;
    datiPagamentoPA: t.Type<nodoTipoDatiPagamentoPA_ppt, nodoTipoDatiPagamentoPA_ppt, t.mixed>;
}>, t.OutputOfPartialProps<{
    esito: t.StringType;
    datiPagamentoPA: t.Type<nodoTipoDatiPagamentoPA_ppt, nodoTipoDatiPagamentoPA_ppt, t.mixed>;
}>, t.mixed>], t.TypeOfProps<{}> & t.TypeOfPartialProps<{
    esito: t.StringType;
    datiPagamentoPA: t.Type<nodoTipoDatiPagamentoPA_ppt, nodoTipoDatiPagamentoPA_ppt, t.mixed>;
}>, t.OutputOfProps<{}> & t.OutputOfPartialProps<{
    esito: t.StringType;
    datiPagamentoPA: t.Type<nodoTipoDatiPagamentoPA_ppt, nodoTipoDatiPagamentoPA_ppt, t.mixed>;
}>, t.mixed>, t.TypeOfProps<{}> & t.TypeOfPartialProps<{
    esito: t.StringType;
    datiPagamentoPA: t.Type<nodoTipoDatiPagamentoPA_ppt, nodoTipoDatiPagamentoPA_ppt, t.mixed>;
}>, t.OutputOfProps<{}> & t.OutputOfPartialProps<{
    esito: t.StringType;
    datiPagamentoPA: t.Type<nodoTipoDatiPagamentoPA_ppt, nodoTipoDatiPagamentoPA_ppt, t.mixed>;
}>, t.mixed>;
export declare const esitoNodoVerificaRPTRisposta_ppt2: t.Type<esitoNodoVerificaRPTRisposta_ppt2, esitoNodoVerificaRPTRisposta_ppt2, t.mixed>;
export interface esitoNodoVerificaRPTRisposta_ppt2 extends t.TypeOf<typeof _esitoNodoVerificaRPTRisposta_ppt2> {
}
export declare const esitoNodoVerificaRPTRisposta_ppt: t.IntersectionType<[t.Type<risposta_ppt, risposta_ppt, t.mixed>, t.Type<esitoNodoVerificaRPTRisposta_ppt2, esitoNodoVerificaRPTRisposta_ppt2, t.mixed>], risposta_ppt & esitoNodoVerificaRPTRisposta_ppt2, risposta_ppt & esitoNodoVerificaRPTRisposta_ppt2, t.mixed>;
export interface esitoNodoVerificaRPTRisposta_ppt extends t.TypeOf<typeof esitoNodoVerificaRPTRisposta_ppt> {
}
export {};
