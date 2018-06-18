/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import * as t from "io-ts";
import { pspInviaCarrelloRPTHeader } from "./pspInviaCarrelloRPTHeader";
import { pspInviaCarrelloRPT_ppt } from "./pspInviaCarrelloRPT_ppt";

// required attributes
const pspInviaCarrelloRPTInputEnvelopeBodyR = t.interface({
  pspInviaCarrelloRPT: pspInviaCarrelloRPT_ppt
});

// optional attributes
const pspInviaCarrelloRPTInputEnvelopeBodyO = t.partial({});

export const pspInviaCarrelloRPTInputEnvelopeBody = t.exact(
  t.intersection(
    [
      pspInviaCarrelloRPTInputEnvelopeBodyR,
      pspInviaCarrelloRPTInputEnvelopeBodyO
    ],
    "pspInviaCarrelloRPTInputEnvelopeBody"
  )
);

export type pspInviaCarrelloRPTInputEnvelopeBody = t.TypeOf<
  typeof pspInviaCarrelloRPTInputEnvelopeBody
>;

// required attributes
const pspInviaCarrelloRPTInputEnvelopeR = t.interface({
  Body: pspInviaCarrelloRPTInputEnvelopeBody
});

// optional attributes
const pspInviaCarrelloRPTInputEnvelopeO = t.partial({
  Header: pspInviaCarrelloRPTHeader
});

export const pspInviaCarrelloRPTInputEnvelope = t.exact(
  t.intersection(
    [pspInviaCarrelloRPTInputEnvelopeR, pspInviaCarrelloRPTInputEnvelopeO],
    "pspInviaCarrelloRPTInputEnvelope"
  )
);

export type pspInviaCarrelloRPTInputEnvelope = t.TypeOf<
  typeof pspInviaCarrelloRPTInputEnvelope
>;

// required attributes
const pspInviaCarrelloRPTInputR = t.interface({
  Envelope: pspInviaCarrelloRPTInputEnvelope
});

// optional attributes
const pspInviaCarrelloRPTInputO = t.partial({});

export const pspInviaCarrelloRPTInput = t.exact(
  t.intersection(
    [pspInviaCarrelloRPTInputR, pspInviaCarrelloRPTInputO],
    "pspInviaCarrelloRPTInput"
  )
);

export type pspInviaCarrelloRPTInput = t.TypeOf<
  typeof pspInviaCarrelloRPTInput
>;
