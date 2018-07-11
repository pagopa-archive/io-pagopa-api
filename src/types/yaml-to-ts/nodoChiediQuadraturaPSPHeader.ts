/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:variable-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import { Security } from "./Security";
import * as t from "io-ts";

// required attributes
const nodoChiediQuadraturaPSPHeaderR = t.interface({});

// optional attributes
const nodoChiediQuadraturaPSPHeaderO = t.partial({
  Security: Security
});

export const nodoChiediQuadraturaPSPHeader = t.exact(
  t.intersection(
    [nodoChiediQuadraturaPSPHeaderR, nodoChiediQuadraturaPSPHeaderO],
    "nodoChiediQuadraturaPSPHeader"
  )
);

export type nodoChiediQuadraturaPSPHeader = t.TypeOf<
  typeof nodoChiediQuadraturaPSPHeader
>;
