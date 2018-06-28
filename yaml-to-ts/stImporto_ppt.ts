/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import { WithinRangeNumber } from "italia-ts-commons/lib/numbers";
import * as t from "io-ts";

export type stImporto_ppt = t.TypeOf<typeof stImporto_ppt>;
export const stImporto_ppt = WithinRangeNumber(0, 999999.99);
