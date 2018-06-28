/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import { stText35_ppt } from "./stText35_ppt";
import { stPassword_ppt } from "./stPassword_ppt";
import * as t from "io-ts";

// required attributes
const nodoChiediQuadraturaPSP_pptR = t.interface({
  identificativoPSP: stText35_ppt,

  identificativoIntermediarioPSP: stText35_ppt,

  identificativoCanale: stText35_ppt,

  password: stPassword_ppt,

  identificativoFlusso: t.string
});

// optional attributes
const nodoChiediQuadraturaPSP_pptO = t.partial({});

export const nodoChiediQuadraturaPSP_ppt = t.exact(
  t.intersection(
    [nodoChiediQuadraturaPSP_pptR, nodoChiediQuadraturaPSP_pptO],
    "nodoChiediQuadraturaPSP_ppt"
  )
);

export type nodoChiediQuadraturaPSP_ppt = t.TypeOf<
  typeof nodoChiediQuadraturaPSP_ppt
>;
