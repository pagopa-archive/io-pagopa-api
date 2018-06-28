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
import { nodoTipoCodiceIdRPT_ppt } from "./nodoTipoCodiceIdRPT_ppt";
import { nodoTipoDatiPagamentoPSP_ppt } from "./nodoTipoDatiPagamentoPSP_ppt";
import * as t from "io-ts";

// required attributes
const nodoAttivaRPT_pptR = t.interface({
  identificativoPSP: stText35_ppt,

  identificativoIntermediarioPSP: stText35_ppt,

  identificativoCanale: stText35_ppt,

  password: stPassword_ppt,

  codiceContestoPagamento: stText35_ppt,

  identificativoIntermediarioPSPPagamento: stText35_ppt,

  identificativoCanalePagamento: stText35_ppt,

  codificaInfrastrutturaPSP: t.string,

  codiceIdRPT: nodoTipoCodiceIdRPT_ppt,

  datiPagamentoPSP: nodoTipoDatiPagamentoPSP_ppt
});

// optional attributes
const nodoAttivaRPT_pptO = t.partial({});

export const nodoAttivaRPT_ppt = t.exact(
  t.intersection([nodoAttivaRPT_pptR, nodoAttivaRPT_pptO], "nodoAttivaRPT_ppt")
);

export type nodoAttivaRPT_ppt = t.TypeOf<typeof nodoAttivaRPT_ppt>;
