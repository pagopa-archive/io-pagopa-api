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
import { nodoChiediElencoQuadraturePSPRisposta_ppt } from "./nodoChiediElencoQuadraturePSPRisposta_ppt";

// required attributes
const nodoChiediElencoQuadraturePSPOutputEnvelopeBodyR = t.interface({});

// optional attributes
const nodoChiediElencoQuadraturePSPOutputEnvelopeBodyO = t.partial({
  nodoChiediElencoQuadraturePSPRisposta: nodoChiediElencoQuadraturePSPRisposta_ppt
});

export const nodoChiediElencoQuadraturePSPOutputEnvelopeBody = t.exact(
  t.intersection(
    [
      nodoChiediElencoQuadraturePSPOutputEnvelopeBodyR,
      nodoChiediElencoQuadraturePSPOutputEnvelopeBodyO
    ],
    "nodoChiediElencoQuadraturePSPOutputEnvelopeBody"
  )
);

export type nodoChiediElencoQuadraturePSPOutputEnvelopeBody = t.TypeOf<
  typeof nodoChiediElencoQuadraturePSPOutputEnvelopeBody
>;

// required attributes
const nodoChiediElencoQuadraturePSPOutputEnvelopeR = t.interface({
  Body: nodoChiediElencoQuadraturePSPOutputEnvelopeBody
});

// optional attributes
const nodoChiediElencoQuadraturePSPOutputEnvelopeO = t.partial({});

export const nodoChiediElencoQuadraturePSPOutputEnvelope = t.exact(
  t.intersection(
    [
      nodoChiediElencoQuadraturePSPOutputEnvelopeR,
      nodoChiediElencoQuadraturePSPOutputEnvelopeO
    ],
    "nodoChiediElencoQuadraturePSPOutputEnvelope"
  )
);

export type nodoChiediElencoQuadraturePSPOutputEnvelope = t.TypeOf<
  typeof nodoChiediElencoQuadraturePSPOutputEnvelope
>;

// required attributes
const nodoChiediElencoQuadraturePSPOutputR = t.interface({
  Envelope: nodoChiediElencoQuadraturePSPOutputEnvelope
});

// optional attributes
const nodoChiediElencoQuadraturePSPOutputO = t.partial({});

export const nodoChiediElencoQuadraturePSPOutput = t.exact(
  t.intersection(
    [
      nodoChiediElencoQuadraturePSPOutputR,
      nodoChiediElencoQuadraturePSPOutputO
    ],
    "nodoChiediElencoQuadraturePSPOutput"
  )
);

export type nodoChiediElencoQuadraturePSPOutput = t.TypeOf<
  typeof nodoChiediElencoQuadraturePSPOutput
>;
