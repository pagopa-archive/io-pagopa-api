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
const tipoIdQuadratura_ppt_1 = require("./tipoIdQuadratura_ppt");
const t = require("io-ts");
// required attributes
const tipoListaQuadrature_pptR = t.interface({
    totRestituiti: t.Integer
});
// optional attributes
const tipoListaQuadrature_pptO = t.partial({
    idQuadratura: t.readonlyArray(tipoIdQuadratura_ppt_1.tipoIdQuadratura_ppt, "array of tipoIdQuadratura_ppt")
});
exports.tipoListaQuadrature_ppt = t.exact(t.intersection([tipoListaQuadrature_pptR, tipoListaQuadrature_pptO], "tipoListaQuadrature_ppt"));
//# sourceMappingURL=tipoListaQuadrature_ppt.js.map