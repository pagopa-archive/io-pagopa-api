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
var nodoInviaEsitoStornoRisposta_ppt_1 = require("./nodoInviaEsitoStornoRisposta_ppt");
// required attributes
var nodoInviaEsitoStornoOutputEnvelopeBodyR = t.interface({});
// optional attributes
var nodoInviaEsitoStornoOutputEnvelopeBodyO = t.partial({
    nodoInviaEsitoStornoRisposta: nodoInviaEsitoStornoRisposta_ppt_1.nodoInviaEsitoStornoRisposta_ppt
});
exports.nodoInviaEsitoStornoOutputEnvelopeBody = t.exact(t.intersection([
    nodoInviaEsitoStornoOutputEnvelopeBodyR,
    nodoInviaEsitoStornoOutputEnvelopeBodyO
], "nodoInviaEsitoStornoOutputEnvelopeBody"));
// required attributes
var nodoInviaEsitoStornoOutputEnvelopeR = t.interface({
    Body: exports.nodoInviaEsitoStornoOutputEnvelopeBody
});
// optional attributes
var nodoInviaEsitoStornoOutputEnvelopeO = t.partial({});
exports.nodoInviaEsitoStornoOutputEnvelope = t.exact(t.intersection([nodoInviaEsitoStornoOutputEnvelopeR, nodoInviaEsitoStornoOutputEnvelopeO], "nodoInviaEsitoStornoOutputEnvelope"));
// required attributes
var nodoInviaEsitoStornoOutputR = t.interface({
    Envelope: exports.nodoInviaEsitoStornoOutputEnvelope
});
// optional attributes
var nodoInviaEsitoStornoOutputO = t.partial({});
exports.nodoInviaEsitoStornoOutput = t.exact(t.intersection([nodoInviaEsitoStornoOutputR, nodoInviaEsitoStornoOutputO], "nodoInviaEsitoStornoOutput"));
