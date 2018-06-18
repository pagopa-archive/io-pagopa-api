/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import * as t from "io-ts";
import { pspInviaRispostaRevocaHeader } from "./pspInviaRispostaRevocaHeader";
import { pspInviaRispostaRevoca_ppt } from "./pspInviaRispostaRevoca_ppt";

// required attributes
const pspInviaRispostaRevocaInputEnvelopeBodyR = t.interface({
  pspInviaRispostaRevoca: pspInviaRispostaRevoca_ppt
});

// optional attributes
const pspInviaRispostaRevocaInputEnvelopeBodyO = t.partial({});

export const pspInviaRispostaRevocaInputEnvelopeBody = t.exact(
  t.intersection(
    [
      pspInviaRispostaRevocaInputEnvelopeBodyR,
      pspInviaRispostaRevocaInputEnvelopeBodyO
    ],
    "pspInviaRispostaRevocaInputEnvelopeBody"
  )
);

export type pspInviaRispostaRevocaInputEnvelopeBody = t.TypeOf<
  typeof pspInviaRispostaRevocaInputEnvelopeBody
>;

// required attributes
const pspInviaRispostaRevocaInputEnvelopeR = t.interface({
  Body: pspInviaRispostaRevocaInputEnvelopeBody
});

// optional attributes
const pspInviaRispostaRevocaInputEnvelopeO = t.partial({
  Header: pspInviaRispostaRevocaHeader
});

export const pspInviaRispostaRevocaInputEnvelope = t.exact(
  t.intersection(
    [
      pspInviaRispostaRevocaInputEnvelopeR,
      pspInviaRispostaRevocaInputEnvelopeO
    ],
    "pspInviaRispostaRevocaInputEnvelope"
  )
);

export type pspInviaRispostaRevocaInputEnvelope = t.TypeOf<
  typeof pspInviaRispostaRevocaInputEnvelope
>;

// required attributes
const pspInviaRispostaRevocaInputR = t.interface({
  Envelope: pspInviaRispostaRevocaInputEnvelope
});

// optional attributes
const pspInviaRispostaRevocaInputO = t.partial({});

export const pspInviaRispostaRevocaInput = t.exact(
  t.intersection(
    [pspInviaRispostaRevocaInputR, pspInviaRispostaRevocaInputO],
    "pspInviaRispostaRevocaInput"
  )
);

export type pspInviaRispostaRevocaInput = t.TypeOf<
  typeof pspInviaRispostaRevocaInput
>;
