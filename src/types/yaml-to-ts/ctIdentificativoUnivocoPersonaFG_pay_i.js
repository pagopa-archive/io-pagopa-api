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
var stTipoIdentificativoUnivocoPersFG_pay_i_1 = require("./stTipoIdentificativoUnivocoPersFG_pay_i");
var stText35_pay_i_1 = require("./stText35_pay_i");
var t = require("io-ts");
// required attributes
var ctIdentificativoUnivocoPersonaFG_pay_iR = t.interface({
    tipoIdentificativoUnivoco: stTipoIdentificativoUnivocoPersFG_pay_i_1.stTipoIdentificativoUnivocoPersFG_pay_i,
    codiceIdentificativoUnivoco: stText35_pay_i_1.stText35_pay_i
});
// optional attributes
var ctIdentificativoUnivocoPersonaFG_pay_iO = t.partial({});
exports.ctIdentificativoUnivocoPersonaFG_pay_i = t.exact(t.intersection([
    ctIdentificativoUnivocoPersonaFG_pay_iR,
    ctIdentificativoUnivocoPersonaFG_pay_iO
], "ctIdentificativoUnivocoPersonaFG_pay_i"));
