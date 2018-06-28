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
const t = require("io-ts");
const nodoChiediTemplateInformativaPSPRisposta_ppt_1 = require("./nodoChiediTemplateInformativaPSPRisposta_ppt");
// required attributes
const nodoChiediTemplateInformativaPSPOutputEnvelopeBodyR = t.interface({});
// optional attributes
const nodoChiediTemplateInformativaPSPOutputEnvelopeBodyO = t.partial({
    nodoChiediTemplateInformativaPSPRisposta: nodoChiediTemplateInformativaPSPRisposta_ppt_1.nodoChiediTemplateInformativaPSPRisposta_ppt
});
exports.nodoChiediTemplateInformativaPSPOutputEnvelopeBody = t.exact(t.intersection([
    nodoChiediTemplateInformativaPSPOutputEnvelopeBodyR,
    nodoChiediTemplateInformativaPSPOutputEnvelopeBodyO
], "nodoChiediTemplateInformativaPSPOutputEnvelopeBody"));
// required attributes
const nodoChiediTemplateInformativaPSPOutputEnvelopeR = t.interface({
    Body: exports.nodoChiediTemplateInformativaPSPOutputEnvelopeBody
});
// optional attributes
const nodoChiediTemplateInformativaPSPOutputEnvelopeO = t.partial({});
exports.nodoChiediTemplateInformativaPSPOutputEnvelope = t.exact(t.intersection([
    nodoChiediTemplateInformativaPSPOutputEnvelopeR,
    nodoChiediTemplateInformativaPSPOutputEnvelopeO
], "nodoChiediTemplateInformativaPSPOutputEnvelope"));
// required attributes
const nodoChiediTemplateInformativaPSPOutputR = t.interface({
    Envelope: exports.nodoChiediTemplateInformativaPSPOutputEnvelope
});
// optional attributes
const nodoChiediTemplateInformativaPSPOutputO = t.partial({});
exports.nodoChiediTemplateInformativaPSPOutput = t.exact(t.intersection([
    nodoChiediTemplateInformativaPSPOutputR,
    nodoChiediTemplateInformativaPSPOutputO
], "nodoChiediTemplateInformativaPSPOutput"));
//# sourceMappingURL=nodoChiediTemplateInformativaPSPOutput.js.map