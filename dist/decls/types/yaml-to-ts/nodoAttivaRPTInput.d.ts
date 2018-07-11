import * as t from "io-ts";
import { nodoAttivaRPTHeader } from "./nodoAttivaRPTHeader";
import { nodoAttivaRPT_ppt } from "./nodoAttivaRPT_ppt";
declare const _nodoAttivaRPTInputEnvelopeBody: t.ExactType<t.IntersectionType<[t.InterfaceType<{
    nodoAttivaRPT: t.Type<nodoAttivaRPT_ppt, nodoAttivaRPT_ppt, t.mixed>;
}, t.TypeOfProps<{
    nodoAttivaRPT: t.Type<nodoAttivaRPT_ppt, nodoAttivaRPT_ppt, t.mixed>;
}>, t.OutputOfProps<{
    nodoAttivaRPT: t.Type<nodoAttivaRPT_ppt, nodoAttivaRPT_ppt, t.mixed>;
}>, t.mixed>, t.PartialType<{}, t.TypeOfPartialProps<{}>, t.OutputOfPartialProps<{}>, t.mixed>], t.TypeOfProps<{
    nodoAttivaRPT: t.Type<nodoAttivaRPT_ppt, nodoAttivaRPT_ppt, t.mixed>;
}> & t.TypeOfPartialProps<{}>, t.OutputOfProps<{
    nodoAttivaRPT: t.Type<nodoAttivaRPT_ppt, nodoAttivaRPT_ppt, t.mixed>;
}> & t.OutputOfPartialProps<{}>, t.mixed>, t.TypeOfProps<{
    nodoAttivaRPT: t.Type<nodoAttivaRPT_ppt, nodoAttivaRPT_ppt, t.mixed>;
}> & t.TypeOfPartialProps<{}>, t.OutputOfProps<{
    nodoAttivaRPT: t.Type<nodoAttivaRPT_ppt, nodoAttivaRPT_ppt, t.mixed>;
}> & t.OutputOfPartialProps<{}>, t.mixed>;
export declare const nodoAttivaRPTInputEnvelopeBody: t.Type<nodoAttivaRPTInputEnvelopeBody, nodoAttivaRPTInputEnvelopeBody, t.mixed>;
export interface nodoAttivaRPTInputEnvelopeBody extends t.TypeOf<typeof _nodoAttivaRPTInputEnvelopeBody> {
}
declare const _nodoAttivaRPTInputEnvelope: t.ExactType<t.IntersectionType<[t.InterfaceType<{
    Body: t.Type<nodoAttivaRPTInputEnvelopeBody, nodoAttivaRPTInputEnvelopeBody, t.mixed>;
}, t.TypeOfProps<{
    Body: t.Type<nodoAttivaRPTInputEnvelopeBody, nodoAttivaRPTInputEnvelopeBody, t.mixed>;
}>, t.OutputOfProps<{
    Body: t.Type<nodoAttivaRPTInputEnvelopeBody, nodoAttivaRPTInputEnvelopeBody, t.mixed>;
}>, t.mixed>, t.PartialType<{
    Header: t.Type<nodoAttivaRPTHeader, nodoAttivaRPTHeader, t.mixed>;
}, t.TypeOfPartialProps<{
    Header: t.Type<nodoAttivaRPTHeader, nodoAttivaRPTHeader, t.mixed>;
}>, t.OutputOfPartialProps<{
    Header: t.Type<nodoAttivaRPTHeader, nodoAttivaRPTHeader, t.mixed>;
}>, t.mixed>], t.TypeOfProps<{
    Body: t.Type<nodoAttivaRPTInputEnvelopeBody, nodoAttivaRPTInputEnvelopeBody, t.mixed>;
}> & t.TypeOfPartialProps<{
    Header: t.Type<nodoAttivaRPTHeader, nodoAttivaRPTHeader, t.mixed>;
}>, t.OutputOfProps<{
    Body: t.Type<nodoAttivaRPTInputEnvelopeBody, nodoAttivaRPTInputEnvelopeBody, t.mixed>;
}> & t.OutputOfPartialProps<{
    Header: t.Type<nodoAttivaRPTHeader, nodoAttivaRPTHeader, t.mixed>;
}>, t.mixed>, t.TypeOfProps<{
    Body: t.Type<nodoAttivaRPTInputEnvelopeBody, nodoAttivaRPTInputEnvelopeBody, t.mixed>;
}> & t.TypeOfPartialProps<{
    Header: t.Type<nodoAttivaRPTHeader, nodoAttivaRPTHeader, t.mixed>;
}>, t.OutputOfProps<{
    Body: t.Type<nodoAttivaRPTInputEnvelopeBody, nodoAttivaRPTInputEnvelopeBody, t.mixed>;
}> & t.OutputOfPartialProps<{
    Header: t.Type<nodoAttivaRPTHeader, nodoAttivaRPTHeader, t.mixed>;
}>, t.mixed>;
export declare const nodoAttivaRPTInputEnvelope: t.Type<nodoAttivaRPTInputEnvelope, nodoAttivaRPTInputEnvelope, t.mixed>;
export interface nodoAttivaRPTInputEnvelope extends t.TypeOf<typeof _nodoAttivaRPTInputEnvelope> {
}
declare const _nodoAttivaRPTInput: t.ExactType<t.IntersectionType<[t.InterfaceType<{
    Envelope: t.Type<nodoAttivaRPTInputEnvelope, nodoAttivaRPTInputEnvelope, t.mixed>;
}, t.TypeOfProps<{
    Envelope: t.Type<nodoAttivaRPTInputEnvelope, nodoAttivaRPTInputEnvelope, t.mixed>;
}>, t.OutputOfProps<{
    Envelope: t.Type<nodoAttivaRPTInputEnvelope, nodoAttivaRPTInputEnvelope, t.mixed>;
}>, t.mixed>, t.PartialType<{}, t.TypeOfPartialProps<{}>, t.OutputOfPartialProps<{}>, t.mixed>], t.TypeOfProps<{
    Envelope: t.Type<nodoAttivaRPTInputEnvelope, nodoAttivaRPTInputEnvelope, t.mixed>;
}> & t.TypeOfPartialProps<{}>, t.OutputOfProps<{
    Envelope: t.Type<nodoAttivaRPTInputEnvelope, nodoAttivaRPTInputEnvelope, t.mixed>;
}> & t.OutputOfPartialProps<{}>, t.mixed>, t.TypeOfProps<{
    Envelope: t.Type<nodoAttivaRPTInputEnvelope, nodoAttivaRPTInputEnvelope, t.mixed>;
}> & t.TypeOfPartialProps<{}>, t.OutputOfProps<{
    Envelope: t.Type<nodoAttivaRPTInputEnvelope, nodoAttivaRPTInputEnvelope, t.mixed>;
}> & t.OutputOfPartialProps<{}>, t.mixed>;
export declare const nodoAttivaRPTInput: t.Type<nodoAttivaRPTInput, nodoAttivaRPTInput, t.mixed>;
export interface nodoAttivaRPTInput extends t.TypeOf<typeof _nodoAttivaRPTInput> {
}
export {};
