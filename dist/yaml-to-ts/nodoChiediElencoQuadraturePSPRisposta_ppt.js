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
const risposta_ppt_1 = require("./risposta_ppt");
const tipoListaQuadrature_ppt_1 = require("./tipoListaQuadrature_ppt");
const t = require("io-ts");
// required attributes
const nodoChiediElencoQuadraturePSPRisposta_ppt2R = t.interface({});
// optional attributes
const nodoChiediElencoQuadraturePSPRisposta_ppt2O = t.partial({
    listaQuadrature: tipoListaQuadrature_ppt_1.tipoListaQuadrature_ppt
});
exports.nodoChiediElencoQuadraturePSPRisposta_ppt2 = t.exact(t.intersection([
    nodoChiediElencoQuadraturePSPRisposta_ppt2R,
    nodoChiediElencoQuadraturePSPRisposta_ppt2O
], "nodoChiediElencoQuadraturePSPRisposta_ppt2"));
exports.nodoChiediElencoQuadraturePSPRisposta_ppt = t.intersection([risposta_ppt_1.risposta_ppt, exports.nodoChiediElencoQuadraturePSPRisposta_ppt2], "nodoChiediElencoQuadraturePSPRisposta_ppt");
//# sourceMappingURL=nodoChiediElencoQuadraturePSPRisposta_ppt.js.map