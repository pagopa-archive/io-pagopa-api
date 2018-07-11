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
import { nodoChiediInformativaPARisposta_ppt } from "./nodoChiediInformativaPARisposta_ppt";

// required attributes
const nodoChiediInformativaPAOutputEnvelopeBodyR = t.interface({});

// optional attributes
const nodoChiediInformativaPAOutputEnvelopeBodyO = t.partial({
  nodoChiediInformativaPARisposta: nodoChiediInformativaPARisposta_ppt
});

export const nodoChiediInformativaPAOutputEnvelopeBody = t.exact(
  t.intersection(
    [
      nodoChiediInformativaPAOutputEnvelopeBodyR,
      nodoChiediInformativaPAOutputEnvelopeBodyO
    ],
    "nodoChiediInformativaPAOutputEnvelopeBody"
  )
);

export type nodoChiediInformativaPAOutputEnvelopeBody = t.TypeOf<
  typeof nodoChiediInformativaPAOutputEnvelopeBody
>;

// required attributes
const nodoChiediInformativaPAOutputEnvelopeR = t.interface({
  Body: nodoChiediInformativaPAOutputEnvelopeBody
});

// optional attributes
const nodoChiediInformativaPAOutputEnvelopeO = t.partial({});

export const nodoChiediInformativaPAOutputEnvelope = t.exact(
  t.intersection(
    [
      nodoChiediInformativaPAOutputEnvelopeR,
      nodoChiediInformativaPAOutputEnvelopeO
    ],
    "nodoChiediInformativaPAOutputEnvelope"
  )
);

export type nodoChiediInformativaPAOutputEnvelope = t.TypeOf<
  typeof nodoChiediInformativaPAOutputEnvelope
>;

// required attributes
const nodoChiediInformativaPAOutputR = t.interface({
  Envelope: nodoChiediInformativaPAOutputEnvelope
});

// optional attributes
const nodoChiediInformativaPAOutputO = t.partial({});

export const nodoChiediInformativaPAOutput = t.exact(
  t.intersection(
    [nodoChiediInformativaPAOutputR, nodoChiediInformativaPAOutputO],
    "nodoChiediInformativaPAOutput"
  )
);

export type nodoChiediInformativaPAOutput = t.TypeOf<
  typeof nodoChiediInformativaPAOutput
>;
