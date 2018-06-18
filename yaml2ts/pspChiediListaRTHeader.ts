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
const pspChiediListaRTHeaderR = t.interface({});

// optional attributes
const pspChiediListaRTHeaderO = t.partial({
  Security: Security
});

export const pspChiediListaRTHeader = t.exact(
  t.intersection(
    [pspChiediListaRTHeaderR, pspChiediListaRTHeaderO],
    "pspChiediListaRTHeader"
  )
);

export type pspChiediListaRTHeader = t.TypeOf<typeof pspChiediListaRTHeader>;
