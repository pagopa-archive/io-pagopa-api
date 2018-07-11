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
var ctEnteBeneficiario_pay_i_unqual_1 = require("./ctEnteBeneficiario_pay_i_unqual");
var stText140_ppt_1 = require("./stText140_ppt");
var ctSpezzoniCausaleVersamento_ppt_1 = require("./ctSpezzoniCausaleVersamento_ppt");
var t = require("io-ts");
var numbers_1 = require("italia-ts-commons/lib/numbers");
var strings_1 = require("italia-ts-commons/lib/strings");
var strings_2 = require("italia-ts-commons/lib/strings");
// required attributes
var nodoTipoDatiPagamentoPA_pptR = t.interface({
    importoSingoloVersamento: numbers_1.WithinRangeNumber(0, 99999999.99)
});
// optional attributes
var nodoTipoDatiPagamentoPA_pptO = t.partial({
    ibanAccredito: strings_1.PatternString("[a-zA-Z]{2,2}[0-9]{2,2}[a-zA-Z0-9]{1,30}"),
    bicAccredito: strings_1.PatternString("[A-Z]{6,6}[A-Z2-9][A-NP-Z0-9]([A-Z0-9]{3,3}){0,1}"),
    enteBeneficiario: ctEnteBeneficiario_pay_i_unqual_1.ctEnteBeneficiario_pay_i_unqual,
    credenzialiPagatore: strings_2.WithinRangeString(1, 35),
    causaleVersamento: stText140_ppt_1.stText140_ppt,
    spezzoniCausaleVersamento: ctSpezzoniCausaleVersamento_ppt_1.ctSpezzoniCausaleVersamento_ppt
});
exports.nodoTipoDatiPagamentoPA_ppt = t.exact(t.intersection([nodoTipoDatiPagamentoPA_pptR, nodoTipoDatiPagamentoPA_pptO], "nodoTipoDatiPagamentoPA_ppt"));
