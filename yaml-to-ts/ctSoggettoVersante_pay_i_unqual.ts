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
const ctSoggettoVersante_pay_i_unqualR = t.interface({
  identificativoUnivocoVersante: ctIdentificativoUnivocoPersonaFG_pay_i,

  anagraficaVersante: stText70_pay_i
});

// optional attributes
const ctSoggettoVersante_pay_i_unqualO = t.partial({
  indirizzoVersante: stText70_pay_i,

  civicoVersante: stText16_pay_i,

  capVersante: stText16_pay_i,

  localitaVersante: stText35_pay_i,

  provinciaVersante: stText35_pay_i,

  nazioneVersante: stNazioneProvincia_pay_i,

  "e-mailVersante": stEMail_pay_i
});

export const ctSoggettoVersante_pay_i_unqual = t.exact(
  t.intersection(
    [ctSoggettoVersante_pay_i_unqualR, ctSoggettoVersante_pay_i_unqualO],
    "ctSoggettoVersante_pay_i_unqual"
  )
);

export type ctSoggettoVersante_pay_i_unqual = t.TypeOf<
  typeof ctSoggettoVersante_pay_i_unqual
>;
