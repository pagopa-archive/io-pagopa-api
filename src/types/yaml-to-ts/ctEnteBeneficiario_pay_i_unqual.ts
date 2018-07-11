/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:variable-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import { ctIdentificativoUnivocoPersonaG_pay_i } from "./ctIdentificativoUnivocoPersonaG_pay_i";
import { stText70_pay_i } from "./stText70_pay_i";
import { stText35_pay_i } from "./stText35_pay_i";
import { stText16_pay_i } from "./stText16_pay_i";
import { stNazioneProvincia_pay_i } from "./stNazioneProvincia_pay_i";
import * as t from "io-ts";

// required attributes
const ctEnteBeneficiario_pay_i_unqualR = t.interface({
  identificativoUnivocoBeneficiario: ctIdentificativoUnivocoPersonaG_pay_i,

  denominazioneBeneficiario: stText70_pay_i
});

// optional attributes
const ctEnteBeneficiario_pay_i_unqualO = t.partial({
  codiceUnitOperBeneficiario: stText35_pay_i,

  denomUnitOperBeneficiario: stText70_pay_i,

  indirizzoBeneficiario: stText70_pay_i,

  civicoBeneficiario: stText16_pay_i,

  capBeneficiario: stText16_pay_i,

  localitaBeneficiario: stText35_pay_i,

  provinciaBeneficiario: stText35_pay_i,

  nazioneBeneficiario: stNazioneProvincia_pay_i
});

export const ctEnteBeneficiario_pay_i_unqual = t.exact(
  t.intersection(
    [ctEnteBeneficiario_pay_i_unqualR, ctEnteBeneficiario_pay_i_unqualO],
    "ctEnteBeneficiario_pay_i_unqual"
  )
);

export type ctEnteBeneficiario_pay_i_unqual = t.TypeOf<
  typeof ctEnteBeneficiario_pay_i_unqual
>;
