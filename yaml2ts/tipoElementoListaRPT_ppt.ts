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
const tipoElementoListaRPT_pptR = t.interface({
  identificativoUnivocoVersamento: stText35_ppt,

  codiceContestoPagamento: stText35_ppt,

  rpt: t.string
});

// optional attributes
const tipoElementoListaRPT_pptO = t.partial({
  parametriProfiloPagamento: t.string,

  tipoFirma: t.string
});

export const tipoElementoListaRPT_ppt = t.exact(
  t.intersection(
    [tipoElementoListaRPT_pptR, tipoElementoListaRPT_pptO],
    "tipoElementoListaRPT_ppt"
  )
);

export type tipoElementoListaRPT_ppt = t.TypeOf<
  typeof tipoElementoListaRPT_ppt
>;
