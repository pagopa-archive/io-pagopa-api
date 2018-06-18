/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import { stCodiceErrore_pay_j } from "./stCodiceErrore_pay_j";
import { stElementoReferenziato_pay_j } from "./stElementoReferenziato_pay_j";
import { stInformazioniAggiuntive_pay_j } from "./stInformazioniAggiuntive_pay_j";
import * as t from "io-ts";

// required attributes
const ctMotivazioneStatoErrato_pay_jR = t.interface({
  codiceErrore: stCodiceErrore_pay_j
});

// optional attributes
const ctMotivazioneStatoErrato_pay_jO = t.partial({
  elementoReferenziato: stElementoReferenziato_pay_j,

  InformazioniAggiuntive: t.readonlyArray(
    stInformazioniAggiuntive_pay_j,
    "array of stInformazioniAggiuntive_pay_j"
  )
});

export const ctMotivazioneStatoErrato_pay_j = t.exact(
  t.intersection(
    [ctMotivazioneStatoErrato_pay_jR, ctMotivazioneStatoErrato_pay_jO],
    "ctMotivazioneStatoErrato_pay_j"
  )
);

export type ctMotivazioneStatoErrato_pay_j = t.TypeOf<
  typeof ctMotivazioneStatoErrato_pay_j
>;
