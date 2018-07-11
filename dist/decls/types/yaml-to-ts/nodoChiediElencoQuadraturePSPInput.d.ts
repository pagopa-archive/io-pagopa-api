import * as t from "io-ts";
import { nodoChiediElencoQuadraturePSPHeader } from "./nodoChiediElencoQuadraturePSPHeader";
import { nodoChiediElencoQuadraturePSP_ppt } from "./nodoChiediElencoQuadraturePSP_ppt";
declare const _nodoChiediElencoQuadraturePSPInputEnvelopeBody: t.ExactType<t.IntersectionType<[t.InterfaceType<{
    nodoChiediElencoQuadraturePSP: t.Type<nodoChiediElencoQuadraturePSP_ppt, nodoChiediElencoQuadraturePSP_ppt, t.mixed>;
}, t.TypeOfProps<{
    nodoChiediElencoQuadraturePSP: t.Type<nodoChiediElencoQuadraturePSP_ppt, nodoChiediElencoQuadraturePSP_ppt, t.mixed>;
}>, t.OutputOfProps<{
    nodoChiediElencoQuadraturePSP: t.Type<nodoChiediElencoQuadraturePSP_ppt, nodoChiediElencoQuadraturePSP_ppt, t.mixed>;
}>, t.mixed>, t.PartialType<{}, t.TypeOfPartialProps<{}>, t.OutputOfPartialProps<{}>, t.mixed>], t.TypeOfProps<{
    nodoChiediElencoQuadraturePSP: t.Type<nodoChiediElencoQuadraturePSP_ppt, nodoChiediElencoQuadraturePSP_ppt, t.mixed>;
}> & t.TypeOfPartialProps<{}>, t.OutputOfProps<{
    nodoChiediElencoQuadraturePSP: t.Type<nodoChiediElencoQuadraturePSP_ppt, nodoChiediElencoQuadraturePSP_ppt, t.mixed>;
}> & t.OutputOfPartialProps<{}>, t.mixed>, t.TypeOfProps<{
    nodoChiediElencoQuadraturePSP: t.Type<nodoChiediElencoQuadraturePSP_ppt, nodoChiediElencoQuadraturePSP_ppt, t.mixed>;
}> & t.TypeOfPartialProps<{}>, t.OutputOfProps<{
    nodoChiediElencoQuadraturePSP: t.Type<nodoChiediElencoQuadraturePSP_ppt, nodoChiediElencoQuadraturePSP_ppt, t.mixed>;
}> & t.OutputOfPartialProps<{}>, t.mixed>;
export declare const nodoChiediElencoQuadraturePSPInputEnvelopeBody: t.Type<nodoChiediElencoQuadraturePSPInputEnvelopeBody, nodoChiediElencoQuadraturePSPInputEnvelopeBody, t.mixed>;
export interface nodoChiediElencoQuadraturePSPInputEnvelopeBody extends t.TypeOf<typeof _nodoChiediElencoQuadraturePSPInputEnvelopeBody> {
}
declare const _nodoChiediElencoQuadraturePSPInputEnvelope: t.ExactType<t.IntersectionType<[t.InterfaceType<{
    Body: t.Type<nodoChiediElencoQuadraturePSPInputEnvelopeBody, nodoChiediElencoQuadraturePSPInputEnvelopeBody, t.mixed>;
}, t.TypeOfProps<{
    Body: t.Type<nodoChiediElencoQuadraturePSPInputEnvelopeBody, nodoChiediElencoQuadraturePSPInputEnvelopeBody, t.mixed>;
}>, t.OutputOfProps<{
    Body: t.Type<nodoChiediElencoQuadraturePSPInputEnvelopeBody, nodoChiediElencoQuadraturePSPInputEnvelopeBody, t.mixed>;
}>, t.mixed>, t.PartialType<{
    Header: t.Type<nodoChiediElencoQuadraturePSPHeader, nodoChiediElencoQuadraturePSPHeader, t.mixed>;
}, t.TypeOfPartialProps<{
    Header: t.Type<nodoChiediElencoQuadraturePSPHeader, nodoChiediElencoQuadraturePSPHeader, t.mixed>;
}>, t.OutputOfPartialProps<{
    Header: t.Type<nodoChiediElencoQuadraturePSPHeader, nodoChiediElencoQuadraturePSPHeader, t.mixed>;
}>, t.mixed>], t.TypeOfProps<{
    Body: t.Type<nodoChiediElencoQuadraturePSPInputEnvelopeBody, nodoChiediElencoQuadraturePSPInputEnvelopeBody, t.mixed>;
}> & t.TypeOfPartialProps<{
    Header: t.Type<nodoChiediElencoQuadraturePSPHeader, nodoChiediElencoQuadraturePSPHeader, t.mixed>;
}>, t.OutputOfProps<{
    Body: t.Type<nodoChiediElencoQuadraturePSPInputEnvelopeBody, nodoChiediElencoQuadraturePSPInputEnvelopeBody, t.mixed>;
}> & t.OutputOfPartialProps<{
    Header: t.Type<nodoChiediElencoQuadraturePSPHeader, nodoChiediElencoQuadraturePSPHeader, t.mixed>;
}>, t.mixed>, t.TypeOfProps<{
    Body: t.Type<nodoChiediElencoQuadraturePSPInputEnvelopeBody, nodoChiediElencoQuadraturePSPInputEnvelopeBody, t.mixed>;
}> & t.TypeOfPartialProps<{
    Header: t.Type<nodoChiediElencoQuadraturePSPHeader, nodoChiediElencoQuadraturePSPHeader, t.mixed>;
}>, t.OutputOfProps<{
    Body: t.Type<nodoChiediElencoQuadraturePSPInputEnvelopeBody, nodoChiediElencoQuadraturePSPInputEnvelopeBody, t.mixed>;
}> & t.OutputOfPartialProps<{
    Header: t.Type<nodoChiediElencoQuadraturePSPHeader, nodoChiediElencoQuadraturePSPHeader, t.mixed>;
}>, t.mixed>;
export declare const nodoChiediElencoQuadraturePSPInputEnvelope: t.Type<nodoChiediElencoQuadraturePSPInputEnvelope, nodoChiediElencoQuadraturePSPInputEnvelope, t.mixed>;
export interface nodoChiediElencoQuadraturePSPInputEnvelope extends t.TypeOf<typeof _nodoChiediElencoQuadraturePSPInputEnvelope> {
}
declare const _nodoChiediElencoQuadraturePSPInput: t.ExactType<t.IntersectionType<[t.InterfaceType<{
    Envelope: t.Type<nodoChiediElencoQuadraturePSPInputEnvelope, nodoChiediElencoQuadraturePSPInputEnvelope, t.mixed>;
}, t.TypeOfProps<{
    Envelope: t.Type<nodoChiediElencoQuadraturePSPInputEnvelope, nodoChiediElencoQuadraturePSPInputEnvelope, t.mixed>;
}>, t.OutputOfProps<{
    Envelope: t.Type<nodoChiediElencoQuadraturePSPInputEnvelope, nodoChiediElencoQuadraturePSPInputEnvelope, t.mixed>;
}>, t.mixed>, t.PartialType<{}, t.TypeOfPartialProps<{}>, t.OutputOfPartialProps<{}>, t.mixed>], t.TypeOfProps<{
    Envelope: t.Type<nodoChiediElencoQuadraturePSPInputEnvelope, nodoChiediElencoQuadraturePSPInputEnvelope, t.mixed>;
}> & t.TypeOfPartialProps<{}>, t.OutputOfProps<{
    Envelope: t.Type<nodoChiediElencoQuadraturePSPInputEnvelope, nodoChiediElencoQuadraturePSPInputEnvelope, t.mixed>;
}> & t.OutputOfPartialProps<{}>, t.mixed>, t.TypeOfProps<{
    Envelope: t.Type<nodoChiediElencoQuadraturePSPInputEnvelope, nodoChiediElencoQuadraturePSPInputEnvelope, t.mixed>;
}> & t.TypeOfPartialProps<{}>, t.OutputOfProps<{
    Envelope: t.Type<nodoChiediElencoQuadraturePSPInputEnvelope, nodoChiediElencoQuadraturePSPInputEnvelope, t.mixed>;
}> & t.OutputOfPartialProps<{}>, t.mixed>;
export declare const nodoChiediElencoQuadraturePSPInput: t.Type<nodoChiediElencoQuadraturePSPInput, nodoChiediElencoQuadraturePSPInput, t.mixed>;
export interface nodoChiediElencoQuadraturePSPInput extends t.TypeOf<typeof _nodoChiediElencoQuadraturePSPInput> {
}
export {};
