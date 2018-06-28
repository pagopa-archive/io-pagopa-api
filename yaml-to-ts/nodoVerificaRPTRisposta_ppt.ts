/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import { esitoNodoVerificaRPTRisposta_ppt } from "./esitoNodoVerificaRPTRisposta_ppt";
import * as t from "io-ts";

// required attributes
const nodoVerificaRPTRisposta_pptR = t.interface({
  nodoVerificaRPTRisposta: esitoNodoVerificaRPTRisposta_ppt
});

// optional attributes
const nodoVerificaRPTRisposta_pptO = t.partial({});

export const nodoVerificaRPTRisposta_ppt = t.exact(
  t.intersection(
    [nodoVerificaRPTRisposta_pptR, nodoVerificaRPTRisposta_pptO],
    "nodoVerificaRPTRisposta_ppt"
  )
);

export type nodoVerificaRPTRisposta_ppt = t.TypeOf<
  typeof nodoVerificaRPTRisposta_ppt
>;
