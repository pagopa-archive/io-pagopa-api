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
const esitoNodoVerificaRPTRisposta_ppt2R = t.interface({});

// optional attributes
const esitoNodoVerificaRPTRisposta_ppt2O = t.partial({
  esito: t.string,

  datiPagamentoPA: nodoTipoDatiPagamentoPA_ppt
});

export const esitoNodoVerificaRPTRisposta_ppt2 = t.exact(
  t.intersection(
    [esitoNodoVerificaRPTRisposta_ppt2R, esitoNodoVerificaRPTRisposta_ppt2O],
    "esitoNodoVerificaRPTRisposta_ppt2"
  )
);

export type esitoNodoVerificaRPTRisposta_ppt2 = t.TypeOf<
  typeof esitoNodoVerificaRPTRisposta_ppt2
>;

export const esitoNodoVerificaRPTRisposta_ppt = t.intersection(
  [risposta_ppt, esitoNodoVerificaRPTRisposta_ppt2],
  "esitoNodoVerificaRPTRisposta_ppt"
);

export type esitoNodoVerificaRPTRisposta_ppt = t.TypeOf<
  typeof esitoNodoVerificaRPTRisposta_ppt
>;
