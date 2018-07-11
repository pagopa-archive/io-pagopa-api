/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:variable-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import { stText35_ppt } from "./stText35_ppt";
import { stPassword_ppt } from "./stPassword_ppt";
import * as t from "io-ts";

// required attributes
const nodoChiediElencoQuadraturePSP_pptR = t.interface({
  identificativoPSP: stText35_ppt,

  identificativoIntermediarioPSP: stText35_ppt,

  identificativoCanale: stText35_ppt,

  password: stPassword_ppt
});

// optional attributes
const nodoChiediElencoQuadraturePSP_pptO = t.partial({
  identificativoDominio: stText35_ppt
});

export const nodoChiediElencoQuadraturePSP_ppt = t.exact(
  t.intersection(
    [nodoChiediElencoQuadraturePSP_pptR, nodoChiediElencoQuadraturePSP_pptO],
    "nodoChiediElencoQuadraturePSP_ppt"
  )
);

export type nodoChiediElencoQuadraturePSP_ppt = t.TypeOf<
  typeof nodoChiediElencoQuadraturePSP_ppt
>;
