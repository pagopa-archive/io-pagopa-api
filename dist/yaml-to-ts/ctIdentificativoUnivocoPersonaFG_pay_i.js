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
const stTipoIdentificativoUnivocoPersFG_pay_i_1 = require("./stTipoIdentificativoUnivocoPersFG_pay_i");
const stText35_pay_i_1 = require("./stText35_pay_i");
const t = require("io-ts");
// required attributes
const ctIdentificativoUnivocoPersonaFG_pay_iR = t.interface({
    tipoIdentificativoUnivoco: stTipoIdentificativoUnivocoPersFG_pay_i_1.stTipoIdentificativoUnivocoPersFG_pay_i,
    codiceIdentificativoUnivoco: stText35_pay_i_1.stText35_pay_i
});
// optional attributes
const ctIdentificativoUnivocoPersonaFG_pay_iO = t.partial({});
exports.ctIdentificativoUnivocoPersonaFG_pay_i = t.exact(t.intersection([
    ctIdentificativoUnivocoPersonaFG_pay_iR,
    ctIdentificativoUnivocoPersonaFG_pay_iO
], "ctIdentificativoUnivocoPersonaFG_pay_i"));
//# sourceMappingURL=ctIdentificativoUnivocoPersonaFG_pay_i.js.map