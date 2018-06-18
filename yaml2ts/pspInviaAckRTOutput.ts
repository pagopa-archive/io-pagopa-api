/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import * as t from "io-ts";
import { pspInviaAckRTResponse_ppt } from "./pspInviaAckRTResponse_ppt";

// required attributes
const pspInviaAckRTOutputEnvelopeBodyR = t.interface({});

// optional attributes
const pspInviaAckRTOutputEnvelopeBodyO = t.partial({
  pspInviaAckRTResponse: pspInviaAckRTResponse_ppt
});

export const pspInviaAckRTOutputEnvelopeBody = t.exact(
  t.intersection(
    [pspInviaAckRTOutputEnvelopeBodyR, pspInviaAckRTOutputEnvelopeBodyO],
    "pspInviaAckRTOutputEnvelopeBody"
  )
);

export type pspInviaAckRTOutputEnvelopeBody = t.TypeOf<
  typeof pspInviaAckRTOutputEnvelopeBody
>;

// required attributes
const pspInviaAckRTOutputEnvelopeR = t.interface({
  Body: pspInviaAckRTOutputEnvelopeBody
});

// optional attributes
const pspInviaAckRTOutputEnvelopeO = t.partial({});

export const pspInviaAckRTOutputEnvelope = t.exact(
  t.intersection(
    [pspInviaAckRTOutputEnvelopeR, pspInviaAckRTOutputEnvelopeO],
    "pspInviaAckRTOutputEnvelope"
  )
);

export type pspInviaAckRTOutputEnvelope = t.TypeOf<
  typeof pspInviaAckRTOutputEnvelope
>;

// required attributes
const pspInviaAckRTOutputR = t.interface({
  Envelope: pspInviaAckRTOutputEnvelope
});

// optional attributes
const pspInviaAckRTOutputO = t.partial({});

export const pspInviaAckRTOutput = t.exact(
  t.intersection(
    [pspInviaAckRTOutputR, pspInviaAckRTOutputO],
    "pspInviaAckRTOutput"
  )
);

export type pspInviaAckRTOutput = t.TypeOf<typeof pspInviaAckRTOutput>;
