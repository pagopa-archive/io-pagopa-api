/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import * as t from "io-ts";
import { pspInviaAckRTHeader } from "./pspInviaAckRTHeader";
import { pspInviaAckRT_ppt } from "./pspInviaAckRT_ppt";

// required attributes
const pspInviaAckRTInputEnvelopeBodyR = t.interface({
  pspInviaAckRT: pspInviaAckRT_ppt
});

// optional attributes
const pspInviaAckRTInputEnvelopeBodyO = t.partial({});

export const pspInviaAckRTInputEnvelopeBody = t.exact(
  t.intersection(
    [pspInviaAckRTInputEnvelopeBodyR, pspInviaAckRTInputEnvelopeBodyO],
    "pspInviaAckRTInputEnvelopeBody"
  )
);

export type pspInviaAckRTInputEnvelopeBody = t.TypeOf<
  typeof pspInviaAckRTInputEnvelopeBody
>;

// required attributes
const pspInviaAckRTInputEnvelopeR = t.interface({
  Body: pspInviaAckRTInputEnvelopeBody
});

// optional attributes
const pspInviaAckRTInputEnvelopeO = t.partial({
  Header: pspInviaAckRTHeader
});

export const pspInviaAckRTInputEnvelope = t.exact(
  t.intersection(
    [pspInviaAckRTInputEnvelopeR, pspInviaAckRTInputEnvelopeO],
    "pspInviaAckRTInputEnvelope"
  )
);

export type pspInviaAckRTInputEnvelope = t.TypeOf<
  typeof pspInviaAckRTInputEnvelope
>;

// required attributes
const pspInviaAckRTInputR = t.interface({
  Envelope: pspInviaAckRTInputEnvelope
});

// optional attributes
const pspInviaAckRTInputO = t.partial({});

export const pspInviaAckRTInput = t.exact(
  t.intersection(
    [pspInviaAckRTInputR, pspInviaAckRTInputO],
    "pspInviaAckRTInput"
  )
);

export type pspInviaAckRTInput = t.TypeOf<typeof pspInviaAckRTInput>;
