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
const t = require("io-ts");
// required attributes
const nodoChiediTemplateInformativaPSPRisposta_ppt2R = t.interface({});
// optional attributes
const nodoChiediTemplateInformativaPSPRisposta_ppt2O = t.partial({
    xmlTemplateInformativa: t.string
});
exports.nodoChiediTemplateInformativaPSPRisposta_ppt2 = t.exact(t.intersection([
    nodoChiediTemplateInformativaPSPRisposta_ppt2R,
    nodoChiediTemplateInformativaPSPRisposta_ppt2O
], "nodoChiediTemplateInformativaPSPRisposta_ppt2"));
exports.nodoChiediTemplateInformativaPSPRisposta_ppt = t.intersection([risposta_ppt_1.risposta_ppt, exports.nodoChiediTemplateInformativaPSPRisposta_ppt2], "nodoChiediTemplateInformativaPSPRisposta_ppt");
//# sourceMappingURL=nodoChiediTemplateInformativaPSPRisposta_ppt.js.map