/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:variable-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import { stText25_ppt } from "./stText25_ppt";
import { stImporto_ppt } from "./stImporto_ppt";
import * as t from "io-ts";

// required attributes
const ctSpezzoneStrutturatoCausaleVersamento_pptR = t.interface({
  causaleSpezzone: stText25_ppt,

  importoSpezzone: stImporto_ppt
});

// optional attributes
const ctSpezzoneStrutturatoCausaleVersamento_pptO = t.partial({});

export const ctSpezzoneStrutturatoCausaleVersamento_ppt = t.exact(
  t.intersection(
    [
      ctSpezzoneStrutturatoCausaleVersamento_pptR,
      ctSpezzoneStrutturatoCausaleVersamento_pptO
    ],
    "ctSpezzoneStrutturatoCausaleVersamento_ppt"
  )
);

export type ctSpezzoneStrutturatoCausaleVersamento_ppt = t.TypeOf<
  typeof ctSpezzoneStrutturatoCausaleVersamento_ppt
>;
