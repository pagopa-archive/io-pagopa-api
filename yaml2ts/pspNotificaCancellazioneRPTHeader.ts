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
const pspNotificaCancellazioneRPTHeaderR = t.interface({});

// optional attributes
const pspNotificaCancellazioneRPTHeaderO = t.partial({
  Security: Security
});

export const pspNotificaCancellazioneRPTHeader = t.exact(
  t.intersection(
    [pspNotificaCancellazioneRPTHeaderR, pspNotificaCancellazioneRPTHeaderO],
    "pspNotificaCancellazioneRPTHeader"
  )
);

export type pspNotificaCancellazioneRPTHeader = t.TypeOf<
  typeof pspNotificaCancellazioneRPTHeader
>;
