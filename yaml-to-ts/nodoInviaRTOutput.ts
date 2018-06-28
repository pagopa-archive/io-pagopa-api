/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import * as t from "io-ts";
import { nodoInviaRTRisposta_ppt } from "./nodoInviaRTRisposta_ppt";

// required attributes
const nodoInviaRTOutputEnvelopeBodyR = t.interface({});

// optional attributes
const nodoInviaRTOutputEnvelopeBodyO = t.partial({
  nodoInviaRTRisposta: nodoInviaRTRisposta_ppt
});

export const nodoInviaRTOutputEnvelopeBody = t.exact(
  t.intersection(
    [nodoInviaRTOutputEnvelopeBodyR, nodoInviaRTOutputEnvelopeBodyO],
    "nodoInviaRTOutputEnvelopeBody"
  )
);

export type nodoInviaRTOutputEnvelopeBody = t.TypeOf<
  typeof nodoInviaRTOutputEnvelopeBody
>;

// required attributes
const nodoInviaRTOutputEnvelopeR = t.interface({
  Body: nodoInviaRTOutputEnvelopeBody
});

// optional attributes
const nodoInviaRTOutputEnvelopeO = t.partial({});

export const nodoInviaRTOutputEnvelope = t.exact(
  t.intersection(
    [nodoInviaRTOutputEnvelopeR, nodoInviaRTOutputEnvelopeO],
    "nodoInviaRTOutputEnvelope"
  )
);

export type nodoInviaRTOutputEnvelope = t.TypeOf<
  typeof nodoInviaRTOutputEnvelope
>;

// required attributes
const nodoInviaRTOutputR = t.interface({
  Envelope: nodoInviaRTOutputEnvelope
});

// optional attributes
const nodoInviaRTOutputO = t.partial({});

export const nodoInviaRTOutput = t.exact(
  t.intersection([nodoInviaRTOutputR, nodoInviaRTOutputO], "nodoInviaRTOutput")
);

export type nodoInviaRTOutput = t.TypeOf<typeof nodoInviaRTOutput>;
