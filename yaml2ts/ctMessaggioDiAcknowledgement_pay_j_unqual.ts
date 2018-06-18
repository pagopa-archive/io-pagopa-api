/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import { stIdentificativoMessaggio_pay_j } from "./stIdentificativoMessaggio_pay_j";
import { stISODateTime_pay_j } from "./stISODateTime_pay_j";
import { stMittenteMessaggio_pay_j } from "./stMittenteMessaggio_pay_j";
import { ctDatiMessaggioReferenziato_pay_j } from "./ctDatiMessaggioReferenziato_pay_j";
import { ctStatoDelMessaggioReferenziato_pay_j } from "./ctStatoDelMessaggioReferenziato_pay_j";
import * as t from "io-ts";

// required attributes
const ctMessaggioDiAcknowledgement_pay_j_unqualR = t.interface({
  identificativoACK: stIdentificativoMessaggio_pay_j,

  dataOraACK: stISODateTime_pay_j,

  mittenteACK: stMittenteMessaggio_pay_j,

  datiMessaggioReferenziato: ctDatiMessaggioReferenziato_pay_j,

  informazioniStatoMessaggioReferenziato: ctStatoDelMessaggioReferenziato_pay_j
});

// optional attributes
const ctMessaggioDiAcknowledgement_pay_j_unqualO = t.partial({});

export const ctMessaggioDiAcknowledgement_pay_j_unqual = t.exact(
  t.intersection(
    [
      ctMessaggioDiAcknowledgement_pay_j_unqualR,
      ctMessaggioDiAcknowledgement_pay_j_unqualO
    ],
    "ctMessaggioDiAcknowledgement_pay_j_unqual"
  )
);

export type ctMessaggioDiAcknowledgement_pay_j_unqual = t.TypeOf<
  typeof ctMessaggioDiAcknowledgement_pay_j_unqual
>;
