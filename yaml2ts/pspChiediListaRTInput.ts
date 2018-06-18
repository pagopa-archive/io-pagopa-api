/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import * as t from "io-ts";
import { pspChiediListaRTHeader } from "./pspChiediListaRTHeader";
import { pspChiediListaRT_ppt } from "./pspChiediListaRT_ppt";

// required attributes
const pspChiediListaRTInputEnvelopeBodyR = t.interface({
  pspChiediListaRT: pspChiediListaRT_ppt
});

// optional attributes
const pspChiediListaRTInputEnvelopeBodyO = t.partial({});

export const pspChiediListaRTInputEnvelopeBody = t.exact(
  t.intersection(
    [pspChiediListaRTInputEnvelopeBodyR, pspChiediListaRTInputEnvelopeBodyO],
    "pspChiediListaRTInputEnvelopeBody"
  )
);

export type pspChiediListaRTInputEnvelopeBody = t.TypeOf<
  typeof pspChiediListaRTInputEnvelopeBody
>;

// required attributes
const pspChiediListaRTInputEnvelopeR = t.interface({
  Body: pspChiediListaRTInputEnvelopeBody
});

// optional attributes
const pspChiediListaRTInputEnvelopeO = t.partial({
  Header: pspChiediListaRTHeader
});

export const pspChiediListaRTInputEnvelope = t.exact(
  t.intersection(
    [pspChiediListaRTInputEnvelopeR, pspChiediListaRTInputEnvelopeO],
    "pspChiediListaRTInputEnvelope"
  )
);

export type pspChiediListaRTInputEnvelope = t.TypeOf<
  typeof pspChiediListaRTInputEnvelope
>;

// required attributes
const pspChiediListaRTInputR = t.interface({
  Envelope: pspChiediListaRTInputEnvelope
});

// optional attributes
const pspChiediListaRTInputO = t.partial({});

export const pspChiediListaRTInput = t.exact(
  t.intersection(
    [pspChiediListaRTInputR, pspChiediListaRTInputO],
    "pspChiediListaRTInput"
  )
);

export type pspChiediListaRTInput = t.TypeOf<typeof pspChiediListaRTInput>;
