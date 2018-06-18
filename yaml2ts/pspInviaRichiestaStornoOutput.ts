/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import * as t from "io-ts";
import { pspInviaRichiestaStornoResponse_ppt } from "./pspInviaRichiestaStornoResponse_ppt";

// required attributes
const pspInviaRichiestaStornoOutputEnvelopeBodyR = t.interface({});

// optional attributes
const pspInviaRichiestaStornoOutputEnvelopeBodyO = t.partial({
  pspInviaRichiestaStornoResponse: pspInviaRichiestaStornoResponse_ppt
});

export const pspInviaRichiestaStornoOutputEnvelopeBody = t.exact(
  t.intersection(
    [
      pspInviaRichiestaStornoOutputEnvelopeBodyR,
      pspInviaRichiestaStornoOutputEnvelopeBodyO
    ],
    "pspInviaRichiestaStornoOutputEnvelopeBody"
  )
);

export type pspInviaRichiestaStornoOutputEnvelopeBody = t.TypeOf<
  typeof pspInviaRichiestaStornoOutputEnvelopeBody
>;

// required attributes
const pspInviaRichiestaStornoOutputEnvelopeR = t.interface({
  Body: pspInviaRichiestaStornoOutputEnvelopeBody
});

// optional attributes
const pspInviaRichiestaStornoOutputEnvelopeO = t.partial({});

export const pspInviaRichiestaStornoOutputEnvelope = t.exact(
  t.intersection(
    [
      pspInviaRichiestaStornoOutputEnvelopeR,
      pspInviaRichiestaStornoOutputEnvelopeO
    ],
    "pspInviaRichiestaStornoOutputEnvelope"
  )
);

export type pspInviaRichiestaStornoOutputEnvelope = t.TypeOf<
  typeof pspInviaRichiestaStornoOutputEnvelope
>;

// required attributes
const pspInviaRichiestaStornoOutputR = t.interface({
  Envelope: pspInviaRichiestaStornoOutputEnvelope
});

// optional attributes
const pspInviaRichiestaStornoOutputO = t.partial({});

export const pspInviaRichiestaStornoOutput = t.exact(
  t.intersection(
    [pspInviaRichiestaStornoOutputR, pspInviaRichiestaStornoOutputO],
    "pspInviaRichiestaStornoOutput"
  )
);

export type pspInviaRichiestaStornoOutput = t.TypeOf<
  typeof pspInviaRichiestaStornoOutput
>;
