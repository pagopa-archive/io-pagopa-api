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
var stText35_ppt_1 = require("./stText35_ppt");
var stPassword_ppt_1 = require("./stPassword_ppt");
var nodoTipoCodiceIdRPT_ppt_1 = require("./nodoTipoCodiceIdRPT_ppt");
var nodoTipoDatiPagamentoPSP_ppt_1 = require("./nodoTipoDatiPagamentoPSP_ppt");
var t = require("io-ts");
// required attributes
var nodoAttivaRPT_pptR = t.interface({
    identificativoPSP: stText35_ppt_1.stText35_ppt,
    identificativoIntermediarioPSP: stText35_ppt_1.stText35_ppt,
    identificativoCanale: stText35_ppt_1.stText35_ppt,
    password: stPassword_ppt_1.stPassword_ppt,
    codiceContestoPagamento: stText35_ppt_1.stText35_ppt,
    identificativoIntermediarioPSPPagamento: stText35_ppt_1.stText35_ppt,
    identificativoCanalePagamento: stText35_ppt_1.stText35_ppt,
    codificaInfrastrutturaPSP: t.string,
    codiceIdRPT: nodoTipoCodiceIdRPT_ppt_1.nodoTipoCodiceIdRPT_ppt,
    datiPagamentoPSP: nodoTipoDatiPagamentoPSP_ppt_1.nodoTipoDatiPagamentoPSP_ppt
});
// optional attributes
var nodoAttivaRPT_pptO = t.partial({});
exports.nodoAttivaRPT_ppt = t.exact(t.intersection([nodoAttivaRPT_pptR, nodoAttivaRPT_pptO], "nodoAttivaRPT_ppt"));
