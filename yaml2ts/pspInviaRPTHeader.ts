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
const pspInviaRPTHeaderR = t.interface({});

// optional attributes
const pspInviaRPTHeaderO = t.partial({
  Security: Security
});

export const pspInviaRPTHeader = t.exact(
  t.intersection([pspInviaRPTHeaderR, pspInviaRPTHeaderO], "pspInviaRPTHeader")
);

export type pspInviaRPTHeader = t.TypeOf<typeof pspInviaRPTHeader>;
