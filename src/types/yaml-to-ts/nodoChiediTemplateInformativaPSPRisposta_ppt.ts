/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:variable-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import { risposta_ppt } from "./risposta_ppt";
import * as t from "io-ts";

// required attributes
const nodoChiediTemplateInformativaPSPRisposta_ppt2R = t.interface({});

// optional attributes
const nodoChiediTemplateInformativaPSPRisposta_ppt2O = t.partial({
  xmlTemplateInformativa: t.string
});

export const nodoChiediTemplateInformativaPSPRisposta_ppt2 = t.exact(
  t.intersection(
    [
      nodoChiediTemplateInformativaPSPRisposta_ppt2R,
      nodoChiediTemplateInformativaPSPRisposta_ppt2O
    ],
    "nodoChiediTemplateInformativaPSPRisposta_ppt2"
  )
);

export type nodoChiediTemplateInformativaPSPRisposta_ppt2 = t.TypeOf<
  typeof nodoChiediTemplateInformativaPSPRisposta_ppt2
>;

export const nodoChiediTemplateInformativaPSPRisposta_ppt = t.intersection(
  [risposta_ppt, nodoChiediTemplateInformativaPSPRisposta_ppt2],
  "nodoChiediTemplateInformativaPSPRisposta_ppt"
);

export type nodoChiediTemplateInformativaPSPRisposta_ppt = t.TypeOf<
  typeof nodoChiediTemplateInformativaPSPRisposta_ppt
>;
