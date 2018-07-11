/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:variable-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import { tipoIdQuadratura_ppt } from "./tipoIdQuadratura_ppt";
import * as t from "io-ts";

// required attributes
const tipoListaQuadrature_pptR = t.interface({
  totRestituiti: t.Integer
});

// optional attributes
const tipoListaQuadrature_pptO = t.partial({
  idQuadratura: t.readonlyArray(
    tipoIdQuadratura_ppt,
    "array of tipoIdQuadratura_ppt"
  )
});

export const tipoListaQuadrature_ppt = t.exact(
  t.intersection(
    [tipoListaQuadrature_pptR, tipoListaQuadrature_pptO],
    "tipoListaQuadrature_ppt"
  )
);

export type tipoListaQuadrature_ppt = t.TypeOf<typeof tipoListaQuadrature_ppt>;
