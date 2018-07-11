/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:variable-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import { risposta_ppt } from "./risposta_ppt";
import * as t from "io-ts";

// required attributes
const cdInfoPagamentoResponse_ppt2R = t.interface({});

// optional attributes
const cdInfoPagamentoResponse_ppt2O = t.partial({
  esito: t.string
});

export const cdInfoPagamentoResponse_ppt2 = t.exact(
  t.intersection(
    [cdInfoPagamentoResponse_ppt2R, cdInfoPagamentoResponse_ppt2O],
    "cdInfoPagamentoResponse_ppt2"
  )
);

export type cdInfoPagamentoResponse_ppt2 = t.TypeOf<
  typeof cdInfoPagamentoResponse_ppt2
>;

export const cdInfoPagamentoResponse_ppt = t.intersection(
  [risposta_ppt, cdInfoPagamentoResponse_ppt2],
  "cdInfoPagamentoResponse_ppt"
);

export type cdInfoPagamentoResponse_ppt = t.TypeOf<
  typeof cdInfoPagamentoResponse_ppt
>;
