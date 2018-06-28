"use strict";
/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */
Object.defineProperty(exports, "__esModule", { value: true });
const risposta_ppt_1 = require("./risposta_ppt");
const t = require("io-ts");
// required attributes
const esitoNodoInviaRTRisposta_ppt2R = t.interface({
    esito: t.string
});
// optional attributes
const esitoNodoInviaRTRisposta_ppt2O = t.partial({});
exports.esitoNodoInviaRTRisposta_ppt2 = t.exact(t.intersection([esitoNodoInviaRTRisposta_ppt2R, esitoNodoInviaRTRisposta_ppt2O], "esitoNodoInviaRTRisposta_ppt2"));
exports.esitoNodoInviaRTRisposta_ppt = t.intersection([risposta_ppt_1.risposta_ppt, exports.esitoNodoInviaRTRisposta_ppt2], "esitoNodoInviaRTRisposta_ppt");
//# sourceMappingURL=esitoNodoInviaRTRisposta_ppt.js.map