/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import { risposta_ppt } from "./risposta_ppt";
import * as t from "io-ts";

// required attributes
const esitoNodoInviaRTRisposta_ppt2R = t.interface({
  esito: t.string
});

// optional attributes
const esitoNodoInviaRTRisposta_ppt2O = t.partial({});

export const esitoNodoInviaRTRisposta_ppt2 = t.exact(
  t.intersection(
    [esitoNodoInviaRTRisposta_ppt2R, esitoNodoInviaRTRisposta_ppt2O],
    "esitoNodoInviaRTRisposta_ppt2"
  )
);

export type esitoNodoInviaRTRisposta_ppt2 = t.TypeOf<
  typeof esitoNodoInviaRTRisposta_ppt2
>;

export const esitoNodoInviaRTRisposta_ppt = t.intersection(
  [risposta_ppt, esitoNodoInviaRTRisposta_ppt2],
  "esitoNodoInviaRTRisposta_ppt"
);

export type esitoNodoInviaRTRisposta_ppt = t.TypeOf<
  typeof esitoNodoInviaRTRisposta_ppt
>;
