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
var nodoInviaRTRisposta_ppt_1 = require("./nodoInviaRTRisposta_ppt");
// required attributes
var nodoInviaRTOutputEnvelopeBodyR = t.interface({});
// optional attributes
var nodoInviaRTOutputEnvelopeBodyO = t.partial({
    nodoInviaRTRisposta: nodoInviaRTRisposta_ppt_1.nodoInviaRTRisposta_ppt
});
exports.nodoInviaRTOutputEnvelopeBody = t.exact(t.intersection([nodoInviaRTOutputEnvelopeBodyR, nodoInviaRTOutputEnvelopeBodyO], "nodoInviaRTOutputEnvelopeBody"));
// required attributes
var nodoInviaRTOutputEnvelopeR = t.interface({
    Body: exports.nodoInviaRTOutputEnvelopeBody
});
// optional attributes
var nodoInviaRTOutputEnvelopeO = t.partial({});
exports.nodoInviaRTOutputEnvelope = t.exact(t.intersection([nodoInviaRTOutputEnvelopeR, nodoInviaRTOutputEnvelopeO], "nodoInviaRTOutputEnvelope"));
// required attributes
var nodoInviaRTOutputR = t.interface({
    Envelope: exports.nodoInviaRTOutputEnvelope
});
// optional attributes
var nodoInviaRTOutputO = t.partial({});
exports.nodoInviaRTOutput = t.exact(t.intersection([nodoInviaRTOutputR, nodoInviaRTOutputO], "nodoInviaRTOutput"));
