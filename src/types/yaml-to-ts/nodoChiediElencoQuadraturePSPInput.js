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
var nodoChiediElencoQuadraturePSPHeader_1 = require("./nodoChiediElencoQuadraturePSPHeader");
var nodoChiediElencoQuadraturePSP_ppt_1 = require("./nodoChiediElencoQuadraturePSP_ppt");
// required attributes
var nodoChiediElencoQuadraturePSPInputEnvelopeBodyR = t.interface({
    nodoChiediElencoQuadraturePSP: nodoChiediElencoQuadraturePSP_ppt_1.nodoChiediElencoQuadraturePSP_ppt
});
// optional attributes
var nodoChiediElencoQuadraturePSPInputEnvelopeBodyO = t.partial({});
exports.nodoChiediElencoQuadraturePSPInputEnvelopeBody = t.exact(t.intersection([
    nodoChiediElencoQuadraturePSPInputEnvelopeBodyR,
    nodoChiediElencoQuadraturePSPInputEnvelopeBodyO
], "nodoChiediElencoQuadraturePSPInputEnvelopeBody"));
// required attributes
var nodoChiediElencoQuadraturePSPInputEnvelopeR = t.interface({
    Body: exports.nodoChiediElencoQuadraturePSPInputEnvelopeBody
});
// optional attributes
var nodoChiediElencoQuadraturePSPInputEnvelopeO = t.partial({
    Header: nodoChiediElencoQuadraturePSPHeader_1.nodoChiediElencoQuadraturePSPHeader
});
exports.nodoChiediElencoQuadraturePSPInputEnvelope = t.exact(t.intersection([
    nodoChiediElencoQuadraturePSPInputEnvelopeR,
    nodoChiediElencoQuadraturePSPInputEnvelopeO
], "nodoChiediElencoQuadraturePSPInputEnvelope"));
// required attributes
var nodoChiediElencoQuadraturePSPInputR = t.interface({
    Envelope: exports.nodoChiediElencoQuadraturePSPInputEnvelope
});
// optional attributes
var nodoChiediElencoQuadraturePSPInputO = t.partial({});
exports.nodoChiediElencoQuadraturePSPInput = t.exact(t.intersection([nodoChiediElencoQuadraturePSPInputR, nodoChiediElencoQuadraturePSPInputO], "nodoChiediElencoQuadraturePSPInput"));
