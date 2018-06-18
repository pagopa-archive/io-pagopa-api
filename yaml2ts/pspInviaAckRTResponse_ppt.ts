/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import { tipoInviaAckRTResponse_ppt } from "./tipoInviaAckRTResponse_ppt";
import * as t from "io-ts";

// required attributes
const pspInviaAckRTResponse_pptR = t.interface({
  pspInviaAckRTResponse: tipoInviaAckRTResponse_ppt
});

// optional attributes
const pspInviaAckRTResponse_pptO = t.partial({});

export const pspInviaAckRTResponse_ppt = t.exact(
  t.intersection(
    [pspInviaAckRTResponse_pptR, pspInviaAckRTResponse_pptO],
    "pspInviaAckRTResponse_ppt"
  )
);

export type pspInviaAckRTResponse_ppt = t.TypeOf<
  typeof pspInviaAckRTResponse_ppt
>;
