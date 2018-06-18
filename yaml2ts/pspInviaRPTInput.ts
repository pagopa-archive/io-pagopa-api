/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import * as t from "io-ts";
import { pspInviaRPTHeader } from "./pspInviaRPTHeader";
import { pspInviaRPT_ppt } from "./pspInviaRPT_ppt";

// required attributes
const pspInviaRPTInputEnvelopeBodyR = t.interface({
  pspInviaRPT: pspInviaRPT_ppt
});

// optional attributes
const pspInviaRPTInputEnvelopeBodyO = t.partial({});

export const pspInviaRPTInputEnvelopeBody = t.exact(
  t.intersection(
    [pspInviaRPTInputEnvelopeBodyR, pspInviaRPTInputEnvelopeBodyO],
    "pspInviaRPTInputEnvelopeBody"
  )
);

export type pspInviaRPTInputEnvelopeBody = t.TypeOf<
  typeof pspInviaRPTInputEnvelopeBody
>;

// required attributes
const pspInviaRPTInputEnvelopeR = t.interface({
  Body: pspInviaRPTInputEnvelopeBody
});

// optional attributes
const pspInviaRPTInputEnvelopeO = t.partial({
  Header: pspInviaRPTHeader
});

export const pspInviaRPTInputEnvelope = t.exact(
  t.intersection(
    [pspInviaRPTInputEnvelopeR, pspInviaRPTInputEnvelopeO],
    "pspInviaRPTInputEnvelope"
  )
);

export type pspInviaRPTInputEnvelope = t.TypeOf<
  typeof pspInviaRPTInputEnvelope
>;

// required attributes
const pspInviaRPTInputR = t.interface({
  Envelope: pspInviaRPTInputEnvelope
});

// optional attributes
const pspInviaRPTInputO = t.partial({});

export const pspInviaRPTInput = t.exact(
  t.intersection([pspInviaRPTInputR, pspInviaRPTInputO], "pspInviaRPTInput")
);

export type pspInviaRPTInput = t.TypeOf<typeof pspInviaRPTInput>;
