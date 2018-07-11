/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:variable-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import { risposta_ppt } from "./risposta_ppt";
import * as t from "io-ts";

// required attributes
const nodoChiediQuadraturaPSPRisposta_ppt2R = t.interface({});

// optional attributes
const nodoChiediQuadraturaPSPRisposta_ppt2O = t.partial({
  xmlQuadratura: t.string
});

export const nodoChiediQuadraturaPSPRisposta_ppt2 = t.exact(
  t.intersection(
    [
      nodoChiediQuadraturaPSPRisposta_ppt2R,
      nodoChiediQuadraturaPSPRisposta_ppt2O
    ],
    "nodoChiediQuadraturaPSPRisposta_ppt2"
  )
);

export type nodoChiediQuadraturaPSPRisposta_ppt2 = t.TypeOf<
  typeof nodoChiediQuadraturaPSPRisposta_ppt2
>;

export const nodoChiediQuadraturaPSPRisposta_ppt = t.intersection(
  [risposta_ppt, nodoChiediQuadraturaPSPRisposta_ppt2],
  "nodoChiediQuadraturaPSPRisposta_ppt"
);

export type nodoChiediQuadraturaPSPRisposta_ppt = t.TypeOf<
  typeof nodoChiediQuadraturaPSPRisposta_ppt
>;
