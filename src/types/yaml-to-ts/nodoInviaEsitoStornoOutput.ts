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
import { nodoInviaEsitoStornoRisposta_ppt } from "./nodoInviaEsitoStornoRisposta_ppt";

// required attributes
const nodoInviaEsitoStornoOutputEnvelopeBodyR = t.interface({});

// optional attributes
const nodoInviaEsitoStornoOutputEnvelopeBodyO = t.partial({
  nodoInviaEsitoStornoRisposta: nodoInviaEsitoStornoRisposta_ppt
});

export const nodoInviaEsitoStornoOutputEnvelopeBody = t.exact(
  t.intersection(
    [
      nodoInviaEsitoStornoOutputEnvelopeBodyR,
      nodoInviaEsitoStornoOutputEnvelopeBodyO
    ],
    "nodoInviaEsitoStornoOutputEnvelopeBody"
  )
);

export type nodoInviaEsitoStornoOutputEnvelopeBody = t.TypeOf<
  typeof nodoInviaEsitoStornoOutputEnvelopeBody
>;

// required attributes
const nodoInviaEsitoStornoOutputEnvelopeR = t.interface({
  Body: nodoInviaEsitoStornoOutputEnvelopeBody
});

// optional attributes
const nodoInviaEsitoStornoOutputEnvelopeO = t.partial({});

export const nodoInviaEsitoStornoOutputEnvelope = t.exact(
  t.intersection(
    [nodoInviaEsitoStornoOutputEnvelopeR, nodoInviaEsitoStornoOutputEnvelopeO],
    "nodoInviaEsitoStornoOutputEnvelope"
  )
);

export type nodoInviaEsitoStornoOutputEnvelope = t.TypeOf<
  typeof nodoInviaEsitoStornoOutputEnvelope
>;

// required attributes
const nodoInviaEsitoStornoOutputR = t.interface({
  Envelope: nodoInviaEsitoStornoOutputEnvelope
});

// optional attributes
const nodoInviaEsitoStornoOutputO = t.partial({});

export const nodoInviaEsitoStornoOutput = t.exact(
  t.intersection(
    [nodoInviaEsitoStornoOutputR, nodoInviaEsitoStornoOutputO],
    "nodoInviaEsitoStornoOutput"
  )
);

export type nodoInviaEsitoStornoOutput = t.TypeOf<
  typeof nodoInviaEsitoStornoOutput
>;
