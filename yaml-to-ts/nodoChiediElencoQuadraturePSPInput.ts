/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import * as t from "io-ts";
import { nodoChiediElencoQuadraturePSPHeader } from "./nodoChiediElencoQuadraturePSPHeader";
import { nodoChiediElencoQuadraturePSP_ppt } from "./nodoChiediElencoQuadraturePSP_ppt";

// required attributes
const nodoChiediElencoQuadraturePSPInputEnvelopeBodyR = t.interface({
  nodoChiediElencoQuadraturePSP: nodoChiediElencoQuadraturePSP_ppt
});

// optional attributes
const nodoChiediElencoQuadraturePSPInputEnvelopeBodyO = t.partial({});

export const nodoChiediElencoQuadraturePSPInputEnvelopeBody = t.exact(
  t.intersection(
    [
      nodoChiediElencoQuadraturePSPInputEnvelopeBodyR,
      nodoChiediElencoQuadraturePSPInputEnvelopeBodyO
    ],
    "nodoChiediElencoQuadraturePSPInputEnvelopeBody"
  )
);

export type nodoChiediElencoQuadraturePSPInputEnvelopeBody = t.TypeOf<
  typeof nodoChiediElencoQuadraturePSPInputEnvelopeBody
>;

// required attributes
const nodoChiediElencoQuadraturePSPInputEnvelopeR = t.interface({
  Body: nodoChiediElencoQuadraturePSPInputEnvelopeBody
});

// optional attributes
const nodoChiediElencoQuadraturePSPInputEnvelopeO = t.partial({
  Header: nodoChiediElencoQuadraturePSPHeader
});

export const nodoChiediElencoQuadraturePSPInputEnvelope = t.exact(
  t.intersection(
    [
      nodoChiediElencoQuadraturePSPInputEnvelopeR,
      nodoChiediElencoQuadraturePSPInputEnvelopeO
    ],
    "nodoChiediElencoQuadraturePSPInputEnvelope"
  )
);

export type nodoChiediElencoQuadraturePSPInputEnvelope = t.TypeOf<
  typeof nodoChiediElencoQuadraturePSPInputEnvelope
>;

// required attributes
const nodoChiediElencoQuadraturePSPInputR = t.interface({
  Envelope: nodoChiediElencoQuadraturePSPInputEnvelope
});

// optional attributes
const nodoChiediElencoQuadraturePSPInputO = t.partial({});

export const nodoChiediElencoQuadraturePSPInput = t.exact(
  t.intersection(
    [nodoChiediElencoQuadraturePSPInputR, nodoChiediElencoQuadraturePSPInputO],
    "nodoChiediElencoQuadraturePSPInput"
  )
);

export type nodoChiediElencoQuadraturePSPInput = t.TypeOf<
  typeof nodoChiediElencoQuadraturePSPInput
>;
