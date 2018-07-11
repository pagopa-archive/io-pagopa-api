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
const nodoInviaFlussoRendicontazioneHeaderR = t.interface({});

// optional attributes
const nodoInviaFlussoRendicontazioneHeaderO = t.partial({
  Security: Security
});

export const nodoInviaFlussoRendicontazioneHeader = t.exact(
  t.intersection(
    [
      nodoInviaFlussoRendicontazioneHeaderR,
      nodoInviaFlussoRendicontazioneHeaderO
    ],
    "nodoInviaFlussoRendicontazioneHeader"
  )
);

export type nodoInviaFlussoRendicontazioneHeader = t.TypeOf<
  typeof nodoInviaFlussoRendicontazioneHeader
>;
