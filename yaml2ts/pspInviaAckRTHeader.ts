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
const pspInviaAckRTHeaderR = t.interface({});

// optional attributes
const pspInviaAckRTHeaderO = t.partial({
  Security: Security
});

export const pspInviaAckRTHeader = t.exact(
  t.intersection(
    [pspInviaAckRTHeaderR, pspInviaAckRTHeaderO],
    "pspInviaAckRTHeader"
  )
);

export type pspInviaAckRTHeader = t.TypeOf<typeof pspInviaAckRTHeader>;
