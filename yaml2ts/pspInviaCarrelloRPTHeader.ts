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
const pspInviaCarrelloRPTHeaderR = t.interface({});

// optional attributes
const pspInviaCarrelloRPTHeaderO = t.partial({
  Security: Security
});

export const pspInviaCarrelloRPTHeader = t.exact(
  t.intersection(
    [pspInviaCarrelloRPTHeaderR, pspInviaCarrelloRPTHeaderO],
    "pspInviaCarrelloRPTHeader"
  )
);

export type pspInviaCarrelloRPTHeader = t.TypeOf<
  typeof pspInviaCarrelloRPTHeader
>;
