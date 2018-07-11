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
var tipoIdQuadratura_ppt_1 = require("./tipoIdQuadratura_ppt");
var t = require("io-ts");
// required attributes
var tipoListaQuadrature_pptR = t.interface({
    totRestituiti: t.Integer
});
// optional attributes
var tipoListaQuadrature_pptO = t.partial({
    idQuadratura: t.readonlyArray(tipoIdQuadratura_ppt_1.tipoIdQuadratura_ppt, "array of tipoIdQuadratura_ppt")
});
exports.tipoListaQuadrature_ppt = t.exact(t.intersection([tipoListaQuadrature_pptR, tipoListaQuadrature_pptO], "tipoListaQuadrature_ppt"));
