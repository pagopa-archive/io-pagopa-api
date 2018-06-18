/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import * as t from "io-ts";
import { pspInviaCarrelloRPTResponse_ppt } from "./pspInviaCarrelloRPTResponse_ppt";

// required attributes
const pspInviaCarrelloRPTOutputEnvelopeBodyR = t.interface({});

// optional attributes
const pspInviaCarrelloRPTOutputEnvelopeBodyO = t.partial({
  pspInviaCarrelloRPTResponse: pspInviaCarrelloRPTResponse_ppt
});

export const pspInviaCarrelloRPTOutputEnvelopeBody = t.exact(
  t.intersection(
    [
      pspInviaCarrelloRPTOutputEnvelopeBodyR,
      pspInviaCarrelloRPTOutputEnvelopeBodyO
    ],
    "pspInviaCarrelloRPTOutputEnvelopeBody"
  )
);

export type pspInviaCarrelloRPTOutputEnvelopeBody = t.TypeOf<
  typeof pspInviaCarrelloRPTOutputEnvelopeBody
>;

// required attributes
const pspInviaCarrelloRPTOutputEnvelopeR = t.interface({
  Body: pspInviaCarrelloRPTOutputEnvelopeBody
});

// optional attributes
const pspInviaCarrelloRPTOutputEnvelopeO = t.partial({});

export const pspInviaCarrelloRPTOutputEnvelope = t.exact(
  t.intersection(
    [pspInviaCarrelloRPTOutputEnvelopeR, pspInviaCarrelloRPTOutputEnvelopeO],
    "pspInviaCarrelloRPTOutputEnvelope"
  )
);

export type pspInviaCarrelloRPTOutputEnvelope = t.TypeOf<
  typeof pspInviaCarrelloRPTOutputEnvelope
>;

// required attributes
const pspInviaCarrelloRPTOutputR = t.interface({
  Envelope: pspInviaCarrelloRPTOutputEnvelope
});

// optional attributes
const pspInviaCarrelloRPTOutputO = t.partial({});

export const pspInviaCarrelloRPTOutput = t.exact(
  t.intersection(
    [pspInviaCarrelloRPTOutputR, pspInviaCarrelloRPTOutputO],
    "pspInviaCarrelloRPTOutput"
  )
);

export type pspInviaCarrelloRPTOutput = t.TypeOf<
  typeof pspInviaCarrelloRPTOutput
>;
