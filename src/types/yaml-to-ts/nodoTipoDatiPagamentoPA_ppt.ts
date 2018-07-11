/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:variable-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import { ctEnteBeneficiario_pay_i_unqual } from "./ctEnteBeneficiario_pay_i_unqual";
import { stText140_ppt } from "./stText140_ppt";
import { ctSpezzoniCausaleVersamento_ppt } from "./ctSpezzoniCausaleVersamento_ppt";
import * as t from "io-ts";
import { WithinRangeNumber } from "italia-ts-commons/lib/numbers";
import { PatternString } from "italia-ts-commons/lib/strings";
import { WithinRangeString } from "italia-ts-commons/lib/strings";

// required attributes
const nodoTipoDatiPagamentoPA_pptR = t.interface({
  importoSingoloVersamento: WithinRangeNumber(0, 99999999.99)
});

// optional attributes
const nodoTipoDatiPagamentoPA_pptO = t.partial({
  ibanAccredito: PatternString("[a-zA-Z]{2,2}[0-9]{2,2}[a-zA-Z0-9]{1,30}"),

  bicAccredito: PatternString(
    "[A-Z]{6,6}[A-Z2-9][A-NP-Z0-9]([A-Z0-9]{3,3}){0,1}"
  ),

  enteBeneficiario: ctEnteBeneficiario_pay_i_unqual,

  credenzialiPagatore: WithinRangeString(1, 35),

  causaleVersamento: stText140_ppt,

  spezzoniCausaleVersamento: ctSpezzoniCausaleVersamento_ppt
});

export const nodoTipoDatiPagamentoPA_ppt = t.exact(
  t.intersection(
    [nodoTipoDatiPagamentoPA_pptR, nodoTipoDatiPagamentoPA_pptO],
    "nodoTipoDatiPagamentoPA_ppt"
  )
);

export type nodoTipoDatiPagamentoPA_ppt = t.TypeOf<
  typeof nodoTipoDatiPagamentoPA_ppt
>;
