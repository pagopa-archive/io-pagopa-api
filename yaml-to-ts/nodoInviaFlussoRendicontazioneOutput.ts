/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import * as t from "io-ts";
import { nodoInviaFlussoRendicontazioneRisposta_ppt } from "./nodoInviaFlussoRendicontazioneRisposta_ppt";

// required attributes
const nodoInviaFlussoRendicontazioneOutputEnvelopeBodyR = t.interface({});

// optional attributes
const nodoInviaFlussoRendicontazioneOutputEnvelopeBodyO = t.partial({
  nodoInviaFlussoRendicontazioneRisposta: nodoInviaFlussoRendicontazioneRisposta_ppt
});

export const nodoInviaFlussoRendicontazioneOutputEnvelopeBody = t.exact(
  t.intersection(
    [
      nodoInviaFlussoRendicontazioneOutputEnvelopeBodyR,
      nodoInviaFlussoRendicontazioneOutputEnvelopeBodyO
    ],
    "nodoInviaFlussoRendicontazioneOutputEnvelopeBody"
  )
);

export type nodoInviaFlussoRendicontazioneOutputEnvelopeBody = t.TypeOf<
  typeof nodoInviaFlussoRendicontazioneOutputEnvelopeBody
>;

// required attributes
const nodoInviaFlussoRendicontazioneOutputEnvelopeR = t.interface({
  Body: nodoInviaFlussoRendicontazioneOutputEnvelopeBody
});

// optional attributes
const nodoInviaFlussoRendicontazioneOutputEnvelopeO = t.partial({});

export const nodoInviaFlussoRendicontazioneOutputEnvelope = t.exact(
  t.intersection(
    [
      nodoInviaFlussoRendicontazioneOutputEnvelopeR,
      nodoInviaFlussoRendicontazioneOutputEnvelopeO
    ],
    "nodoInviaFlussoRendicontazioneOutputEnvelope"
  )
);

export type nodoInviaFlussoRendicontazioneOutputEnvelope = t.TypeOf<
  typeof nodoInviaFlussoRendicontazioneOutputEnvelope
>;

// required attributes
const nodoInviaFlussoRendicontazioneOutputR = t.interface({
  Envelope: nodoInviaFlussoRendicontazioneOutputEnvelope
});

// optional attributes
const nodoInviaFlussoRendicontazioneOutputO = t.partial({});

export const nodoInviaFlussoRendicontazioneOutput = t.exact(
  t.intersection(
    [
      nodoInviaFlussoRendicontazioneOutputR,
      nodoInviaFlussoRendicontazioneOutputO
    ],
    "nodoInviaFlussoRendicontazioneOutput"
  )
);

export type nodoInviaFlussoRendicontazioneOutput = t.TypeOf<
  typeof nodoInviaFlussoRendicontazioneOutput
>;
