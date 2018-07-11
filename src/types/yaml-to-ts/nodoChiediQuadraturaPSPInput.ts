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
import { nodoChiediQuadraturaPSPHeader } from "./nodoChiediQuadraturaPSPHeader";
import { nodoChiediQuadraturaPSP_ppt } from "./nodoChiediQuadraturaPSP_ppt";

// required attributes
const nodoChiediQuadraturaPSPInputEnvelopeBodyR = t.interface({
  nodoChiediQuadraturaPSP: nodoChiediQuadraturaPSP_ppt
});

// optional attributes
const nodoChiediQuadraturaPSPInputEnvelopeBodyO = t.partial({});

export const nodoChiediQuadraturaPSPInputEnvelopeBody = t.exact(
  t.intersection(
    [
      nodoChiediQuadraturaPSPInputEnvelopeBodyR,
      nodoChiediQuadraturaPSPInputEnvelopeBodyO
    ],
    "nodoChiediQuadraturaPSPInputEnvelopeBody"
  )
);

export type nodoChiediQuadraturaPSPInputEnvelopeBody = t.TypeOf<
  typeof nodoChiediQuadraturaPSPInputEnvelopeBody
>;

// required attributes
const nodoChiediQuadraturaPSPInputEnvelopeR = t.interface({
  Body: nodoChiediQuadraturaPSPInputEnvelopeBody
});

// optional attributes
const nodoChiediQuadraturaPSPInputEnvelopeO = t.partial({
  Header: nodoChiediQuadraturaPSPHeader
});

export const nodoChiediQuadraturaPSPInputEnvelope = t.exact(
  t.intersection(
    [
      nodoChiediQuadraturaPSPInputEnvelopeR,
      nodoChiediQuadraturaPSPInputEnvelopeO
    ],
    "nodoChiediQuadraturaPSPInputEnvelope"
  )
);

export type nodoChiediQuadraturaPSPInputEnvelope = t.TypeOf<
  typeof nodoChiediQuadraturaPSPInputEnvelope
>;

// required attributes
const nodoChiediQuadraturaPSPInputR = t.interface({
  Envelope: nodoChiediQuadraturaPSPInputEnvelope
});

// optional attributes
const nodoChiediQuadraturaPSPInputO = t.partial({});

export const nodoChiediQuadraturaPSPInput = t.exact(
  t.intersection(
    [nodoChiediQuadraturaPSPInputR, nodoChiediQuadraturaPSPInputO],
    "nodoChiediQuadraturaPSPInput"
  )
);

export type nodoChiediQuadraturaPSPInput = t.TypeOf<
  typeof nodoChiediQuadraturaPSPInput
>;
