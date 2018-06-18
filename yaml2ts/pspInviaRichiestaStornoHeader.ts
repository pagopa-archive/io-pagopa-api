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
const pspInviaRichiestaStornoHeaderR = t.interface({});

// optional attributes
const pspInviaRichiestaStornoHeaderO = t.partial({
  Security: Security
});

export const pspInviaRichiestaStornoHeader = t.exact(
  t.intersection(
    [pspInviaRichiestaStornoHeaderR, pspInviaRichiestaStornoHeaderO],
    "pspInviaRichiestaStornoHeader"
  )
);

export type pspInviaRichiestaStornoHeader = t.TypeOf<
  typeof pspInviaRichiestaStornoHeader
>;
