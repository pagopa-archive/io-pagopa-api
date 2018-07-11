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
var nodoChiediQuadraturaPSPRisposta_ppt_1 = require("./nodoChiediQuadraturaPSPRisposta_ppt");
// required attributes
var nodoChiediQuadraturaPSPOutputEnvelopeBodyR = t.interface({});
// optional attributes
var nodoChiediQuadraturaPSPOutputEnvelopeBodyO = t.partial({
    nodoChiediQuadraturaPSPRisposta: nodoChiediQuadraturaPSPRisposta_ppt_1.nodoChiediQuadraturaPSPRisposta_ppt
});
exports.nodoChiediQuadraturaPSPOutputEnvelopeBody = t.exact(t.intersection([
    nodoChiediQuadraturaPSPOutputEnvelopeBodyR,
    nodoChiediQuadraturaPSPOutputEnvelopeBodyO
], "nodoChiediQuadraturaPSPOutputEnvelopeBody"));
// required attributes
var nodoChiediQuadraturaPSPOutputEnvelopeR = t.interface({
    Body: exports.nodoChiediQuadraturaPSPOutputEnvelopeBody
});
// optional attributes
var nodoChiediQuadraturaPSPOutputEnvelopeO = t.partial({});
exports.nodoChiediQuadraturaPSPOutputEnvelope = t.exact(t.intersection([
    nodoChiediQuadraturaPSPOutputEnvelopeR,
    nodoChiediQuadraturaPSPOutputEnvelopeO
], "nodoChiediQuadraturaPSPOutputEnvelope"));
// required attributes
var nodoChiediQuadraturaPSPOutputR = t.interface({
    Envelope: exports.nodoChiediQuadraturaPSPOutputEnvelope
});
// optional attributes
var nodoChiediQuadraturaPSPOutputO = t.partial({});
exports.nodoChiediQuadraturaPSPOutput = t.exact(t.intersection([nodoChiediQuadraturaPSPOutputR, nodoChiediQuadraturaPSPOutputO], "nodoChiediQuadraturaPSPOutput"));
