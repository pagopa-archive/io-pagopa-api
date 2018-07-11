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
var esitoNodoInviaRTRisposta_ppt_1 = require("./esitoNodoInviaRTRisposta_ppt");
var t = require("io-ts");
// required attributes
var nodoInviaRTRisposta_pptR = t.interface({
    nodoInviaRTRisposta: esitoNodoInviaRTRisposta_ppt_1.esitoNodoInviaRTRisposta_ppt
});
// optional attributes
var nodoInviaRTRisposta_pptO = t.partial({});
exports.nodoInviaRTRisposta_ppt = t.exact(t.intersection([nodoInviaRTRisposta_pptR, nodoInviaRTRisposta_pptO], "nodoInviaRTRisposta_ppt"));
