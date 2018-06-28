/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import { esitoNodoAttivaRPTRisposta_ppt } from "./esitoNodoAttivaRPTRisposta_ppt";
import * as t from "io-ts";

// required attributes
const nodoAttivaRPTRisposta_pptR = t.interface({
  nodoAttivaRPTRisposta: esitoNodoAttivaRPTRisposta_ppt
});

// optional attributes
const nodoAttivaRPTRisposta_pptO = t.partial({});

export const nodoAttivaRPTRisposta_ppt = t.exact(
  t.intersection(
    [nodoAttivaRPTRisposta_pptR, nodoAttivaRPTRisposta_pptO],
    "nodoAttivaRPTRisposta_ppt"
  )
);

export type nodoAttivaRPTRisposta_ppt = t.TypeOf<
  typeof nodoAttivaRPTRisposta_ppt
>;
