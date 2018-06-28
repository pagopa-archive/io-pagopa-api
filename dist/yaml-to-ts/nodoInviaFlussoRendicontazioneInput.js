"use strict";
/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */
Object.defineProperty(exports, "__esModule", { value: true });
const t = require("io-ts");
const nodoInviaFlussoRendicontazioneHeader_1 = require("./nodoInviaFlussoRendicontazioneHeader");
const nodoInviaFlussoRendicontazione_ppt_1 = require("./nodoInviaFlussoRendicontazione_ppt");
// required attributes
const nodoInviaFlussoRendicontazioneInputEnvelopeBodyR = t.interface({
    nodoInviaFlussoRendicontazione: nodoInviaFlussoRendicontazione_ppt_1.nodoInviaFlussoRendicontazione_ppt
});
// optional attributes
const nodoInviaFlussoRendicontazioneInputEnvelopeBodyO = t.partial({});
exports.nodoInviaFlussoRendicontazioneInputEnvelopeBody = t.exact(t.intersection([
    nodoInviaFlussoRendicontazioneInputEnvelopeBodyR,
    nodoInviaFlussoRendicontazioneInputEnvelopeBodyO
], "nodoInviaFlussoRendicontazioneInputEnvelopeBody"));
// required attributes
const nodoInviaFlussoRendicontazioneInputEnvelopeR = t.interface({
    Body: exports.nodoInviaFlussoRendicontazioneInputEnvelopeBody
});
// optional attributes
const nodoInviaFlussoRendicontazioneInputEnvelopeO = t.partial({
    Header: nodoInviaFlussoRendicontazioneHeader_1.nodoInviaFlussoRendicontazioneHeader
});
exports.nodoInviaFlussoRendicontazioneInputEnvelope = t.exact(t.intersection([
    nodoInviaFlussoRendicontazioneInputEnvelopeR,
    nodoInviaFlussoRendicontazioneInputEnvelopeO
], "nodoInviaFlussoRendicontazioneInputEnvelope"));
// required attributes
const nodoInviaFlussoRendicontazioneInputR = t.interface({
    Envelope: exports.nodoInviaFlussoRendicontazioneInputEnvelope
});
// optional attributes
const nodoInviaFlussoRendicontazioneInputO = t.partial({});
exports.nodoInviaFlussoRendicontazioneInput = t.exact(t.intersection([
    nodoInviaFlussoRendicontazioneInputR,
    nodoInviaFlussoRendicontazioneInputO
], "nodoInviaFlussoRendicontazioneInput"));
//# sourceMappingURL=nodoInviaFlussoRendicontazioneInput.js.map