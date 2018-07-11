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
import { nodoChiediInformativaPAHeader } from "./nodoChiediInformativaPAHeader";
import { nodoChiediInformativaPA_ppt } from "./nodoChiediInformativaPA_ppt";

// required attributes
const nodoChiediInformativaPAInputEnvelopeBodyR = t.interface({
  nodoChiediInformativaPA: nodoChiediInformativaPA_ppt
});

// optional attributes
const nodoChiediInformativaPAInputEnvelopeBodyO = t.partial({});

export const nodoChiediInformativaPAInputEnvelopeBody = t.exact(
  t.intersection(
    [
      nodoChiediInformativaPAInputEnvelopeBodyR,
      nodoChiediInformativaPAInputEnvelopeBodyO
    ],
    "nodoChiediInformativaPAInputEnvelopeBody"
  )
);

export type nodoChiediInformativaPAInputEnvelopeBody = t.TypeOf<
  typeof nodoChiediInformativaPAInputEnvelopeBody
>;

// required attributes
const nodoChiediInformativaPAInputEnvelopeR = t.interface({
  Body: nodoChiediInformativaPAInputEnvelopeBody
});

// optional attributes
const nodoChiediInformativaPAInputEnvelopeO = t.partial({
  Header: nodoChiediInformativaPAHeader
});

export const nodoChiediInformativaPAInputEnvelope = t.exact(
  t.intersection(
    [
      nodoChiediInformativaPAInputEnvelopeR,
      nodoChiediInformativaPAInputEnvelopeO
    ],
    "nodoChiediInformativaPAInputEnvelope"
  )
);

export type nodoChiediInformativaPAInputEnvelope = t.TypeOf<
  typeof nodoChiediInformativaPAInputEnvelope
>;

// required attributes
const nodoChiediInformativaPAInputR = t.interface({
  Envelope: nodoChiediInformativaPAInputEnvelope
});

// optional attributes
const nodoChiediInformativaPAInputO = t.partial({});

export const nodoChiediInformativaPAInput = t.exact(
  t.intersection(
    [nodoChiediInformativaPAInputR, nodoChiediInformativaPAInputO],
    "nodoChiediInformativaPAInput"
  )
);

export type nodoChiediInformativaPAInput = t.TypeOf<
  typeof nodoChiediInformativaPAInput
>;
