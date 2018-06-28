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
const nodoInviaRTHeaderR = t.interface({});

// optional attributes
const nodoInviaRTHeaderO = t.partial({
  Security: Security
});

export const nodoInviaRTHeader = t.exact(
  t.intersection([nodoInviaRTHeaderR, nodoInviaRTHeaderO], "nodoInviaRTHeader")
);

export type nodoInviaRTHeader = t.TypeOf<typeof nodoInviaRTHeader>;
