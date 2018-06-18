/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import * as t from "io-ts";
import { pspChiediAvanzamentoRPTResponse_ppt } from "./pspChiediAvanzamentoRPTResponse_ppt";

// required attributes
const pspChiediAvanzamentoRPTOutputEnvelopeBodyR = t.interface({});

// optional attributes
const pspChiediAvanzamentoRPTOutputEnvelopeBodyO = t.partial({
  pspChiediAvanzamentoRPTResponse: pspChiediAvanzamentoRPTResponse_ppt
});

export const pspChiediAvanzamentoRPTOutputEnvelopeBody = t.exact(
  t.intersection(
    [
      pspChiediAvanzamentoRPTOutputEnvelopeBodyR,
      pspChiediAvanzamentoRPTOutputEnvelopeBodyO
    ],
    "pspChiediAvanzamentoRPTOutputEnvelopeBody"
  )
);

export type pspChiediAvanzamentoRPTOutputEnvelopeBody = t.TypeOf<
  typeof pspChiediAvanzamentoRPTOutputEnvelopeBody
>;

// required attributes
const pspChiediAvanzamentoRPTOutputEnvelopeR = t.interface({
  Body: pspChiediAvanzamentoRPTOutputEnvelopeBody
});

// optional attributes
const pspChiediAvanzamentoRPTOutputEnvelopeO = t.partial({});

export const pspChiediAvanzamentoRPTOutputEnvelope = t.exact(
  t.intersection(
    [
      pspChiediAvanzamentoRPTOutputEnvelopeR,
      pspChiediAvanzamentoRPTOutputEnvelopeO
    ],
    "pspChiediAvanzamentoRPTOutputEnvelope"
  )
);

export type pspChiediAvanzamentoRPTOutputEnvelope = t.TypeOf<
  typeof pspChiediAvanzamentoRPTOutputEnvelope
>;

// required attributes
const pspChiediAvanzamentoRPTOutputR = t.interface({
  Envelope: pspChiediAvanzamentoRPTOutputEnvelope
});

// optional attributes
const pspChiediAvanzamentoRPTOutputO = t.partial({});

export const pspChiediAvanzamentoRPTOutput = t.exact(
  t.intersection(
    [pspChiediAvanzamentoRPTOutputR, pspChiediAvanzamentoRPTOutputO],
    "pspChiediAvanzamentoRPTOutput"
  )
);

export type pspChiediAvanzamentoRPTOutput = t.TypeOf<
  typeof pspChiediAvanzamentoRPTOutput
>;
