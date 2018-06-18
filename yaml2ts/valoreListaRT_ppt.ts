/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import { stText35_ppt } from "./stText35_ppt";
import * as t from "io-ts";

// required attributes
const valoreListaRT_pptR = t.interface({
  identificativoDominio: stText35_ppt,

  identificativoUnivocoVersamento: stText35_ppt,

  codiceContestoPagamento: stText35_ppt
});

// optional attributes
const valoreListaRT_pptO = t.partial({});

export const valoreListaRT_ppt = t.exact(
  t.intersection([valoreListaRT_pptR, valoreListaRT_pptO], "valoreListaRT_ppt")
);

export type valoreListaRT_ppt = t.TypeOf<typeof valoreListaRT_ppt>;
