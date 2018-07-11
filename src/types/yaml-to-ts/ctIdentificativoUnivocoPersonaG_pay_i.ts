/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:variable-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import { stTipoIdentificativoUnivocoPersG_pay_i } from "./stTipoIdentificativoUnivocoPersG_pay_i";
import { stText35_pay_i } from "./stText35_pay_i";
import * as t from "io-ts";

// required attributes
const ctIdentificativoUnivocoPersonaG_pay_iR = t.interface({
  tipoIdentificativoUnivoco: stTipoIdentificativoUnivocoPersG_pay_i,

  codiceIdentificativoUnivoco: stText35_pay_i
});

// optional attributes
const ctIdentificativoUnivocoPersonaG_pay_iO = t.partial({});

export const ctIdentificativoUnivocoPersonaG_pay_i = t.exact(
  t.intersection(
    [
      ctIdentificativoUnivocoPersonaG_pay_iR,
      ctIdentificativoUnivocoPersonaG_pay_iO
    ],
    "ctIdentificativoUnivocoPersonaG_pay_i"
  )
);

export type ctIdentificativoUnivocoPersonaG_pay_i = t.TypeOf<
  typeof ctIdentificativoUnivocoPersonaG_pay_i
>;
