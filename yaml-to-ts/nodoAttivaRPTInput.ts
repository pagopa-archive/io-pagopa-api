/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import * as t from "io-ts";
import { nodoAttivaRPTHeader } from "./nodoAttivaRPTHeader";
import { nodoAttivaRPT_ppt } from "./nodoAttivaRPT_ppt";

// required attributes
const nodoAttivaRPTInputEnvelopeBodyR = t.interface({
  nodoAttivaRPT: nodoAttivaRPT_ppt
});

// optional attributes
const nodoAttivaRPTInputEnvelopeBodyO = t.partial({});

export const nodoAttivaRPTInputEnvelopeBody = t.exact(
  t.intersection(
    [nodoAttivaRPTInputEnvelopeBodyR, nodoAttivaRPTInputEnvelopeBodyO],
    "nodoAttivaRPTInputEnvelopeBody"
  )
);

export type nodoAttivaRPTInputEnvelopeBody = t.TypeOf<
  typeof nodoAttivaRPTInputEnvelopeBody
>;

// required attributes
const nodoAttivaRPTInputEnvelopeR = t.interface({
  Body: nodoAttivaRPTInputEnvelopeBody
});

// optional attributes
const nodoAttivaRPTInputEnvelopeO = t.partial({
  Header: nodoAttivaRPTHeader
});

export const nodoAttivaRPTInputEnvelope = t.exact(
  t.intersection(
    [nodoAttivaRPTInputEnvelopeR, nodoAttivaRPTInputEnvelopeO],
    "nodoAttivaRPTInputEnvelope"
  )
);

export type nodoAttivaRPTInputEnvelope = t.TypeOf<
  typeof nodoAttivaRPTInputEnvelope
>;

// required attributes
const nodoAttivaRPTInputR = t.interface({
  Envelope: nodoAttivaRPTInputEnvelope
});

// optional attributes
const nodoAttivaRPTInputO = t.partial({});

export const nodoAttivaRPTInput = t.exact(
  t.intersection(
    [nodoAttivaRPTInputR, nodoAttivaRPTInputO],
    "nodoAttivaRPTInput"
  )
);

export type nodoAttivaRPTInput = t.TypeOf<typeof nodoAttivaRPTInput>;
