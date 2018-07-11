import * as t from "io-ts";
import { nodoInviaRTHeader } from "./nodoInviaRTHeader";
import { nodoInviaRT_ppt } from "./nodoInviaRT_ppt";
declare const _nodoInviaRTInputEnvelopeBody: t.ExactType<t.IntersectionType<[t.InterfaceType<{
    nodoInviaRT: t.Type<nodoInviaRT_ppt, nodoInviaRT_ppt, t.mixed>;
}, t.TypeOfProps<{
    nodoInviaRT: t.Type<nodoInviaRT_ppt, nodoInviaRT_ppt, t.mixed>;
}>, t.OutputOfProps<{
    nodoInviaRT: t.Type<nodoInviaRT_ppt, nodoInviaRT_ppt, t.mixed>;
}>, t.mixed>, t.PartialType<{}, t.TypeOfPartialProps<{}>, t.OutputOfPartialProps<{}>, t.mixed>], t.TypeOfProps<{
    nodoInviaRT: t.Type<nodoInviaRT_ppt, nodoInviaRT_ppt, t.mixed>;
}> & t.TypeOfPartialProps<{}>, t.OutputOfProps<{
    nodoInviaRT: t.Type<nodoInviaRT_ppt, nodoInviaRT_ppt, t.mixed>;
}> & t.OutputOfPartialProps<{}>, t.mixed>, t.TypeOfProps<{
    nodoInviaRT: t.Type<nodoInviaRT_ppt, nodoInviaRT_ppt, t.mixed>;
}> & t.TypeOfPartialProps<{}>, t.OutputOfProps<{
    nodoInviaRT: t.Type<nodoInviaRT_ppt, nodoInviaRT_ppt, t.mixed>;
}> & t.OutputOfPartialProps<{}>, t.mixed>;
export declare const nodoInviaRTInputEnvelopeBody: t.Type<nodoInviaRTInputEnvelopeBody, nodoInviaRTInputEnvelopeBody, t.mixed>;
export interface nodoInviaRTInputEnvelopeBody extends t.TypeOf<typeof _nodoInviaRTInputEnvelopeBody> {
}
declare const _nodoInviaRTInputEnvelope: t.ExactType<t.IntersectionType<[t.InterfaceType<{
    Body: t.Type<nodoInviaRTInputEnvelopeBody, nodoInviaRTInputEnvelopeBody, t.mixed>;
}, t.TypeOfProps<{
    Body: t.Type<nodoInviaRTInputEnvelopeBody, nodoInviaRTInputEnvelopeBody, t.mixed>;
}>, t.OutputOfProps<{
    Body: t.Type<nodoInviaRTInputEnvelopeBody, nodoInviaRTInputEnvelopeBody, t.mixed>;
}>, t.mixed>, t.PartialType<{
    Header: t.Type<nodoInviaRTHeader, nodoInviaRTHeader, t.mixed>;
}, t.TypeOfPartialProps<{
    Header: t.Type<nodoInviaRTHeader, nodoInviaRTHeader, t.mixed>;
}>, t.OutputOfPartialProps<{
    Header: t.Type<nodoInviaRTHeader, nodoInviaRTHeader, t.mixed>;
}>, t.mixed>], t.TypeOfProps<{
    Body: t.Type<nodoInviaRTInputEnvelopeBody, nodoInviaRTInputEnvelopeBody, t.mixed>;
}> & t.TypeOfPartialProps<{
    Header: t.Type<nodoInviaRTHeader, nodoInviaRTHeader, t.mixed>;
}>, t.OutputOfProps<{
    Body: t.Type<nodoInviaRTInputEnvelopeBody, nodoInviaRTInputEnvelopeBody, t.mixed>;
}> & t.OutputOfPartialProps<{
    Header: t.Type<nodoInviaRTHeader, nodoInviaRTHeader, t.mixed>;
}>, t.mixed>, t.TypeOfProps<{
    Body: t.Type<nodoInviaRTInputEnvelopeBody, nodoInviaRTInputEnvelopeBody, t.mixed>;
}> & t.TypeOfPartialProps<{
    Header: t.Type<nodoInviaRTHeader, nodoInviaRTHeader, t.mixed>;
}>, t.OutputOfProps<{
    Body: t.Type<nodoInviaRTInputEnvelopeBody, nodoInviaRTInputEnvelopeBody, t.mixed>;
}> & t.OutputOfPartialProps<{
    Header: t.Type<nodoInviaRTHeader, nodoInviaRTHeader, t.mixed>;
}>, t.mixed>;
export declare const nodoInviaRTInputEnvelope: t.Type<nodoInviaRTInputEnvelope, nodoInviaRTInputEnvelope, t.mixed>;
export interface nodoInviaRTInputEnvelope extends t.TypeOf<typeof _nodoInviaRTInputEnvelope> {
}
declare const _nodoInviaRTInput: t.ExactType<t.IntersectionType<[t.InterfaceType<{
    Envelope: t.Type<nodoInviaRTInputEnvelope, nodoInviaRTInputEnvelope, t.mixed>;
}, t.TypeOfProps<{
    Envelope: t.Type<nodoInviaRTInputEnvelope, nodoInviaRTInputEnvelope, t.mixed>;
}>, t.OutputOfProps<{
    Envelope: t.Type<nodoInviaRTInputEnvelope, nodoInviaRTInputEnvelope, t.mixed>;
}>, t.mixed>, t.PartialType<{}, t.TypeOfPartialProps<{}>, t.OutputOfPartialProps<{}>, t.mixed>], t.TypeOfProps<{
    Envelope: t.Type<nodoInviaRTInputEnvelope, nodoInviaRTInputEnvelope, t.mixed>;
}> & t.TypeOfPartialProps<{}>, t.OutputOfProps<{
    Envelope: t.Type<nodoInviaRTInputEnvelope, nodoInviaRTInputEnvelope, t.mixed>;
}> & t.OutputOfPartialProps<{}>, t.mixed>, t.TypeOfProps<{
    Envelope: t.Type<nodoInviaRTInputEnvelope, nodoInviaRTInputEnvelope, t.mixed>;
}> & t.TypeOfPartialProps<{}>, t.OutputOfProps<{
    Envelope: t.Type<nodoInviaRTInputEnvelope, nodoInviaRTInputEnvelope, t.mixed>;
}> & t.OutputOfPartialProps<{}>, t.mixed>;
export declare const nodoInviaRTInput: t.Type<nodoInviaRTInput, nodoInviaRTInput, t.mixed>;
export interface nodoInviaRTInput extends t.TypeOf<typeof _nodoInviaRTInput> {
}
export {};
