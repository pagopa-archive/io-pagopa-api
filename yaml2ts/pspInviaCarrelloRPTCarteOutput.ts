/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import * as t from "io-ts";
import { pspInviaCarrelloRPTCarteResponse_ppt } from "./pspInviaCarrelloRPTCarteResponse_ppt";

// required attributes
const pspInviaCarrelloRPTCarteOutputEnvelopeBodyR = t.interface({});

// optional attributes
const pspInviaCarrelloRPTCarteOutputEnvelopeBodyO = t.partial({
  pspInviaCarrelloRPTCarteResponse: pspInviaCarrelloRPTCarteResponse_ppt
});

export const pspInviaCarrelloRPTCarteOutputEnvelopeBody = t.exact(
  t.intersection(
    [
      pspInviaCarrelloRPTCarteOutputEnvelopeBodyR,
      pspInviaCarrelloRPTCarteOutputEnvelopeBodyO
    ],
    "pspInviaCarrelloRPTCarteOutputEnvelopeBody"
  )
);

export type pspInviaCarrelloRPTCarteOutputEnvelopeBody = t.TypeOf<
  typeof pspInviaCarrelloRPTCarteOutputEnvelopeBody
>;

// required attributes
const pspInviaCarrelloRPTCarteOutputEnvelopeR = t.interface({
  Body: pspInviaCarrelloRPTCarteOutputEnvelopeBody
});

// optional attributes
const pspInviaCarrelloRPTCarteOutputEnvelopeO = t.partial({});

export const pspInviaCarrelloRPTCarteOutputEnvelope = t.exact(
  t.intersection(
    [
      pspInviaCarrelloRPTCarteOutputEnvelopeR,
      pspInviaCarrelloRPTCarteOutputEnvelopeO
    ],
    "pspInviaCarrelloRPTCarteOutputEnvelope"
  )
);

export type pspInviaCarrelloRPTCarteOutputEnvelope = t.TypeOf<
  typeof pspInviaCarrelloRPTCarteOutputEnvelope
>;

// required attributes
const pspInviaCarrelloRPTCarteOutputR = t.interface({
  Envelope: pspInviaCarrelloRPTCarteOutputEnvelope
});

// optional attributes
const pspInviaCarrelloRPTCarteOutputO = t.partial({});

export const pspInviaCarrelloRPTCarteOutput = t.exact(
  t.intersection(
    [pspInviaCarrelloRPTCarteOutputR, pspInviaCarrelloRPTCarteOutputO],
    "pspInviaCarrelloRPTCarteOutput"
  )
);

export type pspInviaCarrelloRPTCarteOutput = t.TypeOf<
  typeof pspInviaCarrelloRPTCarteOutput
>;
