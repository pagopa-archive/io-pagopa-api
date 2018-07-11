import * as t from "io-ts";
import { nodoInviaRichiestaRevocaHeader } from "./nodoInviaRichiestaRevocaHeader";
import { nodoInviaRichiestaRevoca_ppt } from "./nodoInviaRichiestaRevoca_ppt";
declare const _nodoInviaRichiestaRevocaInputEnvelopeBody: t.ExactType<t.IntersectionType<[t.InterfaceType<{
    nodoInviaRichiestaRevoca: t.Type<nodoInviaRichiestaRevoca_ppt, nodoInviaRichiestaRevoca_ppt, t.mixed>;
}, t.TypeOfProps<{
    nodoInviaRichiestaRevoca: t.Type<nodoInviaRichiestaRevoca_ppt, nodoInviaRichiestaRevoca_ppt, t.mixed>;
}>, t.OutputOfProps<{
    nodoInviaRichiestaRevoca: t.Type<nodoInviaRichiestaRevoca_ppt, nodoInviaRichiestaRevoca_ppt, t.mixed>;
}>, t.mixed>, t.PartialType<{}, t.TypeOfPartialProps<{}>, t.OutputOfPartialProps<{}>, t.mixed>], t.TypeOfProps<{
    nodoInviaRichiestaRevoca: t.Type<nodoInviaRichiestaRevoca_ppt, nodoInviaRichiestaRevoca_ppt, t.mixed>;
}> & t.TypeOfPartialProps<{}>, t.OutputOfProps<{
    nodoInviaRichiestaRevoca: t.Type<nodoInviaRichiestaRevoca_ppt, nodoInviaRichiestaRevoca_ppt, t.mixed>;
}> & t.OutputOfPartialProps<{}>, t.mixed>, t.TypeOfProps<{
    nodoInviaRichiestaRevoca: t.Type<nodoInviaRichiestaRevoca_ppt, nodoInviaRichiestaRevoca_ppt, t.mixed>;
}> & t.TypeOfPartialProps<{}>, t.OutputOfProps<{
    nodoInviaRichiestaRevoca: t.Type<nodoInviaRichiestaRevoca_ppt, nodoInviaRichiestaRevoca_ppt, t.mixed>;
}> & t.OutputOfPartialProps<{}>, t.mixed>;
export declare const nodoInviaRichiestaRevocaInputEnvelopeBody: t.Type<nodoInviaRichiestaRevocaInputEnvelopeBody, nodoInviaRichiestaRevocaInputEnvelopeBody, t.mixed>;
export interface nodoInviaRichiestaRevocaInputEnvelopeBody extends t.TypeOf<typeof _nodoInviaRichiestaRevocaInputEnvelopeBody> {
}
declare const _nodoInviaRichiestaRevocaInputEnvelope: t.ExactType<t.IntersectionType<[t.InterfaceType<{
    Body: t.Type<nodoInviaRichiestaRevocaInputEnvelopeBody, nodoInviaRichiestaRevocaInputEnvelopeBody, t.mixed>;
}, t.TypeOfProps<{
    Body: t.Type<nodoInviaRichiestaRevocaInputEnvelopeBody, nodoInviaRichiestaRevocaInputEnvelopeBody, t.mixed>;
}>, t.OutputOfProps<{
    Body: t.Type<nodoInviaRichiestaRevocaInputEnvelopeBody, nodoInviaRichiestaRevocaInputEnvelopeBody, t.mixed>;
}>, t.mixed>, t.PartialType<{
    Header: t.Type<nodoInviaRichiestaRevocaHeader, nodoInviaRichiestaRevocaHeader, t.mixed>;
}, t.TypeOfPartialProps<{
    Header: t.Type<nodoInviaRichiestaRevocaHeader, nodoInviaRichiestaRevocaHeader, t.mixed>;
}>, t.OutputOfPartialProps<{
    Header: t.Type<nodoInviaRichiestaRevocaHeader, nodoInviaRichiestaRevocaHeader, t.mixed>;
}>, t.mixed>], t.TypeOfProps<{
    Body: t.Type<nodoInviaRichiestaRevocaInputEnvelopeBody, nodoInviaRichiestaRevocaInputEnvelopeBody, t.mixed>;
}> & t.TypeOfPartialProps<{
    Header: t.Type<nodoInviaRichiestaRevocaHeader, nodoInviaRichiestaRevocaHeader, t.mixed>;
}>, t.OutputOfProps<{
    Body: t.Type<nodoInviaRichiestaRevocaInputEnvelopeBody, nodoInviaRichiestaRevocaInputEnvelopeBody, t.mixed>;
}> & t.OutputOfPartialProps<{
    Header: t.Type<nodoInviaRichiestaRevocaHeader, nodoInviaRichiestaRevocaHeader, t.mixed>;
}>, t.mixed>, t.TypeOfProps<{
    Body: t.Type<nodoInviaRichiestaRevocaInputEnvelopeBody, nodoInviaRichiestaRevocaInputEnvelopeBody, t.mixed>;
}> & t.TypeOfPartialProps<{
    Header: t.Type<nodoInviaRichiestaRevocaHeader, nodoInviaRichiestaRevocaHeader, t.mixed>;
}>, t.OutputOfProps<{
    Body: t.Type<nodoInviaRichiestaRevocaInputEnvelopeBody, nodoInviaRichiestaRevocaInputEnvelopeBody, t.mixed>;
}> & t.OutputOfPartialProps<{
    Header: t.Type<nodoInviaRichiestaRevocaHeader, nodoInviaRichiestaRevocaHeader, t.mixed>;
}>, t.mixed>;
export declare const nodoInviaRichiestaRevocaInputEnvelope: t.Type<nodoInviaRichiestaRevocaInputEnvelope, nodoInviaRichiestaRevocaInputEnvelope, t.mixed>;
export interface nodoInviaRichiestaRevocaInputEnvelope extends t.TypeOf<typeof _nodoInviaRichiestaRevocaInputEnvelope> {
}
declare const _nodoInviaRichiestaRevocaInput: t.ExactType<t.IntersectionType<[t.InterfaceType<{
    Envelope: t.Type<nodoInviaRichiestaRevocaInputEnvelope, nodoInviaRichiestaRevocaInputEnvelope, t.mixed>;
}, t.TypeOfProps<{
    Envelope: t.Type<nodoInviaRichiestaRevocaInputEnvelope, nodoInviaRichiestaRevocaInputEnvelope, t.mixed>;
}>, t.OutputOfProps<{
    Envelope: t.Type<nodoInviaRichiestaRevocaInputEnvelope, nodoInviaRichiestaRevocaInputEnvelope, t.mixed>;
}>, t.mixed>, t.PartialType<{}, t.TypeOfPartialProps<{}>, t.OutputOfPartialProps<{}>, t.mixed>], t.TypeOfProps<{
    Envelope: t.Type<nodoInviaRichiestaRevocaInputEnvelope, nodoInviaRichiestaRevocaInputEnvelope, t.mixed>;
}> & t.TypeOfPartialProps<{}>, t.OutputOfProps<{
    Envelope: t.Type<nodoInviaRichiestaRevocaInputEnvelope, nodoInviaRichiestaRevocaInputEnvelope, t.mixed>;
}> & t.OutputOfPartialProps<{}>, t.mixed>, t.TypeOfProps<{
    Envelope: t.Type<nodoInviaRichiestaRevocaInputEnvelope, nodoInviaRichiestaRevocaInputEnvelope, t.mixed>;
}> & t.TypeOfPartialProps<{}>, t.OutputOfProps<{
    Envelope: t.Type<nodoInviaRichiestaRevocaInputEnvelope, nodoInviaRichiestaRevocaInputEnvelope, t.mixed>;
}> & t.OutputOfPartialProps<{}>, t.mixed>;
export declare const nodoInviaRichiestaRevocaInput: t.Type<nodoInviaRichiestaRevocaInput, nodoInviaRichiestaRevocaInput, t.mixed>;
export interface nodoInviaRichiestaRevocaInput extends t.TypeOf<typeof _nodoInviaRichiestaRevocaInput> {
}
export {};
