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
const nodoInviaEsitoStorno_pptR = t.interface({
  identificativoPSP: stText35_ppt,

  identificativoIntermediarioPSP: stText35_ppt,

  identificativoCanale: stText35_ppt,

  password: stPassword_ppt,

  identificativoDominio: stText35_ppt,

  identificativoUnivocoVersamento: stText35_ppt,

  codiceContestoPagamento: stText35_ppt
});

// optional attributes
const nodoInviaEsitoStorno_pptO = t.partial({
  er: t.string
});

export const nodoInviaEsitoStorno_ppt = t.exact(
  t.intersection(
    [nodoInviaEsitoStorno_pptR, nodoInviaEsitoStorno_pptO],
    "nodoInviaEsitoStorno_ppt"
  )
);

export type nodoInviaEsitoStorno_ppt = t.TypeOf<
  typeof nodoInviaEsitoStorno_ppt
>;
