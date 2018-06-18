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
const tipoInviaAckRTResponse_ppt2R = t.interface({});

// optional attributes
const tipoInviaAckRTResponse_ppt2O = t.partial({
  esito: t.string
});

export const tipoInviaAckRTResponse_ppt2 = t.exact(
  t.intersection(
    [tipoInviaAckRTResponse_ppt2R, tipoInviaAckRTResponse_ppt2O],
    "tipoInviaAckRTResponse_ppt2"
  )
);

export type tipoInviaAckRTResponse_ppt2 = t.TypeOf<
  typeof tipoInviaAckRTResponse_ppt2
>;

export const tipoInviaAckRTResponse_ppt = t.intersection(
  [risposta_ppt, tipoInviaAckRTResponse_ppt2],
  "tipoInviaAckRTResponse_ppt"
);

export type tipoInviaAckRTResponse_ppt = t.TypeOf<
  typeof tipoInviaAckRTResponse_ppt
>;
