/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import { Security } from "./Security";
import * as t from "io-ts";

// required attributes
const pspChiediAvanzamentoRPTHeaderR = t.interface({});

// optional attributes
const pspChiediAvanzamentoRPTHeaderO = t.partial({
  Security: Security
});

export const pspChiediAvanzamentoRPTHeader = t.exact(
  t.intersection(
    [pspChiediAvanzamentoRPTHeaderR, pspChiediAvanzamentoRPTHeaderO],
    "pspChiediAvanzamentoRPTHeader"
  )
);

export type pspChiediAvanzamentoRPTHeader = t.TypeOf<
  typeof pspChiediAvanzamentoRPTHeader
>;
