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
const pspInviaRichiestaStorno_pptR = t.interface({
  identificativoDominio: stText35_ppt,

  identificativoUnivocoVersamento: stText35_ppt,

  codiceContestoPagamento: stText35_ppt,

  rr: t.string
});

// optional attributes
const pspInviaRichiestaStorno_pptO = t.partial({});

export const pspInviaRichiestaStorno_ppt = t.exact(
  t.intersection(
    [pspInviaRichiestaStorno_pptR, pspInviaRichiestaStorno_pptO],
    "pspInviaRichiestaStorno_ppt"
  )
);

export type pspInviaRichiestaStorno_ppt = t.TypeOf<
  typeof pspInviaRichiestaStorno_ppt
>;
