/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import * as t from "io-ts";
import { pspChiediRTHeader } from "./pspChiediRTHeader";
import { pspChiediRT_ppt } from "./pspChiediRT_ppt";

// required attributes
const pspChiediRTInputEnvelopeBodyR = t.interface({
  pspChiediRT: pspChiediRT_ppt
});

// optional attributes
const pspChiediRTInputEnvelopeBodyO = t.partial({});

export const pspChiediRTInputEnvelopeBody = t.exact(
  t.intersection(
    [pspChiediRTInputEnvelopeBodyR, pspChiediRTInputEnvelopeBodyO],
    "pspChiediRTInputEnvelopeBody"
  )
);

export type pspChiediRTInputEnvelopeBody = t.TypeOf<
  typeof pspChiediRTInputEnvelopeBody
>;

// required attributes
const pspChiediRTInputEnvelopeR = t.interface({
  Body: pspChiediRTInputEnvelopeBody
});

// optional attributes
const pspChiediRTInputEnvelopeO = t.partial({
  Header: pspChiediRTHeader
});

export const pspChiediRTInputEnvelope = t.exact(
  t.intersection(
    [pspChiediRTInputEnvelopeR, pspChiediRTInputEnvelopeO],
    "pspChiediRTInputEnvelope"
  )
);

export type pspChiediRTInputEnvelope = t.TypeOf<
  typeof pspChiediRTInputEnvelope
>;

// required attributes
const pspChiediRTInputR = t.interface({
  Envelope: pspChiediRTInputEnvelope
});

// optional attributes
const pspChiediRTInputO = t.partial({});

export const pspChiediRTInput = t.exact(
  t.intersection([pspChiediRTInputR, pspChiediRTInputO], "pspChiediRTInput")
);

export type pspChiediRTInput = t.TypeOf<typeof pspChiediRTInput>;
