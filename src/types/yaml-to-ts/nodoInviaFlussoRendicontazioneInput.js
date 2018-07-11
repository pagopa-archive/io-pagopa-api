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
var nodoInviaFlussoRendicontazioneHeader_1 = require("./nodoInviaFlussoRendicontazioneHeader");
var nodoInviaFlussoRendicontazione_ppt_1 = require("./nodoInviaFlussoRendicontazione_ppt");
// required attributes
var nodoInviaFlussoRendicontazioneInputEnvelopeBodyR = t.interface({
    nodoInviaFlussoRendicontazione: nodoInviaFlussoRendicontazione_ppt_1.nodoInviaFlussoRendicontazione_ppt
});
// optional attributes
var nodoInviaFlussoRendicontazioneInputEnvelopeBodyO = t.partial({});
exports.nodoInviaFlussoRendicontazioneInputEnvelopeBody = t.exact(t.intersection([
    nodoInviaFlussoRendicontazioneInputEnvelopeBodyR,
    nodoInviaFlussoRendicontazioneInputEnvelopeBodyO
], "nodoInviaFlussoRendicontazioneInputEnvelopeBody"));
// required attributes
var nodoInviaFlussoRendicontazioneInputEnvelopeR = t.interface({
    Body: exports.nodoInviaFlussoRendicontazioneInputEnvelopeBody
});
// optional attributes
var nodoInviaFlussoRendicontazioneInputEnvelopeO = t.partial({
    Header: nodoInviaFlussoRendicontazioneHeader_1.nodoInviaFlussoRendicontazioneHeader
});
exports.nodoInviaFlussoRendicontazioneInputEnvelope = t.exact(t.intersection([
    nodoInviaFlussoRendicontazioneInputEnvelopeR,
    nodoInviaFlussoRendicontazioneInputEnvelopeO
], "nodoInviaFlussoRendicontazioneInputEnvelope"));
// required attributes
var nodoInviaFlussoRendicontazioneInputR = t.interface({
    Envelope: exports.nodoInviaFlussoRendicontazioneInputEnvelope
});
// optional attributes
var nodoInviaFlussoRendicontazioneInputO = t.partial({});
exports.nodoInviaFlussoRendicontazioneInput = t.exact(t.intersection([
    nodoInviaFlussoRendicontazioneInputR,
    nodoInviaFlussoRendicontazioneInputO
], "nodoInviaFlussoRendicontazioneInput"));
