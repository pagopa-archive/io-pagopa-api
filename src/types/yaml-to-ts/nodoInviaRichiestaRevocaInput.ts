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
import { nodoInviaRichiestaRevocaHeader } from "./nodoInviaRichiestaRevocaHeader";
import { nodoInviaRichiestaRevoca_ppt } from "./nodoInviaRichiestaRevoca_ppt";

// required attributes
const nodoInviaRichiestaRevocaInputEnvelopeBodyR = t.interface({
  nodoInviaRichiestaRevoca: nodoInviaRichiestaRevoca_ppt
});

// optional attributes
const nodoInviaRichiestaRevocaInputEnvelopeBodyO = t.partial({});

export const nodoInviaRichiestaRevocaInputEnvelopeBody = t.exact(
  t.intersection(
    [
      nodoInviaRichiestaRevocaInputEnvelopeBodyR,
      nodoInviaRichiestaRevocaInputEnvelopeBodyO
    ],
    "nodoInviaRichiestaRevocaInputEnvelopeBody"
  )
);

export type nodoInviaRichiestaRevocaInputEnvelopeBody = t.TypeOf<
  typeof nodoInviaRichiestaRevocaInputEnvelopeBody
>;

// required attributes
const nodoInviaRichiestaRevocaInputEnvelopeR = t.interface({
  Body: nodoInviaRichiestaRevocaInputEnvelopeBody
});

// optional attributes
const nodoInviaRichiestaRevocaInputEnvelopeO = t.partial({
  Header: nodoInviaRichiestaRevocaHeader
});

export const nodoInviaRichiestaRevocaInputEnvelope = t.exact(
  t.intersection(
    [
      nodoInviaRichiestaRevocaInputEnvelopeR,
      nodoInviaRichiestaRevocaInputEnvelopeO
    ],
    "nodoInviaRichiestaRevocaInputEnvelope"
  )
);

export type nodoInviaRichiestaRevocaInputEnvelope = t.TypeOf<
  typeof nodoInviaRichiestaRevocaInputEnvelope
>;

// required attributes
const nodoInviaRichiestaRevocaInputR = t.interface({
  Envelope: nodoInviaRichiestaRevocaInputEnvelope
});

// optional attributes
const nodoInviaRichiestaRevocaInputO = t.partial({});

export const nodoInviaRichiestaRevocaInput = t.exact(
  t.intersection(
    [nodoInviaRichiestaRevocaInputR, nodoInviaRichiestaRevocaInputO],
    "nodoInviaRichiestaRevocaInput"
  )
);

export type nodoInviaRichiestaRevocaInput = t.TypeOf<
  typeof nodoInviaRichiestaRevocaInput
>;
