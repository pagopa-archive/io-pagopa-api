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
var ctIdentificativoUnivocoPersonaFG_pay_i_1 = require("./ctIdentificativoUnivocoPersonaFG_pay_i");
var stText70_pay_i_1 = require("./stText70_pay_i");
var stText16_pay_i_1 = require("./stText16_pay_i");
var stText35_pay_i_1 = require("./stText35_pay_i");
var stNazioneProvincia_pay_i_1 = require("./stNazioneProvincia_pay_i");
var stEMail_pay_i_1 = require("./stEMail_pay_i");
var t = require("io-ts");
// required attributes
var ctSoggettoPagatore_pay_i_unqualR = t.interface({
    identificativoUnivocoPagatore: ctIdentificativoUnivocoPersonaFG_pay_i_1.ctIdentificativoUnivocoPersonaFG_pay_i,
    anagraficaPagatore: stText70_pay_i_1.stText70_pay_i
});
// optional attributes
var ctSoggettoPagatore_pay_i_unqualO = t.partial({
    indirizzoPagatore: stText70_pay_i_1.stText70_pay_i,
    civicoPagatore: stText16_pay_i_1.stText16_pay_i,
    capPagatore: stText16_pay_i_1.stText16_pay_i,
    localitaPagatore: stText35_pay_i_1.stText35_pay_i,
    provinciaPagatore: stText35_pay_i_1.stText35_pay_i,
    nazionePagatore: stNazioneProvincia_pay_i_1.stNazioneProvincia_pay_i,
    "e-mailPagatore": stEMail_pay_i_1.stEMail_pay_i
});
exports.ctSoggettoPagatore_pay_i_unqual = t.exact(t.intersection([ctSoggettoPagatore_pay_i_unqualR, ctSoggettoPagatore_pay_i_unqualO], "ctSoggettoPagatore_pay_i_unqual"));
