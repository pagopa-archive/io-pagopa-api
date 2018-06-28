/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import { ctIdentificativoUnivocoPersonaFG_pay_i } from "./ctIdentificativoUnivocoPersonaFG_pay_i";
import { stText70_pay_i } from "./stText70_pay_i";
import { stText16_pay_i } from "./stText16_pay_i";
import { stText35_pay_i } from "./stText35_pay_i";
import { stNazioneProvincia_pay_i } from "./stNazioneProvincia_pay_i";
import { stEMail_pay_i } from "./stEMail_pay_i";
import * as t from "io-ts";

// required attributes
const ctSoggettoPagatore_pay_i_unqualR = t.interface({
  identificativoUnivocoPagatore: ctIdentificativoUnivocoPersonaFG_pay_i,

  anagraficaPagatore: stText70_pay_i
});

// optional attributes
const ctSoggettoPagatore_pay_i_unqualO = t.partial({
  indirizzoPagatore: stText70_pay_i,

  civicoPagatore: stText16_pay_i,

  capPagatore: stText16_pay_i,

  localitaPagatore: stText35_pay_i,

  provinciaPagatore: stText35_pay_i,

  nazionePagatore: stNazioneProvincia_pay_i,

  "e-mailPagatore": stEMail_pay_i
});

export const ctSoggettoPagatore_pay_i_unqual = t.exact(
  t.intersection(
    [ctSoggettoPagatore_pay_i_unqualR, ctSoggettoPagatore_pay_i_unqualO],
    "ctSoggettoPagatore_pay_i_unqual"
  )
);

export type ctSoggettoPagatore_pay_i_unqual = t.TypeOf<
  typeof ctSoggettoPagatore_pay_i_unqual
>;
