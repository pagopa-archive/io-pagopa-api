/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import * as t from "io-ts";
import { pspInviaCarrelloRPTCarteHeader } from "./pspInviaCarrelloRPTCarteHeader";
import { pspInviaCarrelloRPTCarte_ppt } from "./pspInviaCarrelloRPTCarte_ppt";

// required attributes
const pspInviaCarrelloRPTCarteInputEnvelopeBodyR = t.interface({
  pspInviaCarrelloRPTCarte: pspInviaCarrelloRPTCarte_ppt
});

// optional attributes
const pspInviaCarrelloRPTCarteInputEnvelopeBodyO = t.partial({});

export const pspInviaCarrelloRPTCarteInputEnvelopeBody = t.exact(
  t.intersection(
    [
      pspInviaCarrelloRPTCarteInputEnvelopeBodyR,
      pspInviaCarrelloRPTCarteInputEnvelopeBodyO
    ],
    "pspInviaCarrelloRPTCarteInputEnvelopeBody"
  )
);

export type pspInviaCarrelloRPTCarteInputEnvelopeBody = t.TypeOf<
  typeof pspInviaCarrelloRPTCarteInputEnvelopeBody
>;

// required attributes
const pspInviaCarrelloRPTCarteInputEnvelopeR = t.interface({
  Body: pspInviaCarrelloRPTCarteInputEnvelopeBody
});

// optional attributes
const pspInviaCarrelloRPTCarteInputEnvelopeO = t.partial({
  Header: pspInviaCarrelloRPTCarteHeader
});

export const pspInviaCarrelloRPTCarteInputEnvelope = t.exact(
  t.intersection(
    [
      pspInviaCarrelloRPTCarteInputEnvelopeR,
      pspInviaCarrelloRPTCarteInputEnvelopeO
    ],
    "pspInviaCarrelloRPTCarteInputEnvelope"
  )
);

export type pspInviaCarrelloRPTCarteInputEnvelope = t.TypeOf<
  typeof pspInviaCarrelloRPTCarteInputEnvelope
>;

// required attributes
const pspInviaCarrelloRPTCarteInputR = t.interface({
  Envelope: pspInviaCarrelloRPTCarteInputEnvelope
});

// optional attributes
const pspInviaCarrelloRPTCarteInputO = t.partial({});

export const pspInviaCarrelloRPTCarteInput = t.exact(
  t.intersection(
    [pspInviaCarrelloRPTCarteInputR, pspInviaCarrelloRPTCarteInputO],
    "pspInviaCarrelloRPTCarteInput"
  )
);

export type pspInviaCarrelloRPTCarteInput = t.TypeOf<
  typeof pspInviaCarrelloRPTCarteInput
>;
