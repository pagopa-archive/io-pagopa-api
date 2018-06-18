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
const pspInviaRispostaRevoca_pptR = t.interface({
  identificativoDominio: stText35_ppt,

  identificativoUnivocoVersamento: stText35_ppt,

  codiceContestoPagamento: stText35_ppt,

  er: t.string
});

// optional attributes
const pspInviaRispostaRevoca_pptO = t.partial({});

export const pspInviaRispostaRevoca_ppt = t.exact(
  t.intersection(
    [pspInviaRispostaRevoca_pptR, pspInviaRispostaRevoca_pptO],
    "pspInviaRispostaRevoca_ppt"
  )
);

export type pspInviaRispostaRevoca_ppt = t.TypeOf<
  typeof pspInviaRispostaRevoca_ppt
>;
