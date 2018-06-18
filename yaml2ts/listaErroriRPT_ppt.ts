/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import { faultBean_ppt } from "./faultBean_ppt";
import * as t from "io-ts";

// required attributes
const listaErroriRPT_pptR = t.interface({});

// optional attributes
const listaErroriRPT_pptO = t.partial({
  fault: t.readonlyArray(faultBean_ppt, "array of faultBean_ppt")
});

export const listaErroriRPT_ppt = t.exact(
  t.intersection(
    [listaErroriRPT_pptR, listaErroriRPT_pptO],
    "listaErroriRPT_ppt"
  )
);

export type listaErroriRPT_ppt = t.TypeOf<typeof listaErroriRPT_ppt>;
