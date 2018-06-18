/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import { stText35_ppt } from "./stText35_ppt";
import { ctMessaggioDiAcknowledgement_pay_j_unqual } from "./ctMessaggioDiAcknowledgement_pay_j_unqual";
import * as t from "io-ts";

// required attributes
const pspInviaAckRT_pptR = t.interface({
  identificativoDominio: stText35_ppt,

  identificativoUnivocoVersamento: stText35_ppt,

  codiceContestoPagamento: stText35_ppt,

  ackRT: ctMessaggioDiAcknowledgement_pay_j_unqual
});

// optional attributes
const pspInviaAckRT_pptO = t.partial({});

export const pspInviaAckRT_ppt = t.exact(
  t.intersection([pspInviaAckRT_pptR, pspInviaAckRT_pptO], "pspInviaAckRT_ppt")
);

export type pspInviaAckRT_ppt = t.TypeOf<typeof pspInviaAckRT_ppt>;
