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
var nodoVerificaRPTRisposta_ppt_1 = require("./nodoVerificaRPTRisposta_ppt");
// required attributes
var nodoVerificaRPTOutputEnvelopeBodyR = t.interface({});
// optional attributes
var nodoVerificaRPTOutputEnvelopeBodyO = t.partial({
    nodoVerificaRPTRisposta: nodoVerificaRPTRisposta_ppt_1.nodoVerificaRPTRisposta_ppt
});
exports.nodoVerificaRPTOutputEnvelopeBody = t.exact(t.intersection([nodoVerificaRPTOutputEnvelopeBodyR, nodoVerificaRPTOutputEnvelopeBodyO], "nodoVerificaRPTOutputEnvelopeBody"));
// required attributes
var nodoVerificaRPTOutputEnvelopeR = t.interface({
    Body: exports.nodoVerificaRPTOutputEnvelopeBody
});
// optional attributes
var nodoVerificaRPTOutputEnvelopeO = t.partial({});
exports.nodoVerificaRPTOutputEnvelope = t.exact(t.intersection([nodoVerificaRPTOutputEnvelopeR, nodoVerificaRPTOutputEnvelopeO], "nodoVerificaRPTOutputEnvelope"));
// required attributes
var nodoVerificaRPTOutputR = t.interface({
    Envelope: exports.nodoVerificaRPTOutputEnvelope
});
// optional attributes
var nodoVerificaRPTOutputO = t.partial({});
exports.nodoVerificaRPTOutput = t.exact(t.intersection([nodoVerificaRPTOutputR, nodoVerificaRPTOutputO], "nodoVerificaRPTOutput"));
