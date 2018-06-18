/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import { valoreNotificaCancellazioneRPT_ppt } from "./valoreNotificaCancellazioneRPT_ppt";
import * as t from "io-ts";

// required attributes
const pspNotificaCancellazioneRPTResponse_pptR = t.interface({
  pspNotificaCancellazioneRPTResponse: valoreNotificaCancellazioneRPT_ppt
});

// optional attributes
const pspNotificaCancellazioneRPTResponse_pptO = t.partial({});

export const pspNotificaCancellazioneRPTResponse_ppt = t.exact(
  t.intersection(
    [
      pspNotificaCancellazioneRPTResponse_pptR,
      pspNotificaCancellazioneRPTResponse_pptO
    ],
    "pspNotificaCancellazioneRPTResponse_ppt"
  )
);

export type pspNotificaCancellazioneRPTResponse_ppt = t.TypeOf<
  typeof pspNotificaCancellazioneRPTResponse_ppt
>;
