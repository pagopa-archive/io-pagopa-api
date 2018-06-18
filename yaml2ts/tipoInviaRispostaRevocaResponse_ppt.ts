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
const tipoInviaRispostaRevocaResponse_ppt2R = t.interface({});

// optional attributes
const tipoInviaRispostaRevocaResponse_ppt2O = t.partial({
  esito: t.string
});

export const tipoInviaRispostaRevocaResponse_ppt2 = t.exact(
  t.intersection(
    [
      tipoInviaRispostaRevocaResponse_ppt2R,
      tipoInviaRispostaRevocaResponse_ppt2O
    ],
    "tipoInviaRispostaRevocaResponse_ppt2"
  )
);

export type tipoInviaRispostaRevocaResponse_ppt2 = t.TypeOf<
  typeof tipoInviaRispostaRevocaResponse_ppt2
>;

export const tipoInviaRispostaRevocaResponse_ppt = t.intersection(
  [risposta_ppt, tipoInviaRispostaRevocaResponse_ppt2],
  "tipoInviaRispostaRevocaResponse_ppt"
);

export type tipoInviaRispostaRevocaResponse_ppt = t.TypeOf<
  typeof tipoInviaRispostaRevocaResponse_ppt
>;
