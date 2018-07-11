/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:variable-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import { esitoNodoInviaRTRisposta_ppt } from "./esitoNodoInviaRTRisposta_ppt";
import * as t from "io-ts";

// required attributes
const nodoInviaRTRisposta_pptR = t.interface({
  nodoInviaRTRisposta: esitoNodoInviaRTRisposta_ppt
});

// optional attributes
const nodoInviaRTRisposta_pptO = t.partial({});

export const nodoInviaRTRisposta_ppt = t.exact(
  t.intersection(
    [nodoInviaRTRisposta_pptR, nodoInviaRTRisposta_pptO],
    "nodoInviaRTRisposta_ppt"
  )
);

export type nodoInviaRTRisposta_ppt = t.TypeOf<typeof nodoInviaRTRisposta_ppt>;
