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
import { nodoAttivaRPTRisposta_ppt } from "./nodoAttivaRPTRisposta_ppt";

// required attributes
const nodoAttivaRPTOutputEnvelopeBodyR = t.interface({});

// optional attributes
const nodoAttivaRPTOutputEnvelopeBodyO = t.partial({
  nodoAttivaRPTRisposta: nodoAttivaRPTRisposta_ppt
});

export const nodoAttivaRPTOutputEnvelopeBody = t.exact(
  t.intersection(
    [nodoAttivaRPTOutputEnvelopeBodyR, nodoAttivaRPTOutputEnvelopeBodyO],
    "nodoAttivaRPTOutputEnvelopeBody"
  )
);

export type nodoAttivaRPTOutputEnvelopeBody = t.TypeOf<
  typeof nodoAttivaRPTOutputEnvelopeBody
>;

// required attributes
const nodoAttivaRPTOutputEnvelopeR = t.interface({
  Body: nodoAttivaRPTOutputEnvelopeBody
});

// optional attributes
const nodoAttivaRPTOutputEnvelopeO = t.partial({});

export const nodoAttivaRPTOutputEnvelope = t.exact(
  t.intersection(
    [nodoAttivaRPTOutputEnvelopeR, nodoAttivaRPTOutputEnvelopeO],
    "nodoAttivaRPTOutputEnvelope"
  )
);

export type nodoAttivaRPTOutputEnvelope = t.TypeOf<
  typeof nodoAttivaRPTOutputEnvelope
>;

// required attributes
const nodoAttivaRPTOutputR = t.interface({
  Envelope: nodoAttivaRPTOutputEnvelope
});

// optional attributes
const nodoAttivaRPTOutputO = t.partial({});

export const nodoAttivaRPTOutput = t.exact(
  t.intersection(
    [nodoAttivaRPTOutputR, nodoAttivaRPTOutputO],
    "nodoAttivaRPTOutput"
  )
);

export type nodoAttivaRPTOutput = t.TypeOf<typeof nodoAttivaRPTOutput>;
