/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import { risposta_ppt } from "./risposta_ppt";
import { valoreListaRT_ppt } from "./valoreListaRT_ppt";
import * as t from "io-ts";

// required attributes
const chiediListaRTResponse_ppt2R = t.interface({});

// optional attributes
const chiediListaRTResponse_ppt2O = t.partial({
  elementoListaRTResponse: t.readonlyArray(
    valoreListaRT_ppt,
    "array of valoreListaRT_ppt"
  )
});

export const chiediListaRTResponse_ppt2 = t.exact(
  t.intersection(
    [chiediListaRTResponse_ppt2R, chiediListaRTResponse_ppt2O],
    "chiediListaRTResponse_ppt2"
  )
);

export type chiediListaRTResponse_ppt2 = t.TypeOf<
  typeof chiediListaRTResponse_ppt2
>;

export const chiediListaRTResponse_ppt = t.intersection(
  [risposta_ppt, chiediListaRTResponse_ppt2],
  "chiediListaRTResponse_ppt"
);

export type chiediListaRTResponse_ppt = t.TypeOf<
  typeof chiediListaRTResponse_ppt
>;
