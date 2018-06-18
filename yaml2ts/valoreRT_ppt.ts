/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import { risposta_ppt } from "./risposta_ppt";
import * as t from "io-ts";

// required attributes
const valoreRT_ppt2R = t.interface({});

// optional attributes
const valoreRT_ppt2O = t.partial({
  tipoFirma: t.string,

  rt: t.string
});

export const valoreRT_ppt2 = t.exact(
  t.intersection([valoreRT_ppt2R, valoreRT_ppt2O], "valoreRT_ppt2")
);

export type valoreRT_ppt2 = t.TypeOf<typeof valoreRT_ppt2>;

export const valoreRT_ppt = t.intersection(
  [risposta_ppt, valoreRT_ppt2],
  "valoreRT_ppt"
);

export type valoreRT_ppt = t.TypeOf<typeof valoreRT_ppt>;
