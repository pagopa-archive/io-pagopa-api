import * as t from "io-ts";
import { nodoInviaEsitoStornoHeader } from "./nodoInviaEsitoStornoHeader";
import { nodoInviaEsitoStorno_ppt } from "./nodoInviaEsitoStorno_ppt";
declare const _nodoInviaEsitoStornoInputEnvelopeBody: t.ExactType<t.IntersectionType<[t.InterfaceType<{
    nodoInviaEsitoStorno: t.Type<nodoInviaEsitoStorno_ppt, nodoInviaEsitoStorno_ppt, t.mixed>;
}, t.TypeOfProps<{
    nodoInviaEsitoStorno: t.Type<nodoInviaEsitoStorno_ppt, nodoInviaEsitoStorno_ppt, t.mixed>;
}>, t.OutputOfProps<{
    nodoInviaEsitoStorno: t.Type<nodoInviaEsitoStorno_ppt, nodoInviaEsitoStorno_ppt, t.mixed>;
}>, t.mixed>, t.PartialType<{}, t.TypeOfPartialProps<{}>, t.OutputOfPartialProps<{}>, t.mixed>], t.TypeOfProps<{
    nodoInviaEsitoStorno: t.Type<nodoInviaEsitoStorno_ppt, nodoInviaEsitoStorno_ppt, t.mixed>;
}> & t.TypeOfPartialProps<{}>, t.OutputOfProps<{
    nodoInviaEsitoStorno: t.Type<nodoInviaEsitoStorno_ppt, nodoInviaEsitoStorno_ppt, t.mixed>;
}> & t.OutputOfPartialProps<{}>, t.mixed>, t.TypeOfProps<{
    nodoInviaEsitoStorno: t.Type<nodoInviaEsitoStorno_ppt, nodoInviaEsitoStorno_ppt, t.mixed>;
}> & t.TypeOfPartialProps<{}>, t.OutputOfProps<{
    nodoInviaEsitoStorno: t.Type<nodoInviaEsitoStorno_ppt, nodoInviaEsitoStorno_ppt, t.mixed>;
}> & t.OutputOfPartialProps<{}>, t.mixed>;
export declare const nodoInviaEsitoStornoInputEnvelopeBody: t.Type<nodoInviaEsitoStornoInputEnvelopeBody, nodoInviaEsitoStornoInputEnvelopeBody, t.mixed>;
export interface nodoInviaEsitoStornoInputEnvelopeBody extends t.TypeOf<typeof _nodoInviaEsitoStornoInputEnvelopeBody> {
}
declare const _nodoInviaEsitoStornoInputEnvelope: t.ExactType<t.IntersectionType<[t.InterfaceType<{
    Body: t.Type<nodoInviaEsitoStornoInputEnvelopeBody, nodoInviaEsitoStornoInputEnvelopeBody, t.mixed>;
}, t.TypeOfProps<{
    Body: t.Type<nodoInviaEsitoStornoInputEnvelopeBody, nodoInviaEsitoStornoInputEnvelopeBody, t.mixed>;
}>, t.OutputOfProps<{
    Body: t.Type<nodoInviaEsitoStornoInputEnvelopeBody, nodoInviaEsitoStornoInputEnvelopeBody, t.mixed>;
}>, t.mixed>, t.PartialType<{
    Header: t.Type<nodoInviaEsitoStornoHeader, nodoInviaEsitoStornoHeader, t.mixed>;
}, t.TypeOfPartialProps<{
    Header: t.Type<nodoInviaEsitoStornoHeader, nodoInviaEsitoStornoHeader, t.mixed>;
}>, t.OutputOfPartialProps<{
    Header: t.Type<nodoInviaEsitoStornoHeader, nodoInviaEsitoStornoHeader, t.mixed>;
}>, t.mixed>], t.TypeOfProps<{
    Body: t.Type<nodoInviaEsitoStornoInputEnvelopeBody, nodoInviaEsitoStornoInputEnvelopeBody, t.mixed>;
}> & t.TypeOfPartialProps<{
    Header: t.Type<nodoInviaEsitoStornoHeader, nodoInviaEsitoStornoHeader, t.mixed>;
}>, t.OutputOfProps<{
    Body: t.Type<nodoInviaEsitoStornoInputEnvelopeBody, nodoInviaEsitoStornoInputEnvelopeBody, t.mixed>;
}> & t.OutputOfPartialProps<{
    Header: t.Type<nodoInviaEsitoStornoHeader, nodoInviaEsitoStornoHeader, t.mixed>;
}>, t.mixed>, t.TypeOfProps<{
    Body: t.Type<nodoInviaEsitoStornoInputEnvelopeBody, nodoInviaEsitoStornoInputEnvelopeBody, t.mixed>;
}> & t.TypeOfPartialProps<{
    Header: t.Type<nodoInviaEsitoStornoHeader, nodoInviaEsitoStornoHeader, t.mixed>;
}>, t.OutputOfProps<{
    Body: t.Type<nodoInviaEsitoStornoInputEnvelopeBody, nodoInviaEsitoStornoInputEnvelopeBody, t.mixed>;
}> & t.OutputOfPartialProps<{
    Header: t.Type<nodoInviaEsitoStornoHeader, nodoInviaEsitoStornoHeader, t.mixed>;
}>, t.mixed>;
export declare const nodoInviaEsitoStornoInputEnvelope: t.Type<nodoInviaEsitoStornoInputEnvelope, nodoInviaEsitoStornoInputEnvelope, t.mixed>;
export interface nodoInviaEsitoStornoInputEnvelope extends t.TypeOf<typeof _nodoInviaEsitoStornoInputEnvelope> {
}
declare const _nodoInviaEsitoStornoInput: t.ExactType<t.IntersectionType<[t.InterfaceType<{
    Envelope: t.Type<nodoInviaEsitoStornoInputEnvelope, nodoInviaEsitoStornoInputEnvelope, t.mixed>;
}, t.TypeOfProps<{
    Envelope: t.Type<nodoInviaEsitoStornoInputEnvelope, nodoInviaEsitoStornoInputEnvelope, t.mixed>;
}>, t.OutputOfProps<{
    Envelope: t.Type<nodoInviaEsitoStornoInputEnvelope, nodoInviaEsitoStornoInputEnvelope, t.mixed>;
}>, t.mixed>, t.PartialType<{}, t.TypeOfPartialProps<{}>, t.OutputOfPartialProps<{}>, t.mixed>], t.TypeOfProps<{
    Envelope: t.Type<nodoInviaEsitoStornoInputEnvelope, nodoInviaEsitoStornoInputEnvelope, t.mixed>;
}> & t.TypeOfPartialProps<{}>, t.OutputOfProps<{
    Envelope: t.Type<nodoInviaEsitoStornoInputEnvelope, nodoInviaEsitoStornoInputEnvelope, t.mixed>;
}> & t.OutputOfPartialProps<{}>, t.mixed>, t.TypeOfProps<{
    Envelope: t.Type<nodoInviaEsitoStornoInputEnvelope, nodoInviaEsitoStornoInputEnvelope, t.mixed>;
}> & t.TypeOfPartialProps<{}>, t.OutputOfProps<{
    Envelope: t.Type<nodoInviaEsitoStornoInputEnvelope, nodoInviaEsitoStornoInputEnvelope, t.mixed>;
}> & t.OutputOfPartialProps<{}>, t.mixed>;
export declare const nodoInviaEsitoStornoInput: t.Type<nodoInviaEsitoStornoInput, nodoInviaEsitoStornoInput, t.mixed>;
export interface nodoInviaEsitoStornoInput extends t.TypeOf<typeof _nodoInviaEsitoStornoInput> {
}
export {};
