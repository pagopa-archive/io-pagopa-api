/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import { valoreRT_ppt } from "./valoreRT_ppt";
import * as t from "io-ts";

// required attributes
const pspChiediRTResponse_pptR = t.interface({
  pspChiediRTResponse: valoreRT_ppt
});

// optional attributes
const pspChiediRTResponse_pptO = t.partial({});

export const pspChiediRTResponse_ppt = t.exact(
  t.intersection(
    [pspChiediRTResponse_pptR, pspChiediRTResponse_pptO],
    "pspChiediRTResponse_ppt"
  )
);

export type pspChiediRTResponse_ppt = t.TypeOf<typeof pspChiediRTResponse_ppt>;
