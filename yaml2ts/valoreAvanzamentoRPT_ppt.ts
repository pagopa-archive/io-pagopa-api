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
const valoreAvanzamentoRPT_ppt2R = t.interface({});

// optional attributes
const valoreAvanzamentoRPT_ppt2O = t.partial({
  value: t.string
});

export const valoreAvanzamentoRPT_ppt2 = t.exact(
  t.intersection(
    [valoreAvanzamentoRPT_ppt2R, valoreAvanzamentoRPT_ppt2O],
    "valoreAvanzamentoRPT_ppt2"
  )
);

export type valoreAvanzamentoRPT_ppt2 = t.TypeOf<
  typeof valoreAvanzamentoRPT_ppt2
>;

export const valoreAvanzamentoRPT_ppt = t.intersection(
  [risposta_ppt, valoreAvanzamentoRPT_ppt2],
  "valoreAvanzamentoRPT_ppt"
);

export type valoreAvanzamentoRPT_ppt = t.TypeOf<
  typeof valoreAvanzamentoRPT_ppt
>;
