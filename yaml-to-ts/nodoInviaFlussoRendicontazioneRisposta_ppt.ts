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
const nodoInviaFlussoRendicontazioneRisposta_ppt2R = t.interface({});

// optional attributes
const nodoInviaFlussoRendicontazioneRisposta_ppt2O = t.partial({
  esito: t.string
});

export const nodoInviaFlussoRendicontazioneRisposta_ppt2 = t.exact(
  t.intersection(
    [
      nodoInviaFlussoRendicontazioneRisposta_ppt2R,
      nodoInviaFlussoRendicontazioneRisposta_ppt2O
    ],
    "nodoInviaFlussoRendicontazioneRisposta_ppt2"
  )
);

export type nodoInviaFlussoRendicontazioneRisposta_ppt2 = t.TypeOf<
  typeof nodoInviaFlussoRendicontazioneRisposta_ppt2
>;

export const nodoInviaFlussoRendicontazioneRisposta_ppt = t.intersection(
  [risposta_ppt, nodoInviaFlussoRendicontazioneRisposta_ppt2],
  "nodoInviaFlussoRendicontazioneRisposta_ppt"
);

export type nodoInviaFlussoRendicontazioneRisposta_ppt = t.TypeOf<
  typeof nodoInviaFlussoRendicontazioneRisposta_ppt
>;
