/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import * as t from "io-ts";
import { pspNotificaCancellazioneRPTResponse_ppt } from "./pspNotificaCancellazioneRPTResponse_ppt";

// required attributes
const pspNotificaCancellazioneRPTOutputEnvelopeBodyR = t.interface({});

// optional attributes
const pspNotificaCancellazioneRPTOutputEnvelopeBodyO = t.partial({
  pspNotificaCancellazioneRPTResponse: pspNotificaCancellazioneRPTResponse_ppt
});

export const pspNotificaCancellazioneRPTOutputEnvelopeBody = t.exact(
  t.intersection(
    [
      pspNotificaCancellazioneRPTOutputEnvelopeBodyR,
      pspNotificaCancellazioneRPTOutputEnvelopeBodyO
    ],
    "pspNotificaCancellazioneRPTOutputEnvelopeBody"
  )
);

export type pspNotificaCancellazioneRPTOutputEnvelopeBody = t.TypeOf<
  typeof pspNotificaCancellazioneRPTOutputEnvelopeBody
>;

// required attributes
const pspNotificaCancellazioneRPTOutputEnvelopeR = t.interface({
  Body: pspNotificaCancellazioneRPTOutputEnvelopeBody
});

// optional attributes
const pspNotificaCancellazioneRPTOutputEnvelopeO = t.partial({});

export const pspNotificaCancellazioneRPTOutputEnvelope = t.exact(
  t.intersection(
    [
      pspNotificaCancellazioneRPTOutputEnvelopeR,
      pspNotificaCancellazioneRPTOutputEnvelopeO
    ],
    "pspNotificaCancellazioneRPTOutputEnvelope"
  )
);

export type pspNotificaCancellazioneRPTOutputEnvelope = t.TypeOf<
  typeof pspNotificaCancellazioneRPTOutputEnvelope
>;

// required attributes
const pspNotificaCancellazioneRPTOutputR = t.interface({
  Envelope: pspNotificaCancellazioneRPTOutputEnvelope
});

// optional attributes
const pspNotificaCancellazioneRPTOutputO = t.partial({});

export const pspNotificaCancellazioneRPTOutput = t.exact(
  t.intersection(
    [pspNotificaCancellazioneRPTOutputR, pspNotificaCancellazioneRPTOutputO],
    "pspNotificaCancellazioneRPTOutput"
  )
);

export type pspNotificaCancellazioneRPTOutput = t.TypeOf<
  typeof pspNotificaCancellazioneRPTOutput
>;
