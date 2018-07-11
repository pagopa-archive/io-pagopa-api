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
import { cdInfoPagamentoHeader } from "./cdInfoPagamentoHeader";
import { cdInfoPagamento_ppt } from "./cdInfoPagamento_ppt";

// required attributes
const cdInfoPagamentoInputEnvelopeBodyR = t.interface({
  cdInfoPagamento: cdInfoPagamento_ppt
});

// optional attributes
const cdInfoPagamentoInputEnvelopeBodyO = t.partial({});

export const cdInfoPagamentoInputEnvelopeBody = t.exact(
  t.intersection(
    [cdInfoPagamentoInputEnvelopeBodyR, cdInfoPagamentoInputEnvelopeBodyO],
    "cdInfoPagamentoInputEnvelopeBody"
  )
);

export type cdInfoPagamentoInputEnvelopeBody = t.TypeOf<
  typeof cdInfoPagamentoInputEnvelopeBody
>;

// required attributes
const cdInfoPagamentoInputEnvelopeR = t.interface({
  Body: cdInfoPagamentoInputEnvelopeBody
});

// optional attributes
const cdInfoPagamentoInputEnvelopeO = t.partial({
  Header: cdInfoPagamentoHeader
});

export const cdInfoPagamentoInputEnvelope = t.exact(
  t.intersection(
    [cdInfoPagamentoInputEnvelopeR, cdInfoPagamentoInputEnvelopeO],
    "cdInfoPagamentoInputEnvelope"
  )
);

export type cdInfoPagamentoInputEnvelope = t.TypeOf<
  typeof cdInfoPagamentoInputEnvelope
>;

// required attributes
const cdInfoPagamentoInputR = t.interface({
  Envelope: cdInfoPagamentoInputEnvelope
});

// optional attributes
const cdInfoPagamentoInputO = t.partial({});

export const cdInfoPagamentoInput = t.exact(
  t.intersection(
    [cdInfoPagamentoInputR, cdInfoPagamentoInputO],
    "cdInfoPagamentoInput"
  )
);

export type cdInfoPagamentoInput = t.TypeOf<typeof cdInfoPagamentoInput>;
