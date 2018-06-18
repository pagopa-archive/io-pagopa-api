/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import { risposta_ppt } from "./risposta_ppt";
import { stText35_ppt } from "./stText35_ppt";
import { listaErroriRPT_ppt } from "./listaErroriRPT_ppt";
import * as t from "io-ts";

// required attributes
const esitoPspInviaCarrelloRPT_ppt2R = t.interface({
  esitoComplessivoOperazione: t.string
});

// optional attributes
const esitoPspInviaCarrelloRPT_ppt2O = t.partial({
  identificativoCarrello: stText35_ppt,

  parametriPagamentoImmediato: t.string,

  listaErroriRPT: listaErroriRPT_ppt
});

export const esitoPspInviaCarrelloRPT_ppt2 = t.exact(
  t.intersection(
    [esitoPspInviaCarrelloRPT_ppt2R, esitoPspInviaCarrelloRPT_ppt2O],
    "esitoPspInviaCarrelloRPT_ppt2"
  )
);

export type esitoPspInviaCarrelloRPT_ppt2 = t.TypeOf<
  typeof esitoPspInviaCarrelloRPT_ppt2
>;

export const esitoPspInviaCarrelloRPT_ppt = t.intersection(
  [risposta_ppt, esitoPspInviaCarrelloRPT_ppt2],
  "esitoPspInviaCarrelloRPT_ppt"
);

export type esitoPspInviaCarrelloRPT_ppt = t.TypeOf<
  typeof esitoPspInviaCarrelloRPT_ppt
>;
