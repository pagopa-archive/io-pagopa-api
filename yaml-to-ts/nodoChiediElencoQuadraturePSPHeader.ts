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
const nodoChiediElencoQuadraturePSPHeaderR = t.interface({});

// optional attributes
const nodoChiediElencoQuadraturePSPHeaderO = t.partial({
  Security: Security
});

export const nodoChiediElencoQuadraturePSPHeader = t.exact(
  t.intersection(
    [
      nodoChiediElencoQuadraturePSPHeaderR,
      nodoChiediElencoQuadraturePSPHeaderO
    ],
    "nodoChiediElencoQuadraturePSPHeader"
  )
);

export type nodoChiediElencoQuadraturePSPHeader = t.TypeOf<
  typeof nodoChiediElencoQuadraturePSPHeader
>;
