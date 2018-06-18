/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import { tipoInviaRichiestaStornoResponse_ppt } from "./tipoInviaRichiestaStornoResponse_ppt";
import * as t from "io-ts";

// required attributes
const pspInviaRichiestaStornoResponse_pptR = t.interface({
  pspInviaRichiestaStornoResponse: tipoInviaRichiestaStornoResponse_ppt
});

// optional attributes
const pspInviaRichiestaStornoResponse_pptO = t.partial({});

export const pspInviaRichiestaStornoResponse_ppt = t.exact(
  t.intersection(
    [
      pspInviaRichiestaStornoResponse_pptR,
      pspInviaRichiestaStornoResponse_pptO
    ],
    "pspInviaRichiestaStornoResponse_ppt"
  )
);

export type pspInviaRichiestaStornoResponse_ppt = t.TypeOf<
  typeof pspInviaRichiestaStornoResponse_ppt
>;
