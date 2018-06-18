/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import { stText35_ppt } from "./stText35_ppt";
import { listaErroriRPT_ppt } from "./listaErroriRPT_ppt";
import * as t from "io-ts";

// required attributes
const esitoPspInviaRPT_pptR = t.interface({
  esitoComplessivoOperazione: t.string
});

// optional attributes
const esitoPspInviaRPT_pptO = t.partial({
  identificativoCarrello: stText35_ppt,

  parametriPagamentoImmediato: t.string,

  listaErroriRPT: listaErroriRPT_ppt
});

export const esitoPspInviaRPT_ppt = t.exact(
  t.intersection(
    [esitoPspInviaRPT_pptR, esitoPspInviaRPT_pptO],
    "esitoPspInviaRPT_ppt"
  )
);

export type esitoPspInviaRPT_ppt = t.TypeOf<typeof esitoPspInviaRPT_ppt>;
