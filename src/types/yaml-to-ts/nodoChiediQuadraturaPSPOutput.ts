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
import { nodoChiediQuadraturaPSPRisposta_ppt } from "./nodoChiediQuadraturaPSPRisposta_ppt";

// required attributes
const nodoChiediQuadraturaPSPOutputEnvelopeBodyR = t.interface({});

// optional attributes
const nodoChiediQuadraturaPSPOutputEnvelopeBodyO = t.partial({
  nodoChiediQuadraturaPSPRisposta: nodoChiediQuadraturaPSPRisposta_ppt
});

export const nodoChiediQuadraturaPSPOutputEnvelopeBody = t.exact(
  t.intersection(
    [
      nodoChiediQuadraturaPSPOutputEnvelopeBodyR,
      nodoChiediQuadraturaPSPOutputEnvelopeBodyO
    ],
    "nodoChiediQuadraturaPSPOutputEnvelopeBody"
  )
);

export type nodoChiediQuadraturaPSPOutputEnvelopeBody = t.TypeOf<
  typeof nodoChiediQuadraturaPSPOutputEnvelopeBody
>;

// required attributes
const nodoChiediQuadraturaPSPOutputEnvelopeR = t.interface({
  Body: nodoChiediQuadraturaPSPOutputEnvelopeBody
});

// optional attributes
const nodoChiediQuadraturaPSPOutputEnvelopeO = t.partial({});

export const nodoChiediQuadraturaPSPOutputEnvelope = t.exact(
  t.intersection(
    [
      nodoChiediQuadraturaPSPOutputEnvelopeR,
      nodoChiediQuadraturaPSPOutputEnvelopeO
    ],
    "nodoChiediQuadraturaPSPOutputEnvelope"
  )
);

export type nodoChiediQuadraturaPSPOutputEnvelope = t.TypeOf<
  typeof nodoChiediQuadraturaPSPOutputEnvelope
>;

// required attributes
const nodoChiediQuadraturaPSPOutputR = t.interface({
  Envelope: nodoChiediQuadraturaPSPOutputEnvelope
});

// optional attributes
const nodoChiediQuadraturaPSPOutputO = t.partial({});

export const nodoChiediQuadraturaPSPOutput = t.exact(
  t.intersection(
    [nodoChiediQuadraturaPSPOutputR, nodoChiediQuadraturaPSPOutputO],
    "nodoChiediQuadraturaPSPOutput"
  )
);

export type nodoChiediQuadraturaPSPOutput = t.TypeOf<
  typeof nodoChiediQuadraturaPSPOutput
>;
