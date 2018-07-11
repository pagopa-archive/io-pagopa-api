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
var dates_1 = require("italia-ts-commons/lib/dates");
// required attributes
var nodoInviaFlussoRendicontazione_pptR = t.interface({
    identificativoPSP: stText35_ppt_1.stText35_ppt,
    password: stPassword_ppt_1.stPassword_ppt,
    identificativoDominio: stText35_ppt_1.stText35_ppt,
    identificativoFlusso: t.string,
    dataOraFlusso: dates_1.DateFromString,
    xmlRendicontazione: t.string
});
// optional attributes
var nodoInviaFlussoRendicontazione_pptO = t.partial({
    identificativoIntermediarioPSP: stText35_ppt_1.stText35_ppt,
    identificativoCanale: stText35_ppt_1.stText35_ppt
});
exports.nodoInviaFlussoRendicontazione_ppt = t.exact(t.intersection([nodoInviaFlussoRendicontazione_pptR, nodoInviaFlussoRendicontazione_pptO], "nodoInviaFlussoRendicontazione_ppt"));
