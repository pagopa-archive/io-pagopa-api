/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:variable-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import { PatternString } from "italia-ts-commons/lib/strings";
import * as t from "io-ts";

export type stNazioneProvincia_pay_i = t.TypeOf<
  typeof stNazioneProvincia_pay_i
>;
export const stNazioneProvincia_pay_i = PatternString("[A-Z]{2,2}");
