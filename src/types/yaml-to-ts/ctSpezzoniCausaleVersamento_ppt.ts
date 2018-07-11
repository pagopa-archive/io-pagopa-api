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
import { ctSpezzoneStrutturatoCausaleVersamento_ppt } from "./ctSpezzoneStrutturatoCausaleVersamento_ppt";
import * as t from "io-ts";

// required attributes
const ctSpezzoniCausaleVersamento_pptR = t.interface({});

// optional attributes
const ctSpezzoniCausaleVersamento_pptO = t.partial({
  spezzoneCausaleVersamento: stText35_ppt,

  spezzoneStrutturatoCausaleVersamento: ctSpezzoneStrutturatoCausaleVersamento_ppt
});

export const ctSpezzoniCausaleVersamento_ppt = t.exact(
  t.intersection(
    [ctSpezzoniCausaleVersamento_pptR, ctSpezzoniCausaleVersamento_pptO],
    "ctSpezzoniCausaleVersamento_ppt"
  )
);

export type ctSpezzoniCausaleVersamento_ppt = t.TypeOf<
  typeof ctSpezzoniCausaleVersamento_ppt
>;
