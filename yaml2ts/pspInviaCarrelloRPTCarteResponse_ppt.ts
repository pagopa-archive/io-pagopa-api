/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import { pspInviaCarrelloRPTResponse_ppt } from "./pspInviaCarrelloRPTResponse_ppt";
import * as t from "io-ts";

// required attributes
const pspInviaCarrelloRPTCarteResponse_ppt2R = t.interface({});

// optional attributes
const pspInviaCarrelloRPTCarteResponse_ppt2O = t.partial({});

export const pspInviaCarrelloRPTCarteResponse_ppt2 = t.exact(
  t.intersection(
    [
      pspInviaCarrelloRPTCarteResponse_ppt2R,
      pspInviaCarrelloRPTCarteResponse_ppt2O
    ],
    "pspInviaCarrelloRPTCarteResponse_ppt2"
  )
);

export type pspInviaCarrelloRPTCarteResponse_ppt2 = t.TypeOf<
  typeof pspInviaCarrelloRPTCarteResponse_ppt2
>;

export const pspInviaCarrelloRPTCarteResponse_ppt = t.intersection(
  [pspInviaCarrelloRPTResponse_ppt, pspInviaCarrelloRPTCarteResponse_ppt2],
  "pspInviaCarrelloRPTCarteResponse_ppt"
);

export type pspInviaCarrelloRPTCarteResponse_ppt = t.TypeOf<
  typeof pspInviaCarrelloRPTCarteResponse_ppt
>;
