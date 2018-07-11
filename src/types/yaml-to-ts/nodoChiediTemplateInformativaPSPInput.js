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
var nodoChiediTemplateInformativaPSPHeader_1 = require("./nodoChiediTemplateInformativaPSPHeader");
var nodoChiediTemplateInformativaPSP_ppt_1 = require("./nodoChiediTemplateInformativaPSP_ppt");
// required attributes
var nodoChiediTemplateInformativaPSPInputEnvelopeBodyR = t.interface({
    nodoChiediTemplateInformativaPSP: nodoChiediTemplateInformativaPSP_ppt_1.nodoChiediTemplateInformativaPSP_ppt
});
// optional attributes
var nodoChiediTemplateInformativaPSPInputEnvelopeBodyO = t.partial({});
exports.nodoChiediTemplateInformativaPSPInputEnvelopeBody = t.exact(t.intersection([
    nodoChiediTemplateInformativaPSPInputEnvelopeBodyR,
    nodoChiediTemplateInformativaPSPInputEnvelopeBodyO
], "nodoChiediTemplateInformativaPSPInputEnvelopeBody"));
// required attributes
var nodoChiediTemplateInformativaPSPInputEnvelopeR = t.interface({
    Body: exports.nodoChiediTemplateInformativaPSPInputEnvelopeBody
});
// optional attributes
var nodoChiediTemplateInformativaPSPInputEnvelopeO = t.partial({
    Header: nodoChiediTemplateInformativaPSPHeader_1.nodoChiediTemplateInformativaPSPHeader
});
exports.nodoChiediTemplateInformativaPSPInputEnvelope = t.exact(t.intersection([
    nodoChiediTemplateInformativaPSPInputEnvelopeR,
    nodoChiediTemplateInformativaPSPInputEnvelopeO
], "nodoChiediTemplateInformativaPSPInputEnvelope"));
// required attributes
var nodoChiediTemplateInformativaPSPInputR = t.interface({
    Envelope: exports.nodoChiediTemplateInformativaPSPInputEnvelope
});
// optional attributes
var nodoChiediTemplateInformativaPSPInputO = t.partial({});
exports.nodoChiediTemplateInformativaPSPInput = t.exact(t.intersection([
    nodoChiediTemplateInformativaPSPInputR,
    nodoChiediTemplateInformativaPSPInputO
], "nodoChiediTemplateInformativaPSPInput"));
