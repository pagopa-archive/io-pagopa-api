/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import { risposta_ppt } from "./risposta_ppt";
import * as t from "io-ts";

// required attributes
const tipoInviaRichiestaStornoResponse_ppt2R = t.interface({});

// optional attributes
const tipoInviaRichiestaStornoResponse_ppt2O = t.partial({
  esito: t.string
});

export const tipoInviaRichiestaStornoResponse_ppt2 = t.exact(
  t.intersection(
    [
      tipoInviaRichiestaStornoResponse_ppt2R,
      tipoInviaRichiestaStornoResponse_ppt2O
    ],
    "tipoInviaRichiestaStornoResponse_ppt2"
  )
);

export type tipoInviaRichiestaStornoResponse_ppt2 = t.TypeOf<
  typeof tipoInviaRichiestaStornoResponse_ppt2
>;

export const tipoInviaRichiestaStornoResponse_ppt = t.intersection(
  [risposta_ppt, tipoInviaRichiestaStornoResponse_ppt2],
  "tipoInviaRichiestaStornoResponse_ppt"
);

export type tipoInviaRichiestaStornoResponse_ppt = t.TypeOf<
  typeof tipoInviaRichiestaStornoResponse_ppt
>;
