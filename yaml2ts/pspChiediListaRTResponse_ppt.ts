/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import { chiediListaRTResponse_ppt } from "./chiediListaRTResponse_ppt";
import * as t from "io-ts";

// required attributes
const pspChiediListaRTResponse_pptR = t.interface({
  pspChiediListaRTResponse: chiediListaRTResponse_ppt
});

// optional attributes
const pspChiediListaRTResponse_pptO = t.partial({});

export const pspChiediListaRTResponse_ppt = t.exact(
  t.intersection(
    [pspChiediListaRTResponse_pptR, pspChiediListaRTResponse_pptO],
    "pspChiediListaRTResponse_ppt"
  )
);

export type pspChiediListaRTResponse_ppt = t.TypeOf<
  typeof pspChiediListaRTResponse_ppt
>;
