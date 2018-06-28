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
const stText35_ppt_1 = require("./stText35_ppt");
const stPassword_ppt_1 = require("./stPassword_ppt");
const t = require("io-ts");
// required attributes
const nodoChiediTemplateInformativaPSP_pptR = t.interface({
    identificativoPSP: stText35_ppt_1.stText35_ppt,
    identificativoIntermediarioPSP: stText35_ppt_1.stText35_ppt,
    identificativoCanale: stText35_ppt_1.stText35_ppt,
    password: stPassword_ppt_1.stPassword_ppt
});
// optional attributes
const nodoChiediTemplateInformativaPSP_pptO = t.partial({});
exports.nodoChiediTemplateInformativaPSP_ppt = t.exact(t.intersection([
    nodoChiediTemplateInformativaPSP_pptR,
    nodoChiediTemplateInformativaPSP_pptO
], "nodoChiediTemplateInformativaPSP_ppt"));
//# sourceMappingURL=nodoChiediTemplateInformativaPSP_ppt.js.map