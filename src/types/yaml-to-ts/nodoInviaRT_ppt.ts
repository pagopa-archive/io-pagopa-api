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
import * as t from "io-ts";

// required attributes
const nodoInviaRT_pptR = t.interface({
  identificativoIntermediarioPSP: stText35_ppt,

  identificativoCanale: stText35_ppt,

  password: stText35_ppt,

  identificativoPSP: stText35_ppt,

  identificativoDominio: stText35_ppt,

  identificativoUnivocoVersamento: stText35_ppt,

  codiceContestoPagamento: stText35_ppt,

  tipoFirma: t.string,

  rt: t.string
});

// optional attributes
const nodoInviaRT_pptO = t.partial({});

export const nodoInviaRT_ppt = t.exact(
  t.intersection([nodoInviaRT_pptR, nodoInviaRT_pptO], "nodoInviaRT_ppt")
);

export type nodoInviaRT_ppt = t.TypeOf<typeof nodoInviaRT_ppt>;
