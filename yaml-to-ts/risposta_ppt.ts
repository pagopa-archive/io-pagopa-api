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
const risposta_pptR = t.interface({});

// optional attributes
const risposta_pptO = t.partial({
  fault: faultBean_ppt
});

export const risposta_ppt = t.exact(
  t.intersection([risposta_pptR, risposta_pptO], "risposta_ppt")
);

export type risposta_ppt = t.TypeOf<typeof risposta_ppt>;
