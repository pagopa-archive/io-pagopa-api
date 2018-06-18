/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import { tipoElementoListaCarrelloRPT_ppt } from "./tipoElementoListaCarrelloRPT_ppt";
import * as t from "io-ts";

// required attributes
const tipoListaRPT_pptR = t.interface({
  elementoListaCarrelloRPT: t.readonlyArray(
    tipoElementoListaCarrelloRPT_ppt,
    "array of tipoElementoListaCarrelloRPT_ppt"
  )
});

// optional attributes
const tipoListaRPT_pptO = t.partial({});

export const tipoListaRPT_ppt = t.exact(
  t.intersection([tipoListaRPT_pptR, tipoListaRPT_pptO], "tipoListaRPT_ppt")
);

export type tipoListaRPT_ppt = t.TypeOf<typeof tipoListaRPT_ppt>;
