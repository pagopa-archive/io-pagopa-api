"use strict";
/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:variable-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */
exports.__esModule = true;
var risposta_ppt_1 = require("./risposta_ppt");
var t = require("io-ts");
// required attributes
var esitoNodoInviaRTRisposta_ppt2R = t.interface({
    esito: t.string
});
// optional attributes
var esitoNodoInviaRTRisposta_ppt2O = t.partial({});
exports.esitoNodoInviaRTRisposta_ppt2 = t.exact(t.intersection([esitoNodoInviaRTRisposta_ppt2R, esitoNodoInviaRTRisposta_ppt2O], "esitoNodoInviaRTRisposta_ppt2"));
exports.esitoNodoInviaRTRisposta_ppt = t.intersection([risposta_ppt_1.risposta_ppt, exports.esitoNodoInviaRTRisposta_ppt2], "esitoNodoInviaRTRisposta_ppt");
