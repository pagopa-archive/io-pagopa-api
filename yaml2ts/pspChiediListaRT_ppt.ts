/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import { stText35_ppt } from "./stText35_ppt";
import { stModelloPagamento_ppt } from "./stModelloPagamento_ppt";
import * as t from "io-ts";

// required attributes
const pspChiediListaRT_pptR = t.interface({
  identificativoRichiedente: stText35_ppt
});

// optional attributes
const pspChiediListaRT_pptO = t.partial({
  identificativoIntermediarioPSP: stText35_ppt,

  identificativoCanale: stText35_ppt,

  modelloPagamento: stModelloPagamento_ppt
});

export const pspChiediListaRT_ppt = t.exact(
  t.intersection(
    [pspChiediListaRT_pptR, pspChiediListaRT_pptO],
    "pspChiediListaRT_ppt"
  )
);

export type pspChiediListaRT_ppt = t.TypeOf<typeof pspChiediListaRT_ppt>;
