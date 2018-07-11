import * as t from "io-ts";
import { cdInfoPagamentoHeader } from "./cdInfoPagamentoHeader";
import { cdInfoPagamento_ppt } from "./cdInfoPagamento_ppt";
declare const _cdInfoPagamentoInputEnvelopeBody: t.ExactType<t.IntersectionType<[t.InterfaceType<{
    cdInfoPagamento: t.Type<cdInfoPagamento_ppt, cdInfoPagamento_ppt, t.mixed>;
}, t.TypeOfProps<{
    cdInfoPagamento: t.Type<cdInfoPagamento_ppt, cdInfoPagamento_ppt, t.mixed>;
}>, t.OutputOfProps<{
    cdInfoPagamento: t.Type<cdInfoPagamento_ppt, cdInfoPagamento_ppt, t.mixed>;
}>, t.mixed>, t.PartialType<{}, t.TypeOfPartialProps<{}>, t.OutputOfPartialProps<{}>, t.mixed>], t.TypeOfProps<{
    cdInfoPagamento: t.Type<cdInfoPagamento_ppt, cdInfoPagamento_ppt, t.mixed>;
}> & t.TypeOfPartialProps<{}>, t.OutputOfProps<{
    cdInfoPagamento: t.Type<cdInfoPagamento_ppt, cdInfoPagamento_ppt, t.mixed>;
}> & t.OutputOfPartialProps<{}>, t.mixed>, t.TypeOfProps<{
    cdInfoPagamento: t.Type<cdInfoPagamento_ppt, cdInfoPagamento_ppt, t.mixed>;
}> & t.TypeOfPartialProps<{}>, t.OutputOfProps<{
    cdInfoPagamento: t.Type<cdInfoPagamento_ppt, cdInfoPagamento_ppt, t.mixed>;
}> & t.OutputOfPartialProps<{}>, t.mixed>;
export declare const cdInfoPagamentoInputEnvelopeBody: t.Type<cdInfoPagamentoInputEnvelopeBody, cdInfoPagamentoInputEnvelopeBody, t.mixed>;
export interface cdInfoPagamentoInputEnvelopeBody extends t.TypeOf<typeof _cdInfoPagamentoInputEnvelopeBody> {
}
declare const _cdInfoPagamentoInputEnvelope: t.ExactType<t.IntersectionType<[t.InterfaceType<{
    Body: t.Type<cdInfoPagamentoInputEnvelopeBody, cdInfoPagamentoInputEnvelopeBody, t.mixed>;
}, t.TypeOfProps<{
    Body: t.Type<cdInfoPagamentoInputEnvelopeBody, cdInfoPagamentoInputEnvelopeBody, t.mixed>;
}>, t.OutputOfProps<{
    Body: t.Type<cdInfoPagamentoInputEnvelopeBody, cdInfoPagamentoInputEnvelopeBody, t.mixed>;
}>, t.mixed>, t.PartialType<{
    Header: t.Type<cdInfoPagamentoHeader, cdInfoPagamentoHeader, t.mixed>;
}, t.TypeOfPartialProps<{
    Header: t.Type<cdInfoPagamentoHeader, cdInfoPagamentoHeader, t.mixed>;
}>, t.OutputOfPartialProps<{
    Header: t.Type<cdInfoPagamentoHeader, cdInfoPagamentoHeader, t.mixed>;
}>, t.mixed>], t.TypeOfProps<{
    Body: t.Type<cdInfoPagamentoInputEnvelopeBody, cdInfoPagamentoInputEnvelopeBody, t.mixed>;
}> & t.TypeOfPartialProps<{
    Header: t.Type<cdInfoPagamentoHeader, cdInfoPagamentoHeader, t.mixed>;
}>, t.OutputOfProps<{
    Body: t.Type<cdInfoPagamentoInputEnvelopeBody, cdInfoPagamentoInputEnvelopeBody, t.mixed>;
}> & t.OutputOfPartialProps<{
    Header: t.Type<cdInfoPagamentoHeader, cdInfoPagamentoHeader, t.mixed>;
}>, t.mixed>, t.TypeOfProps<{
    Body: t.Type<cdInfoPagamentoInputEnvelopeBody, cdInfoPagamentoInputEnvelopeBody, t.mixed>;
}> & t.TypeOfPartialProps<{
    Header: t.Type<cdInfoPagamentoHeader, cdInfoPagamentoHeader, t.mixed>;
}>, t.OutputOfProps<{
    Body: t.Type<cdInfoPagamentoInputEnvelopeBody, cdInfoPagamentoInputEnvelopeBody, t.mixed>;
}> & t.OutputOfPartialProps<{
    Header: t.Type<cdInfoPagamentoHeader, cdInfoPagamentoHeader, t.mixed>;
}>, t.mixed>;
export declare const cdInfoPagamentoInputEnvelope: t.Type<cdInfoPagamentoInputEnvelope, cdInfoPagamentoInputEnvelope, t.mixed>;
export interface cdInfoPagamentoInputEnvelope extends t.TypeOf<typeof _cdInfoPagamentoInputEnvelope> {
}
declare const _cdInfoPagamentoInput: t.ExactType<t.IntersectionType<[t.InterfaceType<{
    Envelope: t.Type<cdInfoPagamentoInputEnvelope, cdInfoPagamentoInputEnvelope, t.mixed>;
}, t.TypeOfProps<{
    Envelope: t.Type<cdInfoPagamentoInputEnvelope, cdInfoPagamentoInputEnvelope, t.mixed>;
}>, t.OutputOfProps<{
    Envelope: t.Type<cdInfoPagamentoInputEnvelope, cdInfoPagamentoInputEnvelope, t.mixed>;
}>, t.mixed>, t.PartialType<{}, t.TypeOfPartialProps<{}>, t.OutputOfPartialProps<{}>, t.mixed>], t.TypeOfProps<{
    Envelope: t.Type<cdInfoPagamentoInputEnvelope, cdInfoPagamentoInputEnvelope, t.mixed>;
}> & t.TypeOfPartialProps<{}>, t.OutputOfProps<{
    Envelope: t.Type<cdInfoPagamentoInputEnvelope, cdInfoPagamentoInputEnvelope, t.mixed>;
}> & t.OutputOfPartialProps<{}>, t.mixed>, t.TypeOfProps<{
    Envelope: t.Type<cdInfoPagamentoInputEnvelope, cdInfoPagamentoInputEnvelope, t.mixed>;
}> & t.TypeOfPartialProps<{}>, t.OutputOfProps<{
    Envelope: t.Type<cdInfoPagamentoInputEnvelope, cdInfoPagamentoInputEnvelope, t.mixed>;
}> & t.OutputOfPartialProps<{}>, t.mixed>;
export declare const cdInfoPagamentoInput: t.Type<cdInfoPagamentoInput, cdInfoPagamentoInput, t.mixed>;
export interface cdInfoPagamentoInput extends t.TypeOf<typeof _cdInfoPagamentoInput> {
}
export {};
