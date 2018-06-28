/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import { stTipoIdentificativoUnivocoPersFG_pay_i } from "./stTipoIdentificativoUnivocoPersFG_pay_i";
import { stText35_pay_i } from "./stText35_pay_i";
import * as t from "io-ts";

// required attributes
const ctIdentificativoUnivocoPersonaFG_pay_iR = t.interface({
  tipoIdentificativoUnivoco: stTipoIdentificativoUnivocoPersFG_pay_i,

  codiceIdentificativoUnivoco: stText35_pay_i
});

// optional attributes
const ctIdentificativoUnivocoPersonaFG_pay_iO = t.partial({});

export const ctIdentificativoUnivocoPersonaFG_pay_i = t.exact(
  t.intersection(
    [
      ctIdentificativoUnivocoPersonaFG_pay_iR,
      ctIdentificativoUnivocoPersonaFG_pay_iO
    ],
    "ctIdentificativoUnivocoPersonaFG_pay_i"
  )
);

export type ctIdentificativoUnivocoPersonaFG_pay_i = t.TypeOf<
  typeof ctIdentificativoUnivocoPersonaFG_pay_i
>;
