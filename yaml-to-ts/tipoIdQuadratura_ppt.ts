/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import * as t from "io-ts";
import { DateFromString } from "italia-ts-commons/lib/dates";

// required attributes
const tipoIdQuadratura_pptR = t.interface({
  identificativoFlusso: t.string,

  dataOraFlusso: DateFromString
});

// optional attributes
const tipoIdQuadratura_pptO = t.partial({});

export const tipoIdQuadratura_ppt = t.exact(
  t.intersection(
    [tipoIdQuadratura_pptR, tipoIdQuadratura_pptO],
    "tipoIdQuadratura_ppt"
  )
);

export type tipoIdQuadratura_ppt = t.TypeOf<typeof tipoIdQuadratura_ppt>;
