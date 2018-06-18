/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import * as t from "io-ts";
import { pspChiediRTResponse_ppt } from "./pspChiediRTResponse_ppt";

// required attributes
const pspChiediRTOutputEnvelopeBodyR = t.interface({});

// optional attributes
const pspChiediRTOutputEnvelopeBodyO = t.partial({
  pspChiediRTResponse: pspChiediRTResponse_ppt
});

export const pspChiediRTOutputEnvelopeBody = t.exact(
  t.intersection(
    [pspChiediRTOutputEnvelopeBodyR, pspChiediRTOutputEnvelopeBodyO],
    "pspChiediRTOutputEnvelopeBody"
  )
);

export type pspChiediRTOutputEnvelopeBody = t.TypeOf<
  typeof pspChiediRTOutputEnvelopeBody
>;

// required attributes
const pspChiediRTOutputEnvelopeR = t.interface({
  Body: pspChiediRTOutputEnvelopeBody
});

// optional attributes
const pspChiediRTOutputEnvelopeO = t.partial({});

export const pspChiediRTOutputEnvelope = t.exact(
  t.intersection(
    [pspChiediRTOutputEnvelopeR, pspChiediRTOutputEnvelopeO],
    "pspChiediRTOutputEnvelope"
  )
);

export type pspChiediRTOutputEnvelope = t.TypeOf<
  typeof pspChiediRTOutputEnvelope
>;

// required attributes
const pspChiediRTOutputR = t.interface({
  Envelope: pspChiediRTOutputEnvelope
});

// optional attributes
const pspChiediRTOutputO = t.partial({});

export const pspChiediRTOutput = t.exact(
  t.intersection([pspChiediRTOutputR, pspChiediRTOutputO], "pspChiediRTOutput")
);

export type pspChiediRTOutput = t.TypeOf<typeof pspChiediRTOutput>;
