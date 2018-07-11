"use strict";
/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */
exports.__esModule = true;
var risposta_ppt_1 = require("./risposta_ppt");
var t = require("io-ts");
// required attributes
var nodoInviaRichiestaRevocaRisposta_ppt2R = t.interface({});
// optional attributes
var nodoInviaRichiestaRevocaRisposta_ppt2O = t.partial({
    esito: t.string
});
exports.nodoInviaRichiestaRevocaRisposta_ppt2 = t.exact(t.intersection([
    nodoInviaRichiestaRevocaRisposta_ppt2R,
    nodoInviaRichiestaRevocaRisposta_ppt2O
], "nodoInviaRichiestaRevocaRisposta_ppt2"));
exports.nodoInviaRichiestaRevocaRisposta_ppt = t.intersection([risposta_ppt_1.risposta_ppt, exports.nodoInviaRichiestaRevocaRisposta_ppt2], "nodoInviaRichiestaRevocaRisposta_ppt");
