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
const valoreNotificaCancellazioneRPT_ppt2R = t.interface({});

// optional attributes
const valoreNotificaCancellazioneRPT_ppt2O = t.partial({
  esito: t.string
});

export const valoreNotificaCancellazioneRPT_ppt2 = t.exact(
  t.intersection(
    [
      valoreNotificaCancellazioneRPT_ppt2R,
      valoreNotificaCancellazioneRPT_ppt2O
    ],
    "valoreNotificaCancellazioneRPT_ppt2"
  )
);

export type valoreNotificaCancellazioneRPT_ppt2 = t.TypeOf<
  typeof valoreNotificaCancellazioneRPT_ppt2
>;

export const valoreNotificaCancellazioneRPT_ppt = t.intersection(
  [risposta_ppt, valoreNotificaCancellazioneRPT_ppt2],
  "valoreNotificaCancellazioneRPT_ppt"
);

export type valoreNotificaCancellazioneRPT_ppt = t.TypeOf<
  typeof valoreNotificaCancellazioneRPT_ppt
>;
