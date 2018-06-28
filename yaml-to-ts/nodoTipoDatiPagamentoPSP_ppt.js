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
var ctSoggettoVersante_pay_i_unqual_1 = require("./ctSoggettoVersante_pay_i_unqual");
var ctSoggettoPagatore_pay_i_unqual_1 = require("./ctSoggettoPagatore_pay_i_unqual");
var t = require("io-ts");
var numbers_1 = require("italia-ts-commons/lib/numbers");
var strings_1 = require("italia-ts-commons/lib/strings");
// required attributes
var nodoTipoDatiPagamentoPSP_pptR = t.interface({
    importoSingoloVersamento: numbers_1.WithinRangeNumber(0, 99999999.99)
});
// optional attributes
var nodoTipoDatiPagamentoPSP_pptO = t.partial({
    ibanAppoggio: strings_1.PatternString("[a-zA-Z]{2,2}[0-9]{2,2}[a-zA-Z0-9]{1,30}"),
    bicAppoggio: strings_1.PatternString("[A-Z]{6,6}[A-Z2-9][A-NP-Z0-9]([A-Z0-9]{3,3}){0,1}"),
    soggettoVersante: ctSoggettoVersante_pay_i_unqual_1.ctSoggettoVersante_pay_i_unqual,
    ibanAddebito: strings_1.PatternString("[a-zA-Z]{2,2}[0-9]{2,2}[a-zA-Z0-9]{1,30}"),
    bicAddebito: strings_1.PatternString("[A-Z]{6,6}[A-Z2-9][A-NP-Z0-9]([A-Z0-9]{3,3}){0,1}"),
    soggettoPagatore: ctSoggettoPagatore_pay_i_unqual_1.ctSoggettoPagatore_pay_i_unqual
});
exports.nodoTipoDatiPagamentoPSP_ppt = t.exact(t.intersection([nodoTipoDatiPagamentoPSP_pptR, nodoTipoDatiPagamentoPSP_pptO], "nodoTipoDatiPagamentoPSP_ppt"));
