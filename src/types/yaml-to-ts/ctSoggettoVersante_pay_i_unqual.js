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
var ctSoggettoVersante_pay_i_unqualR = t.interface({
    identificativoUnivocoVersante: ctIdentificativoUnivocoPersonaFG_pay_i_1.ctIdentificativoUnivocoPersonaFG_pay_i,
    anagraficaVersante: stText70_pay_i_1.stText70_pay_i
});
// optional attributes
var ctSoggettoVersante_pay_i_unqualO = t.partial({
    indirizzoVersante: stText70_pay_i_1.stText70_pay_i,
    civicoVersante: stText16_pay_i_1.stText16_pay_i,
    capVersante: stText16_pay_i_1.stText16_pay_i,
    localitaVersante: stText35_pay_i_1.stText35_pay_i,
    provinciaVersante: stText35_pay_i_1.stText35_pay_i,
    nazioneVersante: stNazioneProvincia_pay_i_1.stNazioneProvincia_pay_i,
    "e-mailVersante": stEMail_pay_i_1.stEMail_pay_i
});
exports.ctSoggettoVersante_pay_i_unqual = t.exact(t.intersection([ctSoggettoVersante_pay_i_unqualR, ctSoggettoVersante_pay_i_unqualO], "ctSoggettoVersante_pay_i_unqual"));
