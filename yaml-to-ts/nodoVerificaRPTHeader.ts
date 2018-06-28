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
const nodoVerificaRPTHeaderR = t.interface({});

// optional attributes
const nodoVerificaRPTHeaderO = t.partial({
  Security: Security
});

export const nodoVerificaRPTHeader = t.exact(
  t.intersection(
    [nodoVerificaRPTHeaderR, nodoVerificaRPTHeaderO],
    "nodoVerificaRPTHeader"
  )
);

export type nodoVerificaRPTHeader = t.TypeOf<typeof nodoVerificaRPTHeader>;
