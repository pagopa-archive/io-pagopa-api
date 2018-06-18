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
import { tipoElementoListaRPT_ppt } from "./tipoElementoListaRPT_ppt";
import * as t from "io-ts";

// required attributes
const pspInviaRPT_pptR = t.interface({
  identificativoDominio: stText35_ppt
});

// optional attributes
const pspInviaRPT_pptO = t.partial({
  identificativoPSP: stText35_ppt,

  identificativoIntermediarioPSP: stText35_ppt,

  identificativoCanale: stText35_ppt,

  modelloPagamento: stModelloPagamento_ppt,

  elementoListaRPT: t.readonlyArray(
    tipoElementoListaRPT_ppt,
    "array of tipoElementoListaRPT_ppt"
  )
});

export const pspInviaRPT_ppt = t.exact(
  t.intersection([pspInviaRPT_pptR, pspInviaRPT_pptO], "pspInviaRPT_ppt")
);

export type pspInviaRPT_ppt = t.TypeOf<typeof pspInviaRPT_ppt>;
