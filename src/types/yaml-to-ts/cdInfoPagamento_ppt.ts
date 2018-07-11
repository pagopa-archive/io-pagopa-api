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
const cdInfoPagamento_pptR = t.interface({
  identificativoDominio: stText35_ppt,

  identificativoUnivocoVersamento: stText35_ppt,

  codiceContestoPagamento: stText35_ppt,

  idPagamento: t.string
});

// optional attributes
const cdInfoPagamento_pptO = t.partial({});

export const cdInfoPagamento_ppt = t.exact(
  t.intersection(
    [cdInfoPagamento_pptR, cdInfoPagamento_pptO],
    "cdInfoPagamento_ppt"
  )
);

export type cdInfoPagamento_ppt = t.TypeOf<typeof cdInfoPagamento_ppt>;
