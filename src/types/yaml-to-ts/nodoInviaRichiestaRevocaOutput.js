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
var nodoInviaRichiestaRevocaRisposta_ppt_1 = require("./nodoInviaRichiestaRevocaRisposta_ppt");
// required attributes
var nodoInviaRichiestaRevocaOutputEnvelopeBodyR = t.interface({});
// optional attributes
var nodoInviaRichiestaRevocaOutputEnvelopeBodyO = t.partial({
    nodoInviaRichiestaRevocaRisposta: nodoInviaRichiestaRevocaRisposta_ppt_1.nodoInviaRichiestaRevocaRisposta_ppt
});
exports.nodoInviaRichiestaRevocaOutputEnvelopeBody = t.exact(t.intersection([
    nodoInviaRichiestaRevocaOutputEnvelopeBodyR,
    nodoInviaRichiestaRevocaOutputEnvelopeBodyO
], "nodoInviaRichiestaRevocaOutputEnvelopeBody"));
// required attributes
var nodoInviaRichiestaRevocaOutputEnvelopeR = t.interface({
    Body: exports.nodoInviaRichiestaRevocaOutputEnvelopeBody
});
// optional attributes
var nodoInviaRichiestaRevocaOutputEnvelopeO = t.partial({});
exports.nodoInviaRichiestaRevocaOutputEnvelope = t.exact(t.intersection([
    nodoInviaRichiestaRevocaOutputEnvelopeR,
    nodoInviaRichiestaRevocaOutputEnvelopeO
], "nodoInviaRichiestaRevocaOutputEnvelope"));
// required attributes
var nodoInviaRichiestaRevocaOutputR = t.interface({
    Envelope: exports.nodoInviaRichiestaRevocaOutputEnvelope
});
// optional attributes
var nodoInviaRichiestaRevocaOutputO = t.partial({});
exports.nodoInviaRichiestaRevocaOutput = t.exact(t.intersection([nodoInviaRichiestaRevocaOutputR, nodoInviaRichiestaRevocaOutputO], "nodoInviaRichiestaRevocaOutput"));
