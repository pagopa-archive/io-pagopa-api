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
import { tipoListaRPT_ppt } from "./tipoListaRPT_ppt";
import * as t from "io-ts";

// required attributes
const pspInviaCarrelloRPT_pptR = t.interface({
  listaRPT: tipoListaRPT_ppt
});

// optional attributes
const pspInviaCarrelloRPT_pptO = t.partial({
  identificativoPSP: stText35_ppt,

  identificativoIntermediarioPSP: stText35_ppt,

  identificativoCanale: stText35_ppt,

  modelloPagamento: stModelloPagamento_ppt,

  parametriProfiloPagamento: t.string
});

export const pspInviaCarrelloRPT_ppt = t.exact(
  t.intersection(
    [pspInviaCarrelloRPT_pptR, pspInviaCarrelloRPT_pptO],
    "pspInviaCarrelloRPT_ppt"
  )
);

export type pspInviaCarrelloRPT_ppt = t.TypeOf<typeof pspInviaCarrelloRPT_ppt>;
