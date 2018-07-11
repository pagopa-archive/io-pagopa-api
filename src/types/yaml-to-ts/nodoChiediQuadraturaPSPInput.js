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
var nodoChiediQuadraturaPSPHeader_1 = require("./nodoChiediQuadraturaPSPHeader");
var nodoChiediQuadraturaPSP_ppt_1 = require("./nodoChiediQuadraturaPSP_ppt");
// required attributes
var nodoChiediQuadraturaPSPInputEnvelopeBodyR = t.interface({
    nodoChiediQuadraturaPSP: nodoChiediQuadraturaPSP_ppt_1.nodoChiediQuadraturaPSP_ppt
});
// optional attributes
var nodoChiediQuadraturaPSPInputEnvelopeBodyO = t.partial({});
exports.nodoChiediQuadraturaPSPInputEnvelopeBody = t.exact(t.intersection([
    nodoChiediQuadraturaPSPInputEnvelopeBodyR,
    nodoChiediQuadraturaPSPInputEnvelopeBodyO
], "nodoChiediQuadraturaPSPInputEnvelopeBody"));
// required attributes
var nodoChiediQuadraturaPSPInputEnvelopeR = t.interface({
    Body: exports.nodoChiediQuadraturaPSPInputEnvelopeBody
});
// optional attributes
var nodoChiediQuadraturaPSPInputEnvelopeO = t.partial({
    Header: nodoChiediQuadraturaPSPHeader_1.nodoChiediQuadraturaPSPHeader
});
exports.nodoChiediQuadraturaPSPInputEnvelope = t.exact(t.intersection([
    nodoChiediQuadraturaPSPInputEnvelopeR,
    nodoChiediQuadraturaPSPInputEnvelopeO
], "nodoChiediQuadraturaPSPInputEnvelope"));
// required attributes
var nodoChiediQuadraturaPSPInputR = t.interface({
    Envelope: exports.nodoChiediQuadraturaPSPInputEnvelope
});
// optional attributes
var nodoChiediQuadraturaPSPInputO = t.partial({});
exports.nodoChiediQuadraturaPSPInput = t.exact(t.intersection([nodoChiediQuadraturaPSPInputR, nodoChiediQuadraturaPSPInputO], "nodoChiediQuadraturaPSPInput"));
