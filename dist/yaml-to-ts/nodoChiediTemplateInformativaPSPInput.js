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
const nodoChiediTemplateInformativaPSPHeader_1 = require("./nodoChiediTemplateInformativaPSPHeader");
const nodoChiediTemplateInformativaPSP_ppt_1 = require("./nodoChiediTemplateInformativaPSP_ppt");
// required attributes
const nodoChiediTemplateInformativaPSPInputEnvelopeBodyR = t.interface({
    nodoChiediTemplateInformativaPSP: nodoChiediTemplateInformativaPSP_ppt_1.nodoChiediTemplateInformativaPSP_ppt
});
// optional attributes
const nodoChiediTemplateInformativaPSPInputEnvelopeBodyO = t.partial({});
exports.nodoChiediTemplateInformativaPSPInputEnvelopeBody = t.exact(t.intersection([
    nodoChiediTemplateInformativaPSPInputEnvelopeBodyR,
    nodoChiediTemplateInformativaPSPInputEnvelopeBodyO
], "nodoChiediTemplateInformativaPSPInputEnvelopeBody"));
// required attributes
const nodoChiediTemplateInformativaPSPInputEnvelopeR = t.interface({
    Body: exports.nodoChiediTemplateInformativaPSPInputEnvelopeBody
});
// optional attributes
const nodoChiediTemplateInformativaPSPInputEnvelopeO = t.partial({
    Header: nodoChiediTemplateInformativaPSPHeader_1.nodoChiediTemplateInformativaPSPHeader
});
exports.nodoChiediTemplateInformativaPSPInputEnvelope = t.exact(t.intersection([
    nodoChiediTemplateInformativaPSPInputEnvelopeR,
    nodoChiediTemplateInformativaPSPInputEnvelopeO
], "nodoChiediTemplateInformativaPSPInputEnvelope"));
// required attributes
const nodoChiediTemplateInformativaPSPInputR = t.interface({
    Envelope: exports.nodoChiediTemplateInformativaPSPInputEnvelope
});
// optional attributes
const nodoChiediTemplateInformativaPSPInputO = t.partial({});
exports.nodoChiediTemplateInformativaPSPInput = t.exact(t.intersection([
    nodoChiediTemplateInformativaPSPInputR,
    nodoChiediTemplateInformativaPSPInputO
], "nodoChiediTemplateInformativaPSPInput"));
//# sourceMappingURL=nodoChiediTemplateInformativaPSPInput.js.map