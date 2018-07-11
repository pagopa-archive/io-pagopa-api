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
const nodoChiediInformativaPARisposta_ppt2R = t.interface({});

// optional attributes
const nodoChiediInformativaPARisposta_ppt2O = t.partial({
  xmlInformativa: t.string
});

export const nodoChiediInformativaPARisposta_ppt2 = t.exact(
  t.intersection(
    [
      nodoChiediInformativaPARisposta_ppt2R,
      nodoChiediInformativaPARisposta_ppt2O
    ],
    "nodoChiediInformativaPARisposta_ppt2"
  )
);

export type nodoChiediInformativaPARisposta_ppt2 = t.TypeOf<
  typeof nodoChiediInformativaPARisposta_ppt2
>;

export const nodoChiediInformativaPARisposta_ppt = t.intersection(
  [risposta_ppt, nodoChiediInformativaPARisposta_ppt2],
  "nodoChiediInformativaPARisposta_ppt"
);

export type nodoChiediInformativaPARisposta_ppt = t.TypeOf<
  typeof nodoChiediInformativaPARisposta_ppt
>;
