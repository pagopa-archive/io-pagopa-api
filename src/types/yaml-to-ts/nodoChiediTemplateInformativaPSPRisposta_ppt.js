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
var nodoChiediTemplateInformativaPSPRisposta_ppt2R = t.interface({});
// optional attributes
var nodoChiediTemplateInformativaPSPRisposta_ppt2O = t.partial({
    xmlTemplateInformativa: t.string
});
exports.nodoChiediTemplateInformativaPSPRisposta_ppt2 = t.exact(t.intersection([
    nodoChiediTemplateInformativaPSPRisposta_ppt2R,
    nodoChiediTemplateInformativaPSPRisposta_ppt2O
], "nodoChiediTemplateInformativaPSPRisposta_ppt2"));
exports.nodoChiediTemplateInformativaPSPRisposta_ppt = t.intersection([risposta_ppt_1.risposta_ppt, exports.nodoChiediTemplateInformativaPSPRisposta_ppt2], "nodoChiediTemplateInformativaPSPRisposta_ppt");
