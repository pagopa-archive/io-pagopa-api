import * as t from "io-ts";
import { nodoVerificaRPTHeader } from "./nodoVerificaRPTHeader";
import { nodoVerificaRPT_ppt } from "./nodoVerificaRPT_ppt";
declare const _nodoVerificaRPTInputEnvelopeBody: t.ExactType<t.IntersectionType<[t.InterfaceType<{
    nodoVerificaRPT: t.Type<nodoVerificaRPT_ppt, nodoVerificaRPT_ppt, t.mixed>;
}, t.TypeOfProps<{
    nodoVerificaRPT: t.Type<nodoVerificaRPT_ppt, nodoVerificaRPT_ppt, t.mixed>;
}>, t.OutputOfProps<{
    nodoVerificaRPT: t.Type<nodoVerificaRPT_ppt, nodoVerificaRPT_ppt, t.mixed>;
}>, t.mixed>, t.PartialType<{}, t.TypeOfPartialProps<{}>, t.OutputOfPartialProps<{}>, t.mixed>], t.TypeOfProps<{
    nodoVerificaRPT: t.Type<nodoVerificaRPT_ppt, nodoVerificaRPT_ppt, t.mixed>;
}> & t.TypeOfPartialProps<{}>, t.OutputOfProps<{
    nodoVerificaRPT: t.Type<nodoVerificaRPT_ppt, nodoVerificaRPT_ppt, t.mixed>;
}> & t.OutputOfPartialProps<{}>, t.mixed>, t.TypeOfProps<{
    nodoVerificaRPT: t.Type<nodoVerificaRPT_ppt, nodoVerificaRPT_ppt, t.mixed>;
}> & t.TypeOfPartialProps<{}>, t.OutputOfProps<{
    nodoVerificaRPT: t.Type<nodoVerificaRPT_ppt, nodoVerificaRPT_ppt, t.mixed>;
}> & t.OutputOfPartialProps<{}>, t.mixed>;
export declare const nodoVerificaRPTInputEnvelopeBody: t.Type<nodoVerificaRPTInputEnvelopeBody, nodoVerificaRPTInputEnvelopeBody, t.mixed>;
export interface nodoVerificaRPTInputEnvelopeBody extends t.TypeOf<typeof _nodoVerificaRPTInputEnvelopeBody> {
}
declare const _nodoVerificaRPTInputEnvelope: t.ExactType<t.IntersectionType<[t.InterfaceType<{
    Body: t.Type<nodoVerificaRPTInputEnvelopeBody, nodoVerificaRPTInputEnvelopeBody, t.mixed>;
}, t.TypeOfProps<{
    Body: t.Type<nodoVerificaRPTInputEnvelopeBody, nodoVerificaRPTInputEnvelopeBody, t.mixed>;
}>, t.OutputOfProps<{
    Body: t.Type<nodoVerificaRPTInputEnvelopeBody, nodoVerificaRPTInputEnvelopeBody, t.mixed>;
}>, t.mixed>, t.PartialType<{
    Header: t.Type<nodoVerificaRPTHeader, nodoVerificaRPTHeader, t.mixed>;
}, t.TypeOfPartialProps<{
    Header: t.Type<nodoVerificaRPTHeader, nodoVerificaRPTHeader, t.mixed>;
}>, t.OutputOfPartialProps<{
    Header: t.Type<nodoVerificaRPTHeader, nodoVerificaRPTHeader, t.mixed>;
}>, t.mixed>], t.TypeOfProps<{
    Body: t.Type<nodoVerificaRPTInputEnvelopeBody, nodoVerificaRPTInputEnvelopeBody, t.mixed>;
}> & t.TypeOfPartialProps<{
    Header: t.Type<nodoVerificaRPTHeader, nodoVerificaRPTHeader, t.mixed>;
}>, t.OutputOfProps<{
    Body: t.Type<nodoVerificaRPTInputEnvelopeBody, nodoVerificaRPTInputEnvelopeBody, t.mixed>;
}> & t.OutputOfPartialProps<{
    Header: t.Type<nodoVerificaRPTHeader, nodoVerificaRPTHeader, t.mixed>;
}>, t.mixed>, t.TypeOfProps<{
    Body: t.Type<nodoVerificaRPTInputEnvelopeBody, nodoVerificaRPTInputEnvelopeBody, t.mixed>;
}> & t.TypeOfPartialProps<{
    Header: t.Type<nodoVerificaRPTHeader, nodoVerificaRPTHeader, t.mixed>;
}>, t.OutputOfProps<{
    Body: t.Type<nodoVerificaRPTInputEnvelopeBody, nodoVerificaRPTInputEnvelopeBody, t.mixed>;
}> & t.OutputOfPartialProps<{
    Header: t.Type<nodoVerificaRPTHeader, nodoVerificaRPTHeader, t.mixed>;
}>, t.mixed>;
export declare const nodoVerificaRPTInputEnvelope: t.Type<nodoVerificaRPTInputEnvelope, nodoVerificaRPTInputEnvelope, t.mixed>;
export interface nodoVerificaRPTInputEnvelope extends t.TypeOf<typeof _nodoVerificaRPTInputEnvelope> {
}
declare const _nodoVerificaRPTInput: t.ExactType<t.IntersectionType<[t.InterfaceType<{
    Envelope: t.Type<nodoVerificaRPTInputEnvelope, nodoVerificaRPTInputEnvelope, t.mixed>;
}, t.TypeOfProps<{
    Envelope: t.Type<nodoVerificaRPTInputEnvelope, nodoVerificaRPTInputEnvelope, t.mixed>;
}>, t.OutputOfProps<{
    Envelope: t.Type<nodoVerificaRPTInputEnvelope, nodoVerificaRPTInputEnvelope, t.mixed>;
}>, t.mixed>, t.PartialType<{}, t.TypeOfPartialProps<{}>, t.OutputOfPartialProps<{}>, t.mixed>], t.TypeOfProps<{
    Envelope: t.Type<nodoVerificaRPTInputEnvelope, nodoVerificaRPTInputEnvelope, t.mixed>;
}> & t.TypeOfPartialProps<{}>, t.OutputOfProps<{
    Envelope: t.Type<nodoVerificaRPTInputEnvelope, nodoVerificaRPTInputEnvelope, t.mixed>;
}> & t.OutputOfPartialProps<{}>, t.mixed>, t.TypeOfProps<{
    Envelope: t.Type<nodoVerificaRPTInputEnvelope, nodoVerificaRPTInputEnvelope, t.mixed>;
}> & t.TypeOfPartialProps<{}>, t.OutputOfProps<{
    Envelope: t.Type<nodoVerificaRPTInputEnvelope, nodoVerificaRPTInputEnvelope, t.mixed>;
}> & t.OutputOfPartialProps<{}>, t.mixed>;
export declare const nodoVerificaRPTInput: t.Type<nodoVerificaRPTInput, nodoVerificaRPTInput, t.mixed>;
export interface nodoVerificaRPTInput extends t.TypeOf<typeof _nodoVerificaRPTInput> {
}
export {};
