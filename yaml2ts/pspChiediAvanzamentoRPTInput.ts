/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import * as t from "io-ts";
import { pspChiediAvanzamentoRPTHeader } from "./pspChiediAvanzamentoRPTHeader";
import { pspChiediAvanzamentoRPT_ppt } from "./pspChiediAvanzamentoRPT_ppt";

// required attributes
const pspChiediAvanzamentoRPTInputEnvelopeBodyR = t.interface({
  pspChiediAvanzamentoRPT: pspChiediAvanzamentoRPT_ppt
});

// optional attributes
const pspChiediAvanzamentoRPTInputEnvelopeBodyO = t.partial({});

export const pspChiediAvanzamentoRPTInputEnvelopeBody = t.exact(
  t.intersection(
    [
      pspChiediAvanzamentoRPTInputEnvelopeBodyR,
      pspChiediAvanzamentoRPTInputEnvelopeBodyO
    ],
    "pspChiediAvanzamentoRPTInputEnvelopeBody"
  )
);

export type pspChiediAvanzamentoRPTInputEnvelopeBody = t.TypeOf<
  typeof pspChiediAvanzamentoRPTInputEnvelopeBody
>;

// required attributes
const pspChiediAvanzamentoRPTInputEnvelopeR = t.interface({
  Body: pspChiediAvanzamentoRPTInputEnvelopeBody
});

// optional attributes
const pspChiediAvanzamentoRPTInputEnvelopeO = t.partial({
  Header: pspChiediAvanzamentoRPTHeader
});

export const pspChiediAvanzamentoRPTInputEnvelope = t.exact(
  t.intersection(
    [
      pspChiediAvanzamentoRPTInputEnvelopeR,
      pspChiediAvanzamentoRPTInputEnvelopeO
    ],
    "pspChiediAvanzamentoRPTInputEnvelope"
  )
);

export type pspChiediAvanzamentoRPTInputEnvelope = t.TypeOf<
  typeof pspChiediAvanzamentoRPTInputEnvelope
>;

// required attributes
const pspChiediAvanzamentoRPTInputR = t.interface({
  Envelope: pspChiediAvanzamentoRPTInputEnvelope
});

// optional attributes
const pspChiediAvanzamentoRPTInputO = t.partial({});

export const pspChiediAvanzamentoRPTInput = t.exact(
  t.intersection(
    [pspChiediAvanzamentoRPTInputR, pspChiediAvanzamentoRPTInputO],
    "pspChiediAvanzamentoRPTInput"
  )
);

export type pspChiediAvanzamentoRPTInput = t.TypeOf<
  typeof pspChiediAvanzamentoRPTInput
>;
