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
const pspInviaRispostaRevocaHeaderR = t.interface({});

// optional attributes
const pspInviaRispostaRevocaHeaderO = t.partial({
  Security: Security
});

export const pspInviaRispostaRevocaHeader = t.exact(
  t.intersection(
    [pspInviaRispostaRevocaHeaderR, pspInviaRispostaRevocaHeaderO],
    "pspInviaRispostaRevocaHeader"
  )
);

export type pspInviaRispostaRevocaHeader = t.TypeOf<
  typeof pspInviaRispostaRevocaHeader
>;
