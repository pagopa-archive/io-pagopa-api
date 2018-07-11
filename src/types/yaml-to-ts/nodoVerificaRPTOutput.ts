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
import { nodoVerificaRPTRisposta_ppt } from "./nodoVerificaRPTRisposta_ppt";

// required attributes
const nodoVerificaRPTOutputEnvelopeBodyR = t.interface({});

// optional attributes
const nodoVerificaRPTOutputEnvelopeBodyO = t.partial({
  nodoVerificaRPTRisposta: nodoVerificaRPTRisposta_ppt
});

export const nodoVerificaRPTOutputEnvelopeBody = t.exact(
  t.intersection(
    [nodoVerificaRPTOutputEnvelopeBodyR, nodoVerificaRPTOutputEnvelopeBodyO],
    "nodoVerificaRPTOutputEnvelopeBody"
  )
);

export type nodoVerificaRPTOutputEnvelopeBody = t.TypeOf<
  typeof nodoVerificaRPTOutputEnvelopeBody
>;

// required attributes
const nodoVerificaRPTOutputEnvelopeR = t.interface({
  Body: nodoVerificaRPTOutputEnvelopeBody
});

// optional attributes
const nodoVerificaRPTOutputEnvelopeO = t.partial({});

export const nodoVerificaRPTOutputEnvelope = t.exact(
  t.intersection(
    [nodoVerificaRPTOutputEnvelopeR, nodoVerificaRPTOutputEnvelopeO],
    "nodoVerificaRPTOutputEnvelope"
  )
);

export type nodoVerificaRPTOutputEnvelope = t.TypeOf<
  typeof nodoVerificaRPTOutputEnvelope
>;

// required attributes
const nodoVerificaRPTOutputR = t.interface({
  Envelope: nodoVerificaRPTOutputEnvelope
});

// optional attributes
const nodoVerificaRPTOutputO = t.partial({});

export const nodoVerificaRPTOutput = t.exact(
  t.intersection(
    [nodoVerificaRPTOutputR, nodoVerificaRPTOutputO],
    "nodoVerificaRPTOutput"
  )
);

export type nodoVerificaRPTOutput = t.TypeOf<typeof nodoVerificaRPTOutput>;
