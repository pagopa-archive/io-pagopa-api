/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import { stText35_ppt } from "./stText35_ppt";
import { stPassword_ppt } from "./stPassword_ppt";
import * as t from "io-ts";
import { DateFromString } from "italia-ts-commons/lib/dates";

// required attributes
const nodoInviaFlussoRendicontazione_pptR = t.interface({
  identificativoPSP: stText35_ppt,

  password: stPassword_ppt,

  identificativoDominio: stText35_ppt,

  identificativoFlusso: t.string,

  dataOraFlusso: DateFromString,

  xmlRendicontazione: t.string
});

// optional attributes
const nodoInviaFlussoRendicontazione_pptO = t.partial({
  identificativoIntermediarioPSP: stText35_ppt,

  identificativoCanale: stText35_ppt
});

export const nodoInviaFlussoRendicontazione_ppt = t.exact(
  t.intersection(
    [nodoInviaFlussoRendicontazione_pptR, nodoInviaFlussoRendicontazione_pptO],
    "nodoInviaFlussoRendicontazione_ppt"
  )
);

export type nodoInviaFlussoRendicontazione_ppt = t.TypeOf<
  typeof nodoInviaFlussoRendicontazione_ppt
>;
