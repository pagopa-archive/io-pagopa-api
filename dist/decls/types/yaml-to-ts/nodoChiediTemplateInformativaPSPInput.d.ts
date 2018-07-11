import * as t from "io-ts";
import { nodoChiediTemplateInformativaPSPHeader } from "./nodoChiediTemplateInformativaPSPHeader";
import { nodoChiediTemplateInformativaPSP_ppt } from "./nodoChiediTemplateInformativaPSP_ppt";
declare const _nodoChiediTemplateInformativaPSPInputEnvelopeBody: t.ExactType<t.IntersectionType<[t.InterfaceType<{
    nodoChiediTemplateInformativaPSP: t.Type<nodoChiediTemplateInformativaPSP_ppt, nodoChiediTemplateInformativaPSP_ppt, t.mixed>;
}, t.TypeOfProps<{
    nodoChiediTemplateInformativaPSP: t.Type<nodoChiediTemplateInformativaPSP_ppt, nodoChiediTemplateInformativaPSP_ppt, t.mixed>;
}>, t.OutputOfProps<{
    nodoChiediTemplateInformativaPSP: t.Type<nodoChiediTemplateInformativaPSP_ppt, nodoChiediTemplateInformativaPSP_ppt, t.mixed>;
}>, t.mixed>, t.PartialType<{}, t.TypeOfPartialProps<{}>, t.OutputOfPartialProps<{}>, t.mixed>], t.TypeOfProps<{
    nodoChiediTemplateInformativaPSP: t.Type<nodoChiediTemplateInformativaPSP_ppt, nodoChiediTemplateInformativaPSP_ppt, t.mixed>;
}> & t.TypeOfPartialProps<{}>, t.OutputOfProps<{
    nodoChiediTemplateInformativaPSP: t.Type<nodoChiediTemplateInformativaPSP_ppt, nodoChiediTemplateInformativaPSP_ppt, t.mixed>;
}> & t.OutputOfPartialProps<{}>, t.mixed>, t.TypeOfProps<{
    nodoChiediTemplateInformativaPSP: t.Type<nodoChiediTemplateInformativaPSP_ppt, nodoChiediTemplateInformativaPSP_ppt, t.mixed>;
}> & t.TypeOfPartialProps<{}>, t.OutputOfProps<{
    nodoChiediTemplateInformativaPSP: t.Type<nodoChiediTemplateInformativaPSP_ppt, nodoChiediTemplateInformativaPSP_ppt, t.mixed>;
}> & t.OutputOfPartialProps<{}>, t.mixed>;
export declare const nodoChiediTemplateInformativaPSPInputEnvelopeBody: t.Type<nodoChiediTemplateInformativaPSPInputEnvelopeBody, nodoChiediTemplateInformativaPSPInputEnvelopeBody, t.mixed>;
export interface nodoChiediTemplateInformativaPSPInputEnvelopeBody extends t.TypeOf<typeof _nodoChiediTemplateInformativaPSPInputEnvelopeBody> {
}
declare const _nodoChiediTemplateInformativaPSPInputEnvelope: t.ExactType<t.IntersectionType<[t.InterfaceType<{
    Body: t.Type<nodoChiediTemplateInformativaPSPInputEnvelopeBody, nodoChiediTemplateInformativaPSPInputEnvelopeBody, t.mixed>;
}, t.TypeOfProps<{
    Body: t.Type<nodoChiediTemplateInformativaPSPInputEnvelopeBody, nodoChiediTemplateInformativaPSPInputEnvelopeBody, t.mixed>;
}>, t.OutputOfProps<{
    Body: t.Type<nodoChiediTemplateInformativaPSPInputEnvelopeBody, nodoChiediTemplateInformativaPSPInputEnvelopeBody, t.mixed>;
}>, t.mixed>, t.PartialType<{
    Header: t.Type<nodoChiediTemplateInformativaPSPHeader, nodoChiediTemplateInformativaPSPHeader, t.mixed>;
}, t.TypeOfPartialProps<{
    Header: t.Type<nodoChiediTemplateInformativaPSPHeader, nodoChiediTemplateInformativaPSPHeader, t.mixed>;
}>, t.OutputOfPartialProps<{
    Header: t.Type<nodoChiediTemplateInformativaPSPHeader, nodoChiediTemplateInformativaPSPHeader, t.mixed>;
}>, t.mixed>], t.TypeOfProps<{
    Body: t.Type<nodoChiediTemplateInformativaPSPInputEnvelopeBody, nodoChiediTemplateInformativaPSPInputEnvelopeBody, t.mixed>;
}> & t.TypeOfPartialProps<{
    Header: t.Type<nodoChiediTemplateInformativaPSPHeader, nodoChiediTemplateInformativaPSPHeader, t.mixed>;
}>, t.OutputOfProps<{
    Body: t.Type<nodoChiediTemplateInformativaPSPInputEnvelopeBody, nodoChiediTemplateInformativaPSPInputEnvelopeBody, t.mixed>;
}> & t.OutputOfPartialProps<{
    Header: t.Type<nodoChiediTemplateInformativaPSPHeader, nodoChiediTemplateInformativaPSPHeader, t.mixed>;
}>, t.mixed>, t.TypeOfProps<{
    Body: t.Type<nodoChiediTemplateInformativaPSPInputEnvelopeBody, nodoChiediTemplateInformativaPSPInputEnvelopeBody, t.mixed>;
}> & t.TypeOfPartialProps<{
    Header: t.Type<nodoChiediTemplateInformativaPSPHeader, nodoChiediTemplateInformativaPSPHeader, t.mixed>;
}>, t.OutputOfProps<{
    Body: t.Type<nodoChiediTemplateInformativaPSPInputEnvelopeBody, nodoChiediTemplateInformativaPSPInputEnvelopeBody, t.mixed>;
}> & t.OutputOfPartialProps<{
    Header: t.Type<nodoChiediTemplateInformativaPSPHeader, nodoChiediTemplateInformativaPSPHeader, t.mixed>;
}>, t.mixed>;
export declare const nodoChiediTemplateInformativaPSPInputEnvelope: t.Type<nodoChiediTemplateInformativaPSPInputEnvelope, nodoChiediTemplateInformativaPSPInputEnvelope, t.mixed>;
export interface nodoChiediTemplateInformativaPSPInputEnvelope extends t.TypeOf<typeof _nodoChiediTemplateInformativaPSPInputEnvelope> {
}
declare const _nodoChiediTemplateInformativaPSPInput: t.ExactType<t.IntersectionType<[t.InterfaceType<{
    Envelope: t.Type<nodoChiediTemplateInformativaPSPInputEnvelope, nodoChiediTemplateInformativaPSPInputEnvelope, t.mixed>;
}, t.TypeOfProps<{
    Envelope: t.Type<nodoChiediTemplateInformativaPSPInputEnvelope, nodoChiediTemplateInformativaPSPInputEnvelope, t.mixed>;
}>, t.OutputOfProps<{
    Envelope: t.Type<nodoChiediTemplateInformativaPSPInputEnvelope, nodoChiediTemplateInformativaPSPInputEnvelope, t.mixed>;
}>, t.mixed>, t.PartialType<{}, t.TypeOfPartialProps<{}>, t.OutputOfPartialProps<{}>, t.mixed>], t.TypeOfProps<{
    Envelope: t.Type<nodoChiediTemplateInformativaPSPInputEnvelope, nodoChiediTemplateInformativaPSPInputEnvelope, t.mixed>;
}> & t.TypeOfPartialProps<{}>, t.OutputOfProps<{
    Envelope: t.Type<nodoChiediTemplateInformativaPSPInputEnvelope, nodoChiediTemplateInformativaPSPInputEnvelope, t.mixed>;
}> & t.OutputOfPartialProps<{}>, t.mixed>, t.TypeOfProps<{
    Envelope: t.Type<nodoChiediTemplateInformativaPSPInputEnvelope, nodoChiediTemplateInformativaPSPInputEnvelope, t.mixed>;
}> & t.TypeOfPartialProps<{}>, t.OutputOfProps<{
    Envelope: t.Type<nodoChiediTemplateInformativaPSPInputEnvelope, nodoChiediTemplateInformativaPSPInputEnvelope, t.mixed>;
}> & t.OutputOfPartialProps<{}>, t.mixed>;
export declare const nodoChiediTemplateInformativaPSPInput: t.Type<nodoChiediTemplateInformativaPSPInput, nodoChiediTemplateInformativaPSPInput, t.mixed>;
export interface nodoChiediTemplateInformativaPSPInput extends t.TypeOf<typeof _nodoChiediTemplateInformativaPSPInput> {
}
export {};
