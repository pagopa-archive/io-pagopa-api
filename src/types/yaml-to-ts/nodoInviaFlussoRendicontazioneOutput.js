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
var nodoInviaFlussoRendicontazioneRisposta_ppt_1 = require("./nodoInviaFlussoRendicontazioneRisposta_ppt");
// required attributes
var nodoInviaFlussoRendicontazioneOutputEnvelopeBodyR = t.interface({});
// optional attributes
var nodoInviaFlussoRendicontazioneOutputEnvelopeBodyO = t.partial({
    nodoInviaFlussoRendicontazioneRisposta: nodoInviaFlussoRendicontazioneRisposta_ppt_1.nodoInviaFlussoRendicontazioneRisposta_ppt
});
exports.nodoInviaFlussoRendicontazioneOutputEnvelopeBody = t.exact(t.intersection([
    nodoInviaFlussoRendicontazioneOutputEnvelopeBodyR,
    nodoInviaFlussoRendicontazioneOutputEnvelopeBodyO
], "nodoInviaFlussoRendicontazioneOutputEnvelopeBody"));
// required attributes
var nodoInviaFlussoRendicontazioneOutputEnvelopeR = t.interface({
    Body: exports.nodoInviaFlussoRendicontazioneOutputEnvelopeBody
});
// optional attributes
var nodoInviaFlussoRendicontazioneOutputEnvelopeO = t.partial({});
exports.nodoInviaFlussoRendicontazioneOutputEnvelope = t.exact(t.intersection([
    nodoInviaFlussoRendicontazioneOutputEnvelopeR,
    nodoInviaFlussoRendicontazioneOutputEnvelopeO
], "nodoInviaFlussoRendicontazioneOutputEnvelope"));
// required attributes
var nodoInviaFlussoRendicontazioneOutputR = t.interface({
    Envelope: exports.nodoInviaFlussoRendicontazioneOutputEnvelope
});
// optional attributes
var nodoInviaFlussoRendicontazioneOutputO = t.partial({});
exports.nodoInviaFlussoRendicontazioneOutput = t.exact(t.intersection([
    nodoInviaFlussoRendicontazioneOutputR,
    nodoInviaFlussoRendicontazioneOutputO
], "nodoInviaFlussoRendicontazioneOutput"));
