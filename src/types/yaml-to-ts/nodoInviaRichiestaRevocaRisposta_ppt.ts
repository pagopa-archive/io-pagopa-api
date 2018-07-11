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
const nodoInviaRichiestaRevocaRisposta_ppt2R = t.interface({});

// optional attributes
const nodoInviaRichiestaRevocaRisposta_ppt2O = t.partial({
  esito: t.string
});

export const nodoInviaRichiestaRevocaRisposta_ppt2 = t.exact(
  t.intersection(
    [
      nodoInviaRichiestaRevocaRisposta_ppt2R,
      nodoInviaRichiestaRevocaRisposta_ppt2O
    ],
    "nodoInviaRichiestaRevocaRisposta_ppt2"
  )
);

export type nodoInviaRichiestaRevocaRisposta_ppt2 = t.TypeOf<
  typeof nodoInviaRichiestaRevocaRisposta_ppt2
>;

export const nodoInviaRichiestaRevocaRisposta_ppt = t.intersection(
  [risposta_ppt, nodoInviaRichiestaRevocaRisposta_ppt2],
  "nodoInviaRichiestaRevocaRisposta_ppt"
);

export type nodoInviaRichiestaRevocaRisposta_ppt = t.TypeOf<
  typeof nodoInviaRichiestaRevocaRisposta_ppt
>;
