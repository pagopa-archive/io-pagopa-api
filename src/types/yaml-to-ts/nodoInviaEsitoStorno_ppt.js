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
var stText35_ppt_1 = require("./stText35_ppt");
var stPassword_ppt_1 = require("./stPassword_ppt");
var t = require("io-ts");
// required attributes
var nodoInviaEsitoStorno_pptR = t.interface({
    identificativoPSP: stText35_ppt_1.stText35_ppt,
    identificativoIntermediarioPSP: stText35_ppt_1.stText35_ppt,
    identificativoCanale: stText35_ppt_1.stText35_ppt,
    password: stPassword_ppt_1.stPassword_ppt,
    identificativoDominio: stText35_ppt_1.stText35_ppt,
    identificativoUnivocoVersamento: stText35_ppt_1.stText35_ppt,
    codiceContestoPagamento: stText35_ppt_1.stText35_ppt
});
// optional attributes
var nodoInviaEsitoStorno_pptO = t.partial({
    er: t.string
});
exports.nodoInviaEsitoStorno_ppt = t.exact(t.intersection([nodoInviaEsitoStorno_pptR, nodoInviaEsitoStorno_pptO], "nodoInviaEsitoStorno_ppt"));
