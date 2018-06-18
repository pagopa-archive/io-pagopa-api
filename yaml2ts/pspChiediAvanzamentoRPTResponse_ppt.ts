/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import { valoreAvanzamentoRPT_ppt } from "./valoreAvanzamentoRPT_ppt";
import * as t from "io-ts";

// required attributes
const pspChiediAvanzamentoRPTResponse_pptR = t.interface({
  pspChiediAvanzamentoRPTResponse: valoreAvanzamentoRPT_ppt
});

// optional attributes
const pspChiediAvanzamentoRPTResponse_pptO = t.partial({});

export const pspChiediAvanzamentoRPTResponse_ppt = t.exact(
  t.intersection(
    [
      pspChiediAvanzamentoRPTResponse_pptR,
      pspChiediAvanzamentoRPTResponse_pptO
    ],
    "pspChiediAvanzamentoRPTResponse_ppt"
  )
);

export type pspChiediAvanzamentoRPTResponse_ppt = t.TypeOf<
  typeof pspChiediAvanzamentoRPTResponse_ppt
>;
