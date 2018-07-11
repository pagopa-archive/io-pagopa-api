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
var nodoInviaRichiestaRevocaHeader_1 = require("./nodoInviaRichiestaRevocaHeader");
var nodoInviaRichiestaRevoca_ppt_1 = require("./nodoInviaRichiestaRevoca_ppt");
// required attributes
var nodoInviaRichiestaRevocaInputEnvelopeBodyR = t.interface({
    nodoInviaRichiestaRevoca: nodoInviaRichiestaRevoca_ppt_1.nodoInviaRichiestaRevoca_ppt
});
// optional attributes
var nodoInviaRichiestaRevocaInputEnvelopeBodyO = t.partial({});
exports.nodoInviaRichiestaRevocaInputEnvelopeBody = t.exact(t.intersection([
    nodoInviaRichiestaRevocaInputEnvelopeBodyR,
    nodoInviaRichiestaRevocaInputEnvelopeBodyO
], "nodoInviaRichiestaRevocaInputEnvelopeBody"));
// required attributes
var nodoInviaRichiestaRevocaInputEnvelopeR = t.interface({
    Body: exports.nodoInviaRichiestaRevocaInputEnvelopeBody
});
// optional attributes
var nodoInviaRichiestaRevocaInputEnvelopeO = t.partial({
    Header: nodoInviaRichiestaRevocaHeader_1.nodoInviaRichiestaRevocaHeader
});
exports.nodoInviaRichiestaRevocaInputEnvelope = t.exact(t.intersection([
    nodoInviaRichiestaRevocaInputEnvelopeR,
    nodoInviaRichiestaRevocaInputEnvelopeO
], "nodoInviaRichiestaRevocaInputEnvelope"));
// required attributes
var nodoInviaRichiestaRevocaInputR = t.interface({
    Envelope: exports.nodoInviaRichiestaRevocaInputEnvelope
});
// optional attributes
var nodoInviaRichiestaRevocaInputO = t.partial({});
exports.nodoInviaRichiestaRevocaInput = t.exact(t.intersection([nodoInviaRichiestaRevocaInputR, nodoInviaRichiestaRevocaInputO], "nodoInviaRichiestaRevocaInput"));
