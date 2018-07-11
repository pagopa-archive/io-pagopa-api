/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:variable-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import * as t from "io-ts";
import { nodoInviaFlussoRendicontazioneHeader } from "./nodoInviaFlussoRendicontazioneHeader";
import { nodoInviaFlussoRendicontazione_ppt } from "./nodoInviaFlussoRendicontazione_ppt";

// required attributes
const nodoInviaFlussoRendicontazioneInputEnvelopeBodyR = t.interface({
  nodoInviaFlussoRendicontazione: nodoInviaFlussoRendicontazione_ppt
});

// optional attributes
const nodoInviaFlussoRendicontazioneInputEnvelopeBodyO = t.partial({});

export const nodoInviaFlussoRendicontazioneInputEnvelopeBody = t.exact(
  t.intersection(
    [
      nodoInviaFlussoRendicontazioneInputEnvelopeBodyR,
      nodoInviaFlussoRendicontazioneInputEnvelopeBodyO
    ],
    "nodoInviaFlussoRendicontazioneInputEnvelopeBody"
  )
);

export type nodoInviaFlussoRendicontazioneInputEnvelopeBody = t.TypeOf<
  typeof nodoInviaFlussoRendicontazioneInputEnvelopeBody
>;

// required attributes
const nodoInviaFlussoRendicontazioneInputEnvelopeR = t.interface({
  Body: nodoInviaFlussoRendicontazioneInputEnvelopeBody
});

// optional attributes
const nodoInviaFlussoRendicontazioneInputEnvelopeO = t.partial({
  Header: nodoInviaFlussoRendicontazioneHeader
});

export const nodoInviaFlussoRendicontazioneInputEnvelope = t.exact(
  t.intersection(
    [
      nodoInviaFlussoRendicontazioneInputEnvelopeR,
      nodoInviaFlussoRendicontazioneInputEnvelopeO
    ],
    "nodoInviaFlussoRendicontazioneInputEnvelope"
  )
);

export type nodoInviaFlussoRendicontazioneInputEnvelope = t.TypeOf<
  typeof nodoInviaFlussoRendicontazioneInputEnvelope
>;

// required attributes
const nodoInviaFlussoRendicontazioneInputR = t.interface({
  Envelope: nodoInviaFlussoRendicontazioneInputEnvelope
});

// optional attributes
const nodoInviaFlussoRendicontazioneInputO = t.partial({});

export const nodoInviaFlussoRendicontazioneInput = t.exact(
  t.intersection(
    [
      nodoInviaFlussoRendicontazioneInputR,
      nodoInviaFlussoRendicontazioneInputO
    ],
    "nodoInviaFlussoRendicontazioneInput"
  )
);

export type nodoInviaFlussoRendicontazioneInput = t.TypeOf<
  typeof nodoInviaFlussoRendicontazioneInput
>;
