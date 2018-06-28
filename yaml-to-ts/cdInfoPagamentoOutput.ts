/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import * as t from "io-ts";
import { cdInfoPagamentoResponse_ppt } from "./cdInfoPagamentoResponse_ppt";

// required attributes
const cdInfoPagamentoOutputEnvelopeBodyR = t.interface({});

// optional attributes
const cdInfoPagamentoOutputEnvelopeBodyO = t.partial({
  cdInfoPagamentoResponse: cdInfoPagamentoResponse_ppt
});

export const cdInfoPagamentoOutputEnvelopeBody = t.exact(
  t.intersection(
    [cdInfoPagamentoOutputEnvelopeBodyR, cdInfoPagamentoOutputEnvelopeBodyO],
    "cdInfoPagamentoOutputEnvelopeBody"
  )
);

export type cdInfoPagamentoOutputEnvelopeBody = t.TypeOf<
  typeof cdInfoPagamentoOutputEnvelopeBody
>;

// required attributes
const cdInfoPagamentoOutputEnvelopeR = t.interface({
  Body: cdInfoPagamentoOutputEnvelopeBody
});

// optional attributes
const cdInfoPagamentoOutputEnvelopeO = t.partial({});

export const cdInfoPagamentoOutputEnvelope = t.exact(
  t.intersection(
    [cdInfoPagamentoOutputEnvelopeR, cdInfoPagamentoOutputEnvelopeO],
    "cdInfoPagamentoOutputEnvelope"
  )
);

export type cdInfoPagamentoOutputEnvelope = t.TypeOf<
  typeof cdInfoPagamentoOutputEnvelope
>;

// required attributes
const cdInfoPagamentoOutputR = t.interface({
  Envelope: cdInfoPagamentoOutputEnvelope
});

// optional attributes
const cdInfoPagamentoOutputO = t.partial({});

export const cdInfoPagamentoOutput = t.exact(
  t.intersection(
    [cdInfoPagamentoOutputR, cdInfoPagamentoOutputO],
    "cdInfoPagamentoOutput"
  )
);

export type cdInfoPagamentoOutput = t.TypeOf<typeof cdInfoPagamentoOutput>;
