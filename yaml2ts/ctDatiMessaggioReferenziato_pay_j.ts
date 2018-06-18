/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import { stIdentificativoDominio_pay_j } from "./stIdentificativoDominio_pay_j";
import { stIdentificativoUnivocoVersamento_pay_j } from "./stIdentificativoUnivocoVersamento_pay_j";
import { stCodiceContestoPagamento_pay_j } from "./stCodiceContestoPagamento_pay_j";
import { stIdentificativoMessaggioReferenziato_pay_j } from "./stIdentificativoMessaggioReferenziato_pay_j";
import { stISODateTime_pay_j } from "./stISODateTime_pay_j";
import { stTipologiaMessaggioReferenziato_pay_j } from "./stTipologiaMessaggioReferenziato_pay_j";
import { stMittenteMessaggio_pay_j } from "./stMittenteMessaggio_pay_j";
import * as t from "io-ts";

// required attributes
const ctDatiMessaggioReferenziato_pay_jR = t.interface({
  identificativoDominio: stIdentificativoDominio_pay_j,

  identificativoUnivocoVersamento: stIdentificativoUnivocoVersamento_pay_j,

  codiceContestoPagamento: stCodiceContestoPagamento_pay_j,

  identificativoMessaggioReferenziato: stIdentificativoMessaggioReferenziato_pay_j,

  dataOraMessaggioReferenziato: stISODateTime_pay_j,

  tipologiaMessaggioReferenziato: stTipologiaMessaggioReferenziato_pay_j,

  mittenteMessaggioReferenziato: stMittenteMessaggio_pay_j
});

// optional attributes
const ctDatiMessaggioReferenziato_pay_jO = t.partial({});

export const ctDatiMessaggioReferenziato_pay_j = t.exact(
  t.intersection(
    [ctDatiMessaggioReferenziato_pay_jR, ctDatiMessaggioReferenziato_pay_jO],
    "ctDatiMessaggioReferenziato_pay_j"
  )
);

export type ctDatiMessaggioReferenziato_pay_j = t.TypeOf<
  typeof ctDatiMessaggioReferenziato_pay_j
>;
