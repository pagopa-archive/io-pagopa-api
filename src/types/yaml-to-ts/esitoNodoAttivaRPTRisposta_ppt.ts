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
import { nodoTipoDatiPagamentoPA_ppt } from "./nodoTipoDatiPagamentoPA_ppt";
import * as t from "io-ts";

// required attributes
const esitoNodoAttivaRPTRisposta_ppt2R = t.interface({});

// optional attributes
const esitoNodoAttivaRPTRisposta_ppt2O = t.partial({
  esito: t.string,

  datiPagamentoPA: nodoTipoDatiPagamentoPA_ppt
});

export const esitoNodoAttivaRPTRisposta_ppt2 = t.exact(
  t.intersection(
    [esitoNodoAttivaRPTRisposta_ppt2R, esitoNodoAttivaRPTRisposta_ppt2O],
    "esitoNodoAttivaRPTRisposta_ppt2"
  )
);

export type esitoNodoAttivaRPTRisposta_ppt2 = t.TypeOf<
  typeof esitoNodoAttivaRPTRisposta_ppt2
>;

export const esitoNodoAttivaRPTRisposta_ppt = t.intersection(
  [risposta_ppt, esitoNodoAttivaRPTRisposta_ppt2],
  "esitoNodoAttivaRPTRisposta_ppt"
);

export type esitoNodoAttivaRPTRisposta_ppt = t.TypeOf<
  typeof esitoNodoAttivaRPTRisposta_ppt
>;
