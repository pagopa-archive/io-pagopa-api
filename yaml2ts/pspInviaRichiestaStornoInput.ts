/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import * as t from "io-ts";
import { pspInviaRichiestaStornoHeader } from "./pspInviaRichiestaStornoHeader";
import { pspInviaRichiestaStorno_ppt } from "./pspInviaRichiestaStorno_ppt";

// required attributes
const pspInviaRichiestaStornoInputEnvelopeBodyR = t.interface({
  pspInviaRichiestaStorno: pspInviaRichiestaStorno_ppt
});

// optional attributes
const pspInviaRichiestaStornoInputEnvelopeBodyO = t.partial({});

export const pspInviaRichiestaStornoInputEnvelopeBody = t.exact(
  t.intersection(
    [
      pspInviaRichiestaStornoInputEnvelopeBodyR,
      pspInviaRichiestaStornoInputEnvelopeBodyO
    ],
    "pspInviaRichiestaStornoInputEnvelopeBody"
  )
);

export type pspInviaRichiestaStornoInputEnvelopeBody = t.TypeOf<
  typeof pspInviaRichiestaStornoInputEnvelopeBody
>;

// required attributes
const pspInviaRichiestaStornoInputEnvelopeR = t.interface({
  Body: pspInviaRichiestaStornoInputEnvelopeBody
});

// optional attributes
const pspInviaRichiestaStornoInputEnvelopeO = t.partial({
  Header: pspInviaRichiestaStornoHeader
});

export const pspInviaRichiestaStornoInputEnvelope = t.exact(
  t.intersection(
    [
      pspInviaRichiestaStornoInputEnvelopeR,
      pspInviaRichiestaStornoInputEnvelopeO
    ],
    "pspInviaRichiestaStornoInputEnvelope"
  )
);

export type pspInviaRichiestaStornoInputEnvelope = t.TypeOf<
  typeof pspInviaRichiestaStornoInputEnvelope
>;

// required attributes
const pspInviaRichiestaStornoInputR = t.interface({
  Envelope: pspInviaRichiestaStornoInputEnvelope
});

// optional attributes
const pspInviaRichiestaStornoInputO = t.partial({});

export const pspInviaRichiestaStornoInput = t.exact(
  t.intersection(
    [pspInviaRichiestaStornoInputR, pspInviaRichiestaStornoInputO],
    "pspInviaRichiestaStornoInput"
  )
);

export type pspInviaRichiestaStornoInput = t.TypeOf<
  typeof pspInviaRichiestaStornoInput
>;
