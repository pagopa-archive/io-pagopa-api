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
const ctIdentificativoUnivocoPersonaFG_pay_i_1 = require("./ctIdentificativoUnivocoPersonaFG_pay_i");
const stText70_pay_i_1 = require("./stText70_pay_i");
const stText16_pay_i_1 = require("./stText16_pay_i");
const stText35_pay_i_1 = require("./stText35_pay_i");
const stNazioneProvincia_pay_i_1 = require("./stNazioneProvincia_pay_i");
const stEMail_pay_i_1 = require("./stEMail_pay_i");
const t = require("io-ts");
// required attributes
const ctSoggettoVersante_pay_i_unqualR = t.interface({
    identificativoUnivocoVersante: ctIdentificativoUnivocoPersonaFG_pay_i_1.ctIdentificativoUnivocoPersonaFG_pay_i,
    anagraficaVersante: stText70_pay_i_1.stText70_pay_i
});
// optional attributes
const ctSoggettoVersante_pay_i_unqualO = t.partial({
    indirizzoVersante: stText70_pay_i_1.stText70_pay_i,
    civicoVersante: stText16_pay_i_1.stText16_pay_i,
    capVersante: stText16_pay_i_1.stText16_pay_i,
    localitaVersante: stText35_pay_i_1.stText35_pay_i,
    provinciaVersante: stText35_pay_i_1.stText35_pay_i,
    nazioneVersante: stNazioneProvincia_pay_i_1.stNazioneProvincia_pay_i,
    "e-mailVersante": stEMail_pay_i_1.stEMail_pay_i
});
exports.ctSoggettoVersante_pay_i_unqual = t.exact(t.intersection([ctSoggettoVersante_pay_i_unqualR, ctSoggettoVersante_pay_i_unqualO], "ctSoggettoVersante_pay_i_unqual"));
//# sourceMappingURL=ctSoggettoVersante_pay_i_unqual.js.map