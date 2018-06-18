/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import { esitoPspInviaRPT_ppt } from "./esitoPspInviaRPT_ppt";
import * as t from "io-ts";

// required attributes
const pspInviaRPTResponse_pptR = t.interface({
  pspInviaRPTResponse: esitoPspInviaRPT_ppt
});

// optional attributes
const pspInviaRPTResponse_pptO = t.partial({});

export const pspInviaRPTResponse_ppt = t.exact(
  t.intersection(
    [pspInviaRPTResponse_pptR, pspInviaRPTResponse_pptO],
    "pspInviaRPTResponse_ppt"
  )
);

export type pspInviaRPTResponse_ppt = t.TypeOf<typeof pspInviaRPTResponse_ppt>;
