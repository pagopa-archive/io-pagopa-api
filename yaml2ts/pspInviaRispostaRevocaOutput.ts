/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import * as t from "io-ts";
import { pspInviaRispostaRevocaResponse_ppt } from "./pspInviaRispostaRevocaResponse_ppt";

// required attributes
const pspInviaRispostaRevocaOutputEnvelopeBodyR = t.interface({});

// optional attributes
const pspInviaRispostaRevocaOutputEnvelopeBodyO = t.partial({
  pspInviaRispostaRevocaResponse: pspInviaRispostaRevocaResponse_ppt
});

export const pspInviaRispostaRevocaOutputEnvelopeBody = t.exact(
  t.intersection(
    [
      pspInviaRispostaRevocaOutputEnvelopeBodyR,
      pspInviaRispostaRevocaOutputEnvelopeBodyO
    ],
    "pspInviaRispostaRevocaOutputEnvelopeBody"
  )
);

export type pspInviaRispostaRevocaOutputEnvelopeBody = t.TypeOf<
  typeof pspInviaRispostaRevocaOutputEnvelopeBody
>;

// required attributes
const pspInviaRispostaRevocaOutputEnvelopeR = t.interface({
  Body: pspInviaRispostaRevocaOutputEnvelopeBody
});

// optional attributes
const pspInviaRispostaRevocaOutputEnvelopeO = t.partial({});

export const pspInviaRispostaRevocaOutputEnvelope = t.exact(
  t.intersection(
    [
      pspInviaRispostaRevocaOutputEnvelopeR,
      pspInviaRispostaRevocaOutputEnvelopeO
    ],
    "pspInviaRispostaRevocaOutputEnvelope"
  )
);

export type pspInviaRispostaRevocaOutputEnvelope = t.TypeOf<
  typeof pspInviaRispostaRevocaOutputEnvelope
>;

// required attributes
const pspInviaRispostaRevocaOutputR = t.interface({
  Envelope: pspInviaRispostaRevocaOutputEnvelope
});

// optional attributes
const pspInviaRispostaRevocaOutputO = t.partial({});

export const pspInviaRispostaRevocaOutput = t.exact(
  t.intersection(
    [pspInviaRispostaRevocaOutputR, pspInviaRispostaRevocaOutputO],
    "pspInviaRispostaRevocaOutput"
  )
);

export type pspInviaRispostaRevocaOutput = t.TypeOf<
  typeof pspInviaRispostaRevocaOutput
>;
