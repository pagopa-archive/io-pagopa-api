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
var nodoChiediElencoQuadraturePSP_pptR = t.interface({
    identificativoPSP: stText35_ppt_1.stText35_ppt,
    identificativoIntermediarioPSP: stText35_ppt_1.stText35_ppt,
    identificativoCanale: stText35_ppt_1.stText35_ppt,
    password: stPassword_ppt_1.stPassword_ppt
});
// optional attributes
var nodoChiediElencoQuadraturePSP_pptO = t.partial({
    identificativoDominio: stText35_ppt_1.stText35_ppt
});
exports.nodoChiediElencoQuadraturePSP_ppt = t.exact(t.intersection([nodoChiediElencoQuadraturePSP_pptR, nodoChiediElencoQuadraturePSP_pptO], "nodoChiediElencoQuadraturePSP_ppt"));
