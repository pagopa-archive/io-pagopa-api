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
var nodoChiediElencoQuadraturePSPRisposta_ppt_1 = require("./nodoChiediElencoQuadraturePSPRisposta_ppt");
// required attributes
var nodoChiediElencoQuadraturePSPOutputEnvelopeBodyR = t.interface({});
// optional attributes
var nodoChiediElencoQuadraturePSPOutputEnvelopeBodyO = t.partial({
    nodoChiediElencoQuadraturePSPRisposta: nodoChiediElencoQuadraturePSPRisposta_ppt_1.nodoChiediElencoQuadraturePSPRisposta_ppt
});
exports.nodoChiediElencoQuadraturePSPOutputEnvelopeBody = t.exact(t.intersection([
    nodoChiediElencoQuadraturePSPOutputEnvelopeBodyR,
    nodoChiediElencoQuadraturePSPOutputEnvelopeBodyO
], "nodoChiediElencoQuadraturePSPOutputEnvelopeBody"));
// required attributes
var nodoChiediElencoQuadraturePSPOutputEnvelopeR = t.interface({
    Body: exports.nodoChiediElencoQuadraturePSPOutputEnvelopeBody
});
// optional attributes
var nodoChiediElencoQuadraturePSPOutputEnvelopeO = t.partial({});
exports.nodoChiediElencoQuadraturePSPOutputEnvelope = t.exact(t.intersection([
    nodoChiediElencoQuadraturePSPOutputEnvelopeR,
    nodoChiediElencoQuadraturePSPOutputEnvelopeO
], "nodoChiediElencoQuadraturePSPOutputEnvelope"));
// required attributes
var nodoChiediElencoQuadraturePSPOutputR = t.interface({
    Envelope: exports.nodoChiediElencoQuadraturePSPOutputEnvelope
});
// optional attributes
var nodoChiediElencoQuadraturePSPOutputO = t.partial({});
exports.nodoChiediElencoQuadraturePSPOutput = t.exact(t.intersection([
    nodoChiediElencoQuadraturePSPOutputR,
    nodoChiediElencoQuadraturePSPOutputO
], "nodoChiediElencoQuadraturePSPOutput"));
