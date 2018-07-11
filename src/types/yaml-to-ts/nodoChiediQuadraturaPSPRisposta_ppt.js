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
var t = require("io-ts");
// required attributes
var nodoChiediQuadraturaPSPRisposta_ppt2R = t.interface({});
// optional attributes
var nodoChiediQuadraturaPSPRisposta_ppt2O = t.partial({
    xmlQuadratura: t.string
});
exports.nodoChiediQuadraturaPSPRisposta_ppt2 = t.exact(t.intersection([
    nodoChiediQuadraturaPSPRisposta_ppt2R,
    nodoChiediQuadraturaPSPRisposta_ppt2O
], "nodoChiediQuadraturaPSPRisposta_ppt2"));
exports.nodoChiediQuadraturaPSPRisposta_ppt = t.intersection([risposta_ppt_1.risposta_ppt, exports.nodoChiediQuadraturaPSPRisposta_ppt2], "nodoChiediQuadraturaPSPRisposta_ppt");
