/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:variable-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import { risposta_ppt } from "./risposta_ppt";
import { tipoListaQuadrature_ppt } from "./tipoListaQuadrature_ppt";
import * as t from "io-ts";

// required attributes
const nodoChiediElencoQuadraturePSPRisposta_ppt2R = t.interface({});

// optional attributes
const nodoChiediElencoQuadraturePSPRisposta_ppt2O = t.partial({
  listaQuadrature: tipoListaQuadrature_ppt
});

export const nodoChiediElencoQuadraturePSPRisposta_ppt2 = t.exact(
  t.intersection(
    [
      nodoChiediElencoQuadraturePSPRisposta_ppt2R,
      nodoChiediElencoQuadraturePSPRisposta_ppt2O
    ],
    "nodoChiediElencoQuadraturePSPRisposta_ppt2"
  )
);

export type nodoChiediElencoQuadraturePSPRisposta_ppt2 = t.TypeOf<
  typeof nodoChiediElencoQuadraturePSPRisposta_ppt2
>;

export const nodoChiediElencoQuadraturePSPRisposta_ppt = t.intersection(
  [risposta_ppt, nodoChiediElencoQuadraturePSPRisposta_ppt2],
  "nodoChiediElencoQuadraturePSPRisposta_ppt"
);

export type nodoChiediElencoQuadraturePSPRisposta_ppt = t.TypeOf<
  typeof nodoChiediElencoQuadraturePSPRisposta_ppt
>;
