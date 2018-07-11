/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:variable-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import { ctSoggettoVersante_pay_i_unqual } from "./ctSoggettoVersante_pay_i_unqual";
import { ctSoggettoPagatore_pay_i_unqual } from "./ctSoggettoPagatore_pay_i_unqual";
import * as t from "io-ts";
import { WithinRangeNumber } from "italia-ts-commons/lib/numbers";
import { PatternString } from "italia-ts-commons/lib/strings";

// required attributes
const nodoTipoDatiPagamentoPSP_pptR = t.interface({
  importoSingoloVersamento: WithinRangeNumber(0, 99999999.99)
});

// optional attributes
const nodoTipoDatiPagamentoPSP_pptO = t.partial({
  ibanAppoggio: PatternString("[a-zA-Z]{2,2}[0-9]{2,2}[a-zA-Z0-9]{1,30}"),

  bicAppoggio: PatternString(
    "[A-Z]{6,6}[A-Z2-9][A-NP-Z0-9]([A-Z0-9]{3,3}){0,1}"
  ),

  soggettoVersante: ctSoggettoVersante_pay_i_unqual,

  ibanAddebito: PatternString("[a-zA-Z]{2,2}[0-9]{2,2}[a-zA-Z0-9]{1,30}"),

  bicAddebito: PatternString(
    "[A-Z]{6,6}[A-Z2-9][A-NP-Z0-9]([A-Z0-9]{3,3}){0,1}"
  ),

  soggettoPagatore: ctSoggettoPagatore_pay_i_unqual
});

export const nodoTipoDatiPagamentoPSP_ppt = t.exact(
  t.intersection(
    [nodoTipoDatiPagamentoPSP_pptR, nodoTipoDatiPagamentoPSP_pptO],
    "nodoTipoDatiPagamentoPSP_ppt"
  )
);

export type nodoTipoDatiPagamentoPSP_ppt = t.TypeOf<
  typeof nodoTipoDatiPagamentoPSP_ppt
>;
