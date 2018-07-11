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
var t = require("io-ts");
var nodoChiediTemplateInformativaPSPRisposta_ppt_1 = require("./nodoChiediTemplateInformativaPSPRisposta_ppt");
// required attributes
var nodoChiediTemplateInformativaPSPOutputEnvelopeBodyR = t.interface({});
// optional attributes
var nodoChiediTemplateInformativaPSPOutputEnvelopeBodyO = t.partial({
    nodoChiediTemplateInformativaPSPRisposta: nodoChiediTemplateInformativaPSPRisposta_ppt_1.nodoChiediTemplateInformativaPSPRisposta_ppt
});
exports.nodoChiediTemplateInformativaPSPOutputEnvelopeBody = t.exact(t.intersection([
    nodoChiediTemplateInformativaPSPOutputEnvelopeBodyR,
    nodoChiediTemplateInformativaPSPOutputEnvelopeBodyO
], "nodoChiediTemplateInformativaPSPOutputEnvelopeBody"));
// required attributes
var nodoChiediTemplateInformativaPSPOutputEnvelopeR = t.interface({
    Body: exports.nodoChiediTemplateInformativaPSPOutputEnvelopeBody
});
// optional attributes
var nodoChiediTemplateInformativaPSPOutputEnvelopeO = t.partial({});
exports.nodoChiediTemplateInformativaPSPOutputEnvelope = t.exact(t.intersection([
    nodoChiediTemplateInformativaPSPOutputEnvelopeR,
    nodoChiediTemplateInformativaPSPOutputEnvelopeO
], "nodoChiediTemplateInformativaPSPOutputEnvelope"));
// required attributes
var nodoChiediTemplateInformativaPSPOutputR = t.interface({
    Envelope: exports.nodoChiediTemplateInformativaPSPOutputEnvelope
});
// optional attributes
var nodoChiediTemplateInformativaPSPOutputO = t.partial({});
exports.nodoChiediTemplateInformativaPSPOutput = t.exact(t.intersection([
    nodoChiediTemplateInformativaPSPOutputR,
    nodoChiediTemplateInformativaPSPOutputO
], "nodoChiediTemplateInformativaPSPOutput"));
