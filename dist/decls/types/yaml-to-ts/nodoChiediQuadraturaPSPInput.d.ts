import * as t from "io-ts";
import { nodoChiediQuadraturaPSPHeader } from "./nodoChiediQuadraturaPSPHeader";
import { nodoChiediQuadraturaPSP_ppt } from "./nodoChiediQuadraturaPSP_ppt";
declare const _nodoChiediQuadraturaPSPInputEnvelopeBody: t.ExactType<t.IntersectionType<[t.InterfaceType<{
    nodoChiediQuadraturaPSP: t.Type<nodoChiediQuadraturaPSP_ppt, nodoChiediQuadraturaPSP_ppt, t.mixed>;
}, t.TypeOfProps<{
    nodoChiediQuadraturaPSP: t.Type<nodoChiediQuadraturaPSP_ppt, nodoChiediQuadraturaPSP_ppt, t.mixed>;
}>, t.OutputOfProps<{
    nodoChiediQuadraturaPSP: t.Type<nodoChiediQuadraturaPSP_ppt, nodoChiediQuadraturaPSP_ppt, t.mixed>;
}>, t.mixed>, t.PartialType<{}, t.TypeOfPartialProps<{}>, t.OutputOfPartialProps<{}>, t.mixed>], t.TypeOfProps<{
    nodoChiediQuadraturaPSP: t.Type<nodoChiediQuadraturaPSP_ppt, nodoChiediQuadraturaPSP_ppt, t.mixed>;
}> & t.TypeOfPartialProps<{}>, t.OutputOfProps<{
    nodoChiediQuadraturaPSP: t.Type<nodoChiediQuadraturaPSP_ppt, nodoChiediQuadraturaPSP_ppt, t.mixed>;
}> & t.OutputOfPartialProps<{}>, t.mixed>, t.TypeOfProps<{
    nodoChiediQuadraturaPSP: t.Type<nodoChiediQuadraturaPSP_ppt, nodoChiediQuadraturaPSP_ppt, t.mixed>;
}> & t.TypeOfPartialProps<{}>, t.OutputOfProps<{
    nodoChiediQuadraturaPSP: t.Type<nodoChiediQuadraturaPSP_ppt, nodoChiediQuadraturaPSP_ppt, t.mixed>;
}> & t.OutputOfPartialProps<{}>, t.mixed>;
export declare const nodoChiediQuadraturaPSPInputEnvelopeBody: t.Type<nodoChiediQuadraturaPSPInputEnvelopeBody, nodoChiediQuadraturaPSPInputEnvelopeBody, t.mixed>;
export interface nodoChiediQuadraturaPSPInputEnvelopeBody extends t.TypeOf<typeof _nodoChiediQuadraturaPSPInputEnvelopeBody> {
}
declare const _nodoChiediQuadraturaPSPInputEnvelope: t.ExactType<t.IntersectionType<[t.InterfaceType<{
    Body: t.Type<nodoChiediQuadraturaPSPInputEnvelopeBody, nodoChiediQuadraturaPSPInputEnvelopeBody, t.mixed>;
}, t.TypeOfProps<{
    Body: t.Type<nodoChiediQuadraturaPSPInputEnvelopeBody, nodoChiediQuadraturaPSPInputEnvelopeBody, t.mixed>;
}>, t.OutputOfProps<{
    Body: t.Type<nodoChiediQuadraturaPSPInputEnvelopeBody, nodoChiediQuadraturaPSPInputEnvelopeBody, t.mixed>;
}>, t.mixed>, t.PartialType<{
    Header: t.Type<nodoChiediQuadraturaPSPHeader, nodoChiediQuadraturaPSPHeader, t.mixed>;
}, t.TypeOfPartialProps<{
    Header: t.Type<nodoChiediQuadraturaPSPHeader, nodoChiediQuadraturaPSPHeader, t.mixed>;
}>, t.OutputOfPartialProps<{
    Header: t.Type<nodoChiediQuadraturaPSPHeader, nodoChiediQuadraturaPSPHeader, t.mixed>;
}>, t.mixed>], t.TypeOfProps<{
    Body: t.Type<nodoChiediQuadraturaPSPInputEnvelopeBody, nodoChiediQuadraturaPSPInputEnvelopeBody, t.mixed>;
}> & t.TypeOfPartialProps<{
    Header: t.Type<nodoChiediQuadraturaPSPHeader, nodoChiediQuadraturaPSPHeader, t.mixed>;
}>, t.OutputOfProps<{
    Body: t.Type<nodoChiediQuadraturaPSPInputEnvelopeBody, nodoChiediQuadraturaPSPInputEnvelopeBody, t.mixed>;
}> & t.OutputOfPartialProps<{
    Header: t.Type<nodoChiediQuadraturaPSPHeader, nodoChiediQuadraturaPSPHeader, t.mixed>;
}>, t.mixed>, t.TypeOfProps<{
    Body: t.Type<nodoChiediQuadraturaPSPInputEnvelopeBody, nodoChiediQuadraturaPSPInputEnvelopeBody, t.mixed>;
}> & t.TypeOfPartialProps<{
    Header: t.Type<nodoChiediQuadraturaPSPHeader, nodoChiediQuadraturaPSPHeader, t.mixed>;
}>, t.OutputOfProps<{
    Body: t.Type<nodoChiediQuadraturaPSPInputEnvelopeBody, nodoChiediQuadraturaPSPInputEnvelopeBody, t.mixed>;
}> & t.OutputOfPartialProps<{
    Header: t.Type<nodoChiediQuadraturaPSPHeader, nodoChiediQuadraturaPSPHeader, t.mixed>;
}>, t.mixed>;
export declare const nodoChiediQuadraturaPSPInputEnvelope: t.Type<nodoChiediQuadraturaPSPInputEnvelope, nodoChiediQuadraturaPSPInputEnvelope, t.mixed>;
export interface nodoChiediQuadraturaPSPInputEnvelope extends t.TypeOf<typeof _nodoChiediQuadraturaPSPInputEnvelope> {
}
declare const _nodoChiediQuadraturaPSPInput: t.ExactType<t.IntersectionType<[t.InterfaceType<{
    Envelope: t.Type<nodoChiediQuadraturaPSPInputEnvelope, nodoChiediQuadraturaPSPInputEnvelope, t.mixed>;
}, t.TypeOfProps<{
    Envelope: t.Type<nodoChiediQuadraturaPSPInputEnvelope, nodoChiediQuadraturaPSPInputEnvelope, t.mixed>;
}>, t.OutputOfProps<{
    Envelope: t.Type<nodoChiediQuadraturaPSPInputEnvelope, nodoChiediQuadraturaPSPInputEnvelope, t.mixed>;
}>, t.mixed>, t.PartialType<{}, t.TypeOfPartialProps<{}>, t.OutputOfPartialProps<{}>, t.mixed>], t.TypeOfProps<{
    Envelope: t.Type<nodoChiediQuadraturaPSPInputEnvelope, nodoChiediQuadraturaPSPInputEnvelope, t.mixed>;
}> & t.TypeOfPartialProps<{}>, t.OutputOfProps<{
    Envelope: t.Type<nodoChiediQuadraturaPSPInputEnvelope, nodoChiediQuadraturaPSPInputEnvelope, t.mixed>;
}> & t.OutputOfPartialProps<{}>, t.mixed>, t.TypeOfProps<{
    Envelope: t.Type<nodoChiediQuadraturaPSPInputEnvelope, nodoChiediQuadraturaPSPInputEnvelope, t.mixed>;
}> & t.TypeOfPartialProps<{}>, t.OutputOfProps<{
    Envelope: t.Type<nodoChiediQuadraturaPSPInputEnvelope, nodoChiediQuadraturaPSPInputEnvelope, t.mixed>;
}> & t.OutputOfPartialProps<{}>, t.mixed>;
export declare const nodoChiediQuadraturaPSPInput: t.Type<nodoChiediQuadraturaPSPInput, nodoChiediQuadraturaPSPInput, t.mixed>;
export interface nodoChiediQuadraturaPSPInput extends t.TypeOf<typeof _nodoChiediQuadraturaPSPInput> {
}
export {};
