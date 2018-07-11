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
import { nodoInviaEsitoStornoHeader } from "./nodoInviaEsitoStornoHeader";
import { nodoInviaEsitoStorno_ppt } from "./nodoInviaEsitoStorno_ppt";

// required attributes
const nodoInviaEsitoStornoInputEnvelopeBodyR = t.interface({
  nodoInviaEsitoStorno: nodoInviaEsitoStorno_ppt
});

// optional attributes
const nodoInviaEsitoStornoInputEnvelopeBodyO = t.partial({});

export const nodoInviaEsitoStornoInputEnvelopeBody = t.exact(
  t.intersection(
    [
      nodoInviaEsitoStornoInputEnvelopeBodyR,
      nodoInviaEsitoStornoInputEnvelopeBodyO
    ],
    "nodoInviaEsitoStornoInputEnvelopeBody"
  )
);

export type nodoInviaEsitoStornoInputEnvelopeBody = t.TypeOf<
  typeof nodoInviaEsitoStornoInputEnvelopeBody
>;

// required attributes
const nodoInviaEsitoStornoInputEnvelopeR = t.interface({
  Body: nodoInviaEsitoStornoInputEnvelopeBody
});

// optional attributes
const nodoInviaEsitoStornoInputEnvelopeO = t.partial({
  Header: nodoInviaEsitoStornoHeader
});

export const nodoInviaEsitoStornoInputEnvelope = t.exact(
  t.intersection(
    [nodoInviaEsitoStornoInputEnvelopeR, nodoInviaEsitoStornoInputEnvelopeO],
    "nodoInviaEsitoStornoInputEnvelope"
  )
);

export type nodoInviaEsitoStornoInputEnvelope = t.TypeOf<
  typeof nodoInviaEsitoStornoInputEnvelope
>;

// required attributes
const nodoInviaEsitoStornoInputR = t.interface({
  Envelope: nodoInviaEsitoStornoInputEnvelope
});

// optional attributes
const nodoInviaEsitoStornoInputO = t.partial({});

export const nodoInviaEsitoStornoInput = t.exact(
  t.intersection(
    [nodoInviaEsitoStornoInputR, nodoInviaEsitoStornoInputO],
    "nodoInviaEsitoStornoInput"
  )
);

export type nodoInviaEsitoStornoInput = t.TypeOf<
  typeof nodoInviaEsitoStornoInput
>;
