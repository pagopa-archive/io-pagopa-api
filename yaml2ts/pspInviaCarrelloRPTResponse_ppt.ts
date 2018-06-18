/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import { esitoPspInviaCarrelloRPT_ppt } from "./esitoPspInviaCarrelloRPT_ppt";
import * as t from "io-ts";

// required attributes
const pspInviaCarrelloRPTResponse_pptR = t.interface({
  pspInviaCarrelloRPTResponse: esitoPspInviaCarrelloRPT_ppt
});

// optional attributes
const pspInviaCarrelloRPTResponse_pptO = t.partial({});

export const pspInviaCarrelloRPTResponse_ppt = t.exact(
  t.intersection(
    [pspInviaCarrelloRPTResponse_pptR, pspInviaCarrelloRPTResponse_pptO],
    "pspInviaCarrelloRPTResponse_ppt"
  )
);

export type pspInviaCarrelloRPTResponse_ppt = t.TypeOf<
  typeof pspInviaCarrelloRPTResponse_ppt
>;
