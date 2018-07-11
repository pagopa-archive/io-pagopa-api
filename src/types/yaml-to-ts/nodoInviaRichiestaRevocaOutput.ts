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
import { nodoInviaRichiestaRevocaRisposta_ppt } from "./nodoInviaRichiestaRevocaRisposta_ppt";

// required attributes
const nodoInviaRichiestaRevocaOutputEnvelopeBodyR = t.interface({});

// optional attributes
const nodoInviaRichiestaRevocaOutputEnvelopeBodyO = t.partial({
  nodoInviaRichiestaRevocaRisposta: nodoInviaRichiestaRevocaRisposta_ppt
});

export const nodoInviaRichiestaRevocaOutputEnvelopeBody = t.exact(
  t.intersection(
    [
      nodoInviaRichiestaRevocaOutputEnvelopeBodyR,
      nodoInviaRichiestaRevocaOutputEnvelopeBodyO
    ],
    "nodoInviaRichiestaRevocaOutputEnvelopeBody"
  )
);

export type nodoInviaRichiestaRevocaOutputEnvelopeBody = t.TypeOf<
  typeof nodoInviaRichiestaRevocaOutputEnvelopeBody
>;

// required attributes
const nodoInviaRichiestaRevocaOutputEnvelopeR = t.interface({
  Body: nodoInviaRichiestaRevocaOutputEnvelopeBody
});

// optional attributes
const nodoInviaRichiestaRevocaOutputEnvelopeO = t.partial({});

export const nodoInviaRichiestaRevocaOutputEnvelope = t.exact(
  t.intersection(
    [
      nodoInviaRichiestaRevocaOutputEnvelopeR,
      nodoInviaRichiestaRevocaOutputEnvelopeO
    ],
    "nodoInviaRichiestaRevocaOutputEnvelope"
  )
);

export type nodoInviaRichiestaRevocaOutputEnvelope = t.TypeOf<
  typeof nodoInviaRichiestaRevocaOutputEnvelope
>;

// required attributes
const nodoInviaRichiestaRevocaOutputR = t.interface({
  Envelope: nodoInviaRichiestaRevocaOutputEnvelope
});

// optional attributes
const nodoInviaRichiestaRevocaOutputO = t.partial({});

export const nodoInviaRichiestaRevocaOutput = t.exact(
  t.intersection(
    [nodoInviaRichiestaRevocaOutputR, nodoInviaRichiestaRevocaOutputO],
    "nodoInviaRichiestaRevocaOutput"
  )
);

export type nodoInviaRichiestaRevocaOutput = t.TypeOf<
  typeof nodoInviaRichiestaRevocaOutput
>;
