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
const nodoChiediTemplateInformativaPSP_pptR = t.interface({
  identificativoPSP: stText35_ppt,

  identificativoIntermediarioPSP: stText35_ppt,

  identificativoCanale: stText35_ppt,

  password: stPassword_ppt
});

// optional attributes
const nodoChiediTemplateInformativaPSP_pptO = t.partial({});

export const nodoChiediTemplateInformativaPSP_ppt = t.exact(
  t.intersection(
    [
      nodoChiediTemplateInformativaPSP_pptR,
      nodoChiediTemplateInformativaPSP_pptO
    ],
    "nodoChiediTemplateInformativaPSP_ppt"
  )
);

export type nodoChiediTemplateInformativaPSP_ppt = t.TypeOf<
  typeof nodoChiediTemplateInformativaPSP_ppt
>;
