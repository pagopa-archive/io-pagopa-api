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
var risposta_ppt_1 = require("./risposta_ppt");
var tipoListaQuadrature_ppt_1 = require("./tipoListaQuadrature_ppt");
var t = require("io-ts");
// required attributes
var nodoChiediElencoQuadraturePSPRisposta_ppt2R = t.interface({});
// optional attributes
var nodoChiediElencoQuadraturePSPRisposta_ppt2O = t.partial({
    listaQuadrature: tipoListaQuadrature_ppt_1.tipoListaQuadrature_ppt
});
exports.nodoChiediElencoQuadraturePSPRisposta_ppt2 = t.exact(t.intersection([
    nodoChiediElencoQuadraturePSPRisposta_ppt2R,
    nodoChiediElencoQuadraturePSPRisposta_ppt2O
], "nodoChiediElencoQuadraturePSPRisposta_ppt2"));
exports.nodoChiediElencoQuadraturePSPRisposta_ppt = t.intersection([risposta_ppt_1.risposta_ppt, exports.nodoChiediElencoQuadraturePSPRisposta_ppt2], "nodoChiediElencoQuadraturePSPRisposta_ppt");
