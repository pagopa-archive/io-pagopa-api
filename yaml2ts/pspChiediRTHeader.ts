/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import { Security } from "./Security";
import * as t from "io-ts";

// required attributes
const pspChiediRTHeaderR = t.interface({});

// optional attributes
const pspChiediRTHeaderO = t.partial({
  Security: Security
});

export const pspChiediRTHeader = t.exact(
  t.intersection([pspChiediRTHeaderR, pspChiediRTHeaderO], "pspChiediRTHeader")
);

export type pspChiediRTHeader = t.TypeOf<typeof pspChiediRTHeader>;
