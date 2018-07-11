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
const nodoChiediInformativaPA_pptR = t.interface({
  identificativoIntermediarioPSP: stText35_ppt,

  identificativoCanale: stText35_ppt,

  password: stPassword_ppt
});

// optional attributes
const nodoChiediInformativaPA_pptO = t.partial({
  identificativoPSP: stText35_ppt,

  identificativoDominio: stText35_ppt
});

export const nodoChiediInformativaPA_ppt = t.exact(
  t.intersection(
    [nodoChiediInformativaPA_pptR, nodoChiediInformativaPA_pptO],
    "nodoChiediInformativaPA_ppt"
  )
);

export type nodoChiediInformativaPA_ppt = t.TypeOf<
  typeof nodoChiediInformativaPA_ppt
>;
