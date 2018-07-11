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
var nodoChiediInformativaPARisposta_ppt_1 = require("./nodoChiediInformativaPARisposta_ppt");
// required attributes
var nodoChiediInformativaPAOutputEnvelopeBodyR = t.interface({});
// optional attributes
var nodoChiediInformativaPAOutputEnvelopeBodyO = t.partial({
    nodoChiediInformativaPARisposta: nodoChiediInformativaPARisposta_ppt_1.nodoChiediInformativaPARisposta_ppt
});
exports.nodoChiediInformativaPAOutputEnvelopeBody = t.exact(t.intersection([
    nodoChiediInformativaPAOutputEnvelopeBodyR,
    nodoChiediInformativaPAOutputEnvelopeBodyO
], "nodoChiediInformativaPAOutputEnvelopeBody"));
// required attributes
var nodoChiediInformativaPAOutputEnvelopeR = t.interface({
    Body: exports.nodoChiediInformativaPAOutputEnvelopeBody
});
// optional attributes
var nodoChiediInformativaPAOutputEnvelopeO = t.partial({});
exports.nodoChiediInformativaPAOutputEnvelope = t.exact(t.intersection([
    nodoChiediInformativaPAOutputEnvelopeR,
    nodoChiediInformativaPAOutputEnvelopeO
], "nodoChiediInformativaPAOutputEnvelope"));
// required attributes
var nodoChiediInformativaPAOutputR = t.interface({
    Envelope: exports.nodoChiediInformativaPAOutputEnvelope
});
// optional attributes
var nodoChiediInformativaPAOutputO = t.partial({});
exports.nodoChiediInformativaPAOutput = t.exact(t.intersection([nodoChiediInformativaPAOutputR, nodoChiediInformativaPAOutputO], "nodoChiediInformativaPAOutput"));
