/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import { stStatoMessaggio_pay_j } from "./stStatoMessaggio_pay_j";
import { ctMotivazioneStatoErrato_pay_j } from "./ctMotivazioneStatoErrato_pay_j";
import * as t from "io-ts";

// required attributes
const ctStatoDelMessaggioReferenziato_pay_jR = t.interface({
  statoMessaggioReferenziato: stStatoMessaggio_pay_j
});

// optional attributes
const ctStatoDelMessaggioReferenziato_pay_jO = t.partial({
  motivazioneStatoErrato: ctMotivazioneStatoErrato_pay_j
});

export const ctStatoDelMessaggioReferenziato_pay_j = t.exact(
  t.intersection(
    [
      ctStatoDelMessaggioReferenziato_pay_jR,
      ctStatoDelMessaggioReferenziato_pay_jO
    ],
    "ctStatoDelMessaggioReferenziato_pay_j"
  )
);

export type ctStatoDelMessaggioReferenziato_pay_j = t.TypeOf<
  typeof ctStatoDelMessaggioReferenziato_pay_j
>;
