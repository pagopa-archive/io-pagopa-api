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
import { nodoVerificaRPTHeader } from "./nodoVerificaRPTHeader";
import { nodoVerificaRPT_ppt } from "./nodoVerificaRPT_ppt";

// required attributes
const nodoVerificaRPTInputEnvelopeBodyR = t.interface({
  nodoVerificaRPT: nodoVerificaRPT_ppt
});

// optional attributes
const nodoVerificaRPTInputEnvelopeBodyO = t.partial({});

export const nodoVerificaRPTInputEnvelopeBody = t.exact(
  t.intersection(
    [nodoVerificaRPTInputEnvelopeBodyR, nodoVerificaRPTInputEnvelopeBodyO],
    "nodoVerificaRPTInputEnvelopeBody"
  )
);

export type nodoVerificaRPTInputEnvelopeBody = t.TypeOf<
  typeof nodoVerificaRPTInputEnvelopeBody
>;

// required attributes
const nodoVerificaRPTInputEnvelopeR = t.interface({
  Body: nodoVerificaRPTInputEnvelopeBody
});

// optional attributes
const nodoVerificaRPTInputEnvelopeO = t.partial({
  Header: nodoVerificaRPTHeader
});

export const nodoVerificaRPTInputEnvelope = t.exact(
  t.intersection(
    [nodoVerificaRPTInputEnvelopeR, nodoVerificaRPTInputEnvelopeO],
    "nodoVerificaRPTInputEnvelope"
  )
);

export type nodoVerificaRPTInputEnvelope = t.TypeOf<
  typeof nodoVerificaRPTInputEnvelope
>;

// required attributes
const nodoVerificaRPTInputR = t.interface({
  Envelope: nodoVerificaRPTInputEnvelope
});

// optional attributes
const nodoVerificaRPTInputO = t.partial({});

export const nodoVerificaRPTInput = t.exact(
  t.intersection(
    [nodoVerificaRPTInputR, nodoVerificaRPTInputO],
    "nodoVerificaRPTInput"
  )
);

export type nodoVerificaRPTInput = t.TypeOf<typeof nodoVerificaRPTInput>;
