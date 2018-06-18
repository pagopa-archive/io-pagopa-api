/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import { pspInviaCarrelloRPT_ppt } from "./pspInviaCarrelloRPT_ppt";
import { stImporto_ppt } from "./stImporto_ppt";
import { stText6_ppt } from "./stText6_ppt";
import * as t from "io-ts";
import { DateFromString } from "italia-ts-commons/lib/dates";

// required attributes
const pspInviaCarrelloRPTCarte_ppt2R = t.interface({
  rrn: t.string,

  esitoTransazioneCarta: t.string,

  importoTotalePagato: stImporto_ppt,

  timestampOperazione: DateFromString,

  codiceAutorizzativo: stText6_ppt
});

// optional attributes
const pspInviaCarrelloRPTCarte_ppt2O = t.partial({});

export const pspInviaCarrelloRPTCarte_ppt2 = t.exact(
  t.intersection(
    [pspInviaCarrelloRPTCarte_ppt2R, pspInviaCarrelloRPTCarte_ppt2O],
    "pspInviaCarrelloRPTCarte_ppt2"
  )
);

export type pspInviaCarrelloRPTCarte_ppt2 = t.TypeOf<
  typeof pspInviaCarrelloRPTCarte_ppt2
>;

export const pspInviaCarrelloRPTCarte_ppt = t.intersection(
  [pspInviaCarrelloRPT_ppt, pspInviaCarrelloRPTCarte_ppt2],
  "pspInviaCarrelloRPTCarte_ppt"
);

export type pspInviaCarrelloRPTCarte_ppt = t.TypeOf<
  typeof pspInviaCarrelloRPTCarte_ppt
>;
