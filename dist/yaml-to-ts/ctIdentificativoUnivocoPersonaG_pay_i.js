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
const stTipoIdentificativoUnivocoPersG_pay_i_1 = require("./stTipoIdentificativoUnivocoPersG_pay_i");
const stText35_pay_i_1 = require("./stText35_pay_i");
const t = require("io-ts");
// required attributes
const ctIdentificativoUnivocoPersonaG_pay_iR = t.interface({
    tipoIdentificativoUnivoco: stTipoIdentificativoUnivocoPersG_pay_i_1.stTipoIdentificativoUnivocoPersG_pay_i,
    codiceIdentificativoUnivoco: stText35_pay_i_1.stText35_pay_i
});
// optional attributes
const ctIdentificativoUnivocoPersonaG_pay_iO = t.partial({});
exports.ctIdentificativoUnivocoPersonaG_pay_i = t.exact(t.intersection([
    ctIdentificativoUnivocoPersonaG_pay_iR,
    ctIdentificativoUnivocoPersonaG_pay_iO
], "ctIdentificativoUnivocoPersonaG_pay_i"));
//# sourceMappingURL=ctIdentificativoUnivocoPersonaG_pay_i.js.map