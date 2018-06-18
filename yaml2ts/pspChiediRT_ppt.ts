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
const pspChiediRT_pptR = t.interface({
  identificativoDominio: stText35_ppt,

  identificativoUnivocoVersamento: stText35_ppt,

  codiceContestoPagamento: stText35_ppt
});

// optional attributes
const pspChiediRT_pptO = t.partial({});

export const pspChiediRT_ppt = t.exact(
  t.intersection([pspChiediRT_pptR, pspChiediRT_pptO], "pspChiediRT_ppt")
);

export type pspChiediRT_ppt = t.TypeOf<typeof pspChiediRT_ppt>;
