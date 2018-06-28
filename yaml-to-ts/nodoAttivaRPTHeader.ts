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
const nodoAttivaRPTHeaderR = t.interface({});

// optional attributes
const nodoAttivaRPTHeaderO = t.partial({
  Security: Security
});

export const nodoAttivaRPTHeader = t.exact(
  t.intersection(
    [nodoAttivaRPTHeaderR, nodoAttivaRPTHeaderO],
    "nodoAttivaRPTHeader"
  )
);

export type nodoAttivaRPTHeader = t.TypeOf<typeof nodoAttivaRPTHeader>;
