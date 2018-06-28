/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import * as t from "io-ts";
import { nodoInviaRTHeader } from "./nodoInviaRTHeader";
import { nodoInviaRT_ppt } from "./nodoInviaRT_ppt";

// required attributes
const nodoInviaRTInputEnvelopeBodyR = t.interface({
  nodoInviaRT: nodoInviaRT_ppt
});

// optional attributes
const nodoInviaRTInputEnvelopeBodyO = t.partial({});

export const nodoInviaRTInputEnvelopeBody = t.exact(
  t.intersection(
    [nodoInviaRTInputEnvelopeBodyR, nodoInviaRTInputEnvelopeBodyO],
    "nodoInviaRTInputEnvelopeBody"
  )
);

export type nodoInviaRTInputEnvelopeBody = t.TypeOf<
  typeof nodoInviaRTInputEnvelopeBody
>;

// required attributes
const nodoInviaRTInputEnvelopeR = t.interface({
  Body: nodoInviaRTInputEnvelopeBody
});

// optional attributes
const nodoInviaRTInputEnvelopeO = t.partial({
  Header: nodoInviaRTHeader
});

export const nodoInviaRTInputEnvelope = t.exact(
  t.intersection(
    [nodoInviaRTInputEnvelopeR, nodoInviaRTInputEnvelopeO],
    "nodoInviaRTInputEnvelope"
  )
);

export type nodoInviaRTInputEnvelope = t.TypeOf<
  typeof nodoInviaRTInputEnvelope
>;

// required attributes
const nodoInviaRTInputR = t.interface({
  Envelope: nodoInviaRTInputEnvelope
});

// optional attributes
const nodoInviaRTInputO = t.partial({});

export const nodoInviaRTInput = t.exact(
  t.intersection([nodoInviaRTInputR, nodoInviaRTInputO], "nodoInviaRTInput")
);

export type nodoInviaRTInput = t.TypeOf<typeof nodoInviaRTInput>;
