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
var nodoAttivaRPTRisposta_ppt_1 = require("./nodoAttivaRPTRisposta_ppt");
// required attributes
var nodoAttivaRPTOutputEnvelopeBodyR = t.interface({});
// optional attributes
var nodoAttivaRPTOutputEnvelopeBodyO = t.partial({
    nodoAttivaRPTRisposta: nodoAttivaRPTRisposta_ppt_1.nodoAttivaRPTRisposta_ppt
});
exports.nodoAttivaRPTOutputEnvelopeBody = t.exact(t.intersection([nodoAttivaRPTOutputEnvelopeBodyR, nodoAttivaRPTOutputEnvelopeBodyO], "nodoAttivaRPTOutputEnvelopeBody"));
// required attributes
var nodoAttivaRPTOutputEnvelopeR = t.interface({
    Body: exports.nodoAttivaRPTOutputEnvelopeBody
});
// optional attributes
var nodoAttivaRPTOutputEnvelopeO = t.partial({});
exports.nodoAttivaRPTOutputEnvelope = t.exact(t.intersection([nodoAttivaRPTOutputEnvelopeR, nodoAttivaRPTOutputEnvelopeO], "nodoAttivaRPTOutputEnvelope"));
// required attributes
var nodoAttivaRPTOutputR = t.interface({
    Envelope: exports.nodoAttivaRPTOutputEnvelope
});
// optional attributes
var nodoAttivaRPTOutputO = t.partial({});
exports.nodoAttivaRPTOutput = t.exact(t.intersection([nodoAttivaRPTOutputR, nodoAttivaRPTOutputO], "nodoAttivaRPTOutput"));
