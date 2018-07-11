/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:variable-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import { Security } from "./Security";
import * as t from "io-ts";

// required attributes
const nodoInviaRichiestaRevocaHeaderR = t.interface({});

// optional attributes
const nodoInviaRichiestaRevocaHeaderO = t.partial({
  Security: Security
});

export const nodoInviaRichiestaRevocaHeader = t.exact(
  t.intersection(
    [nodoInviaRichiestaRevocaHeaderR, nodoInviaRichiestaRevocaHeaderO],
    "nodoInviaRichiestaRevocaHeader"
  )
);

export type nodoInviaRichiestaRevocaHeader = t.TypeOf<
  typeof nodoInviaRichiestaRevocaHeader
>;
