/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:variable-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import * as t from "io-ts";
import { nodoChiediTemplateInformativaPSPHeader } from "./nodoChiediTemplateInformativaPSPHeader";
import { nodoChiediTemplateInformativaPSP_ppt } from "./nodoChiediTemplateInformativaPSP_ppt";

// required attributes
const nodoChiediTemplateInformativaPSPInputEnvelopeBodyR = t.interface({
  nodoChiediTemplateInformativaPSP: nodoChiediTemplateInformativaPSP_ppt
});

// optional attributes
const nodoChiediTemplateInformativaPSPInputEnvelopeBodyO = t.partial({});

export const nodoChiediTemplateInformativaPSPInputEnvelopeBody = t.exact(
  t.intersection(
    [
      nodoChiediTemplateInformativaPSPInputEnvelopeBodyR,
      nodoChiediTemplateInformativaPSPInputEnvelopeBodyO
    ],
    "nodoChiediTemplateInformativaPSPInputEnvelopeBody"
  )
);

export type nodoChiediTemplateInformativaPSPInputEnvelopeBody = t.TypeOf<
  typeof nodoChiediTemplateInformativaPSPInputEnvelopeBody
>;

// required attributes
const nodoChiediTemplateInformativaPSPInputEnvelopeR = t.interface({
  Body: nodoChiediTemplateInformativaPSPInputEnvelopeBody
});

// optional attributes
const nodoChiediTemplateInformativaPSPInputEnvelopeO = t.partial({
  Header: nodoChiediTemplateInformativaPSPHeader
});

export const nodoChiediTemplateInformativaPSPInputEnvelope = t.exact(
  t.intersection(
    [
      nodoChiediTemplateInformativaPSPInputEnvelopeR,
      nodoChiediTemplateInformativaPSPInputEnvelopeO
    ],
    "nodoChiediTemplateInformativaPSPInputEnvelope"
  )
);

export type nodoChiediTemplateInformativaPSPInputEnvelope = t.TypeOf<
  typeof nodoChiediTemplateInformativaPSPInputEnvelope
>;

// required attributes
const nodoChiediTemplateInformativaPSPInputR = t.interface({
  Envelope: nodoChiediTemplateInformativaPSPInputEnvelope
});

// optional attributes
const nodoChiediTemplateInformativaPSPInputO = t.partial({});

export const nodoChiediTemplateInformativaPSPInput = t.exact(
  t.intersection(
    [
      nodoChiediTemplateInformativaPSPInputR,
      nodoChiediTemplateInformativaPSPInputO
    ],
    "nodoChiediTemplateInformativaPSPInput"
  )
);

export type nodoChiediTemplateInformativaPSPInput = t.TypeOf<
  typeof nodoChiediTemplateInformativaPSPInput
>;
