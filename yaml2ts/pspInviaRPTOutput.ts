/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import * as t from "io-ts";
import { pspInviaRPTResponse_ppt } from "./pspInviaRPTResponse_ppt";

// required attributes
const pspInviaRPTOutputEnvelopeBodyR = t.interface({});

// optional attributes
const pspInviaRPTOutputEnvelopeBodyO = t.partial({
  pspInviaRPTResponse: pspInviaRPTResponse_ppt
});

export const pspInviaRPTOutputEnvelopeBody = t.exact(
  t.intersection(
    [pspInviaRPTOutputEnvelopeBodyR, pspInviaRPTOutputEnvelopeBodyO],
    "pspInviaRPTOutputEnvelopeBody"
  )
);

export type pspInviaRPTOutputEnvelopeBody = t.TypeOf<
  typeof pspInviaRPTOutputEnvelopeBody
>;

// required attributes
const pspInviaRPTOutputEnvelopeR = t.interface({
  Body: pspInviaRPTOutputEnvelopeBody
});

// optional attributes
const pspInviaRPTOutputEnvelopeO = t.partial({});

export const pspInviaRPTOutputEnvelope = t.exact(
  t.intersection(
    [pspInviaRPTOutputEnvelopeR, pspInviaRPTOutputEnvelopeO],
    "pspInviaRPTOutputEnvelope"
  )
);

export type pspInviaRPTOutputEnvelope = t.TypeOf<
  typeof pspInviaRPTOutputEnvelope
>;

// required attributes
const pspInviaRPTOutputR = t.interface({
  Envelope: pspInviaRPTOutputEnvelope
});

// optional attributes
const pspInviaRPTOutputO = t.partial({});

export const pspInviaRPTOutput = t.exact(
  t.intersection([pspInviaRPTOutputR, pspInviaRPTOutputO], "pspInviaRPTOutput")
);

export type pspInviaRPTOutput = t.TypeOf<typeof pspInviaRPTOutput>;
