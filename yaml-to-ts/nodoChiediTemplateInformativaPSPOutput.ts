/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import * as t from "io-ts";
import { nodoChiediTemplateInformativaPSPRisposta_ppt } from "./nodoChiediTemplateInformativaPSPRisposta_ppt";

// required attributes
const nodoChiediTemplateInformativaPSPOutputEnvelopeBodyR = t.interface({});

// optional attributes
const nodoChiediTemplateInformativaPSPOutputEnvelopeBodyO = t.partial({
  nodoChiediTemplateInformativaPSPRisposta: nodoChiediTemplateInformativaPSPRisposta_ppt
});

export const nodoChiediTemplateInformativaPSPOutputEnvelopeBody = t.exact(
  t.intersection(
    [
      nodoChiediTemplateInformativaPSPOutputEnvelopeBodyR,
      nodoChiediTemplateInformativaPSPOutputEnvelopeBodyO
    ],
    "nodoChiediTemplateInformativaPSPOutputEnvelopeBody"
  )
);

export type nodoChiediTemplateInformativaPSPOutputEnvelopeBody = t.TypeOf<
  typeof nodoChiediTemplateInformativaPSPOutputEnvelopeBody
>;

// required attributes
const nodoChiediTemplateInformativaPSPOutputEnvelopeR = t.interface({
  Body: nodoChiediTemplateInformativaPSPOutputEnvelopeBody
});

// optional attributes
const nodoChiediTemplateInformativaPSPOutputEnvelopeO = t.partial({});

export const nodoChiediTemplateInformativaPSPOutputEnvelope = t.exact(
  t.intersection(
    [
      nodoChiediTemplateInformativaPSPOutputEnvelopeR,
      nodoChiediTemplateInformativaPSPOutputEnvelopeO
    ],
    "nodoChiediTemplateInformativaPSPOutputEnvelope"
  )
);

export type nodoChiediTemplateInformativaPSPOutputEnvelope = t.TypeOf<
  typeof nodoChiediTemplateInformativaPSPOutputEnvelope
>;

// required attributes
const nodoChiediTemplateInformativaPSPOutputR = t.interface({
  Envelope: nodoChiediTemplateInformativaPSPOutputEnvelope
});

// optional attributes
const nodoChiediTemplateInformativaPSPOutputO = t.partial({});

export const nodoChiediTemplateInformativaPSPOutput = t.exact(
  t.intersection(
    [
      nodoChiediTemplateInformativaPSPOutputR,
      nodoChiediTemplateInformativaPSPOutputO
    ],
    "nodoChiediTemplateInformativaPSPOutput"
  )
);

export type nodoChiediTemplateInformativaPSPOutput = t.TypeOf<
  typeof nodoChiediTemplateInformativaPSPOutput
>;
