/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import { Security } from "./Security";
import * as t from "io-ts";

// required attributes
const pspInviaCarrelloRPTCarteHeaderR = t.interface({});

// optional attributes
const pspInviaCarrelloRPTCarteHeaderO = t.partial({
  Security: Security
});

export const pspInviaCarrelloRPTCarteHeader = t.exact(
  t.intersection(
    [pspInviaCarrelloRPTCarteHeaderR, pspInviaCarrelloRPTCarteHeaderO],
    "pspInviaCarrelloRPTCarteHeader"
  )
);

export type pspInviaCarrelloRPTCarteHeader = t.TypeOf<
  typeof pspInviaCarrelloRPTCarteHeader
>;
