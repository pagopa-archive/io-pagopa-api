/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import { tipoInviaRispostaRevocaResponse_ppt } from "./tipoInviaRispostaRevocaResponse_ppt";
import * as t from "io-ts";

// required attributes
const pspInviaRispostaRevocaResponse_pptR = t.interface({
  pspInviaRispostaRevocaResponse: tipoInviaRispostaRevocaResponse_ppt
});

// optional attributes
const pspInviaRispostaRevocaResponse_pptO = t.partial({});

export const pspInviaRispostaRevocaResponse_ppt = t.exact(
  t.intersection(
    [pspInviaRispostaRevocaResponse_pptR, pspInviaRispostaRevocaResponse_pptO],
    "pspInviaRispostaRevocaResponse_ppt"
  )
);

export type pspInviaRispostaRevocaResponse_ppt = t.TypeOf<
  typeof pspInviaRispostaRevocaResponse_ppt
>;
