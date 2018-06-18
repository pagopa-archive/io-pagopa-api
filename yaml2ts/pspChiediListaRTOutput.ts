/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import * as t from "io-ts";
import { pspChiediListaRTResponse_ppt } from "./pspChiediListaRTResponse_ppt";

// required attributes
const pspChiediListaRTOutputEnvelopeBodyR = t.interface({});

// optional attributes
const pspChiediListaRTOutputEnvelopeBodyO = t.partial({
  pspChiediListaRTResponse: pspChiediListaRTResponse_ppt
});

export const pspChiediListaRTOutputEnvelopeBody = t.exact(
  t.intersection(
    [pspChiediListaRTOutputEnvelopeBodyR, pspChiediListaRTOutputEnvelopeBodyO],
    "pspChiediListaRTOutputEnvelopeBody"
  )
);

export type pspChiediListaRTOutputEnvelopeBody = t.TypeOf<
  typeof pspChiediListaRTOutputEnvelopeBody
>;

// required attributes
const pspChiediListaRTOutputEnvelopeR = t.interface({
  Body: pspChiediListaRTOutputEnvelopeBody
});

// optional attributes
const pspChiediListaRTOutputEnvelopeO = t.partial({});

export const pspChiediListaRTOutputEnvelope = t.exact(
  t.intersection(
    [pspChiediListaRTOutputEnvelopeR, pspChiediListaRTOutputEnvelopeO],
    "pspChiediListaRTOutputEnvelope"
  )
);

export type pspChiediListaRTOutputEnvelope = t.TypeOf<
  typeof pspChiediListaRTOutputEnvelope
>;

// required attributes
const pspChiediListaRTOutputR = t.interface({
  Envelope: pspChiediListaRTOutputEnvelope
});

// optional attributes
const pspChiediListaRTOutputO = t.partial({});

export const pspChiediListaRTOutput = t.exact(
  t.intersection(
    [pspChiediListaRTOutputR, pspChiediListaRTOutputO],
    "pspChiediListaRTOutput"
  )
);

export type pspChiediListaRTOutput = t.TypeOf<typeof pspChiediListaRTOutput>;
