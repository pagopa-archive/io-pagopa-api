/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import { stText35_ppt } from "./stText35_ppt";
import * as t from "io-ts";

// required attributes
const tipoElementoListaCarrelloRPT_pptR = t.interface({
  identificativoDominio: stText35_ppt,

  identificativoUnivocoVersamento: stText35_ppt,

  codiceContestoPagamento: stText35_ppt,

  rpt: t.string
});

// optional attributes
const tipoElementoListaCarrelloRPT_pptO = t.partial({
  tipoFirma: t.string
});

export const tipoElementoListaCarrelloRPT_ppt = t.exact(
  t.intersection(
    [tipoElementoListaCarrelloRPT_pptR, tipoElementoListaCarrelloRPT_pptO],
    "tipoElementoListaCarrelloRPT_ppt"
  )
);

export type tipoElementoListaCarrelloRPT_ppt = t.TypeOf<
  typeof tipoElementoListaCarrelloRPT_ppt
>;
