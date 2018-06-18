/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import * as t from "io-ts";
import { pspNotificaCancellazioneRPTHeader } from "./pspNotificaCancellazioneRPTHeader";
import { pspNotificaCancellazioneRPT_ppt } from "./pspNotificaCancellazioneRPT_ppt";

// required attributes
const pspNotificaCancellazioneRPTInputEnvelopeBodyR = t.interface({
  pspNotificaCancellazioneRPT: pspNotificaCancellazioneRPT_ppt
});

// optional attributes
const pspNotificaCancellazioneRPTInputEnvelopeBodyO = t.partial({});

export const pspNotificaCancellazioneRPTInputEnvelopeBody = t.exact(
  t.intersection(
    [
      pspNotificaCancellazioneRPTInputEnvelopeBodyR,
      pspNotificaCancellazioneRPTInputEnvelopeBodyO
    ],
    "pspNotificaCancellazioneRPTInputEnvelopeBody"
  )
);

export type pspNotificaCancellazioneRPTInputEnvelopeBody = t.TypeOf<
  typeof pspNotificaCancellazioneRPTInputEnvelopeBody
>;

// required attributes
const pspNotificaCancellazioneRPTInputEnvelopeR = t.interface({
  Body: pspNotificaCancellazioneRPTInputEnvelopeBody
});

// optional attributes
const pspNotificaCancellazioneRPTInputEnvelopeO = t.partial({
  Header: pspNotificaCancellazioneRPTHeader
});

export const pspNotificaCancellazioneRPTInputEnvelope = t.exact(
  t.intersection(
    [
      pspNotificaCancellazioneRPTInputEnvelopeR,
      pspNotificaCancellazioneRPTInputEnvelopeO
    ],
    "pspNotificaCancellazioneRPTInputEnvelope"
  )
);

export type pspNotificaCancellazioneRPTInputEnvelope = t.TypeOf<
  typeof pspNotificaCancellazioneRPTInputEnvelope
>;

// required attributes
const pspNotificaCancellazioneRPTInputR = t.interface({
  Envelope: pspNotificaCancellazioneRPTInputEnvelope
});

// optional attributes
const pspNotificaCancellazioneRPTInputO = t.partial({});

export const pspNotificaCancellazioneRPTInput = t.exact(
  t.intersection(
    [pspNotificaCancellazioneRPTInputR, pspNotificaCancellazioneRPTInputO],
    "pspNotificaCancellazioneRPTInput"
  )
);

export type pspNotificaCancellazioneRPTInput = t.TypeOf<
  typeof pspNotificaCancellazioneRPTInput
>;
