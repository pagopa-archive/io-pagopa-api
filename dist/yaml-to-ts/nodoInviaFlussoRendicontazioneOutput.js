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
const nodoInviaFlussoRendicontazioneRisposta_ppt_1 = require("./nodoInviaFlussoRendicontazioneRisposta_ppt");
// required attributes
const nodoInviaFlussoRendicontazioneOutputEnvelopeBodyR = t.interface({});
// optional attributes
const nodoInviaFlussoRendicontazioneOutputEnvelopeBodyO = t.partial({
    nodoInviaFlussoRendicontazioneRisposta: nodoInviaFlussoRendicontazioneRisposta_ppt_1.nodoInviaFlussoRendicontazioneRisposta_ppt
});
exports.nodoInviaFlussoRendicontazioneOutputEnvelopeBody = t.exact(t.intersection([
    nodoInviaFlussoRendicontazioneOutputEnvelopeBodyR,
    nodoInviaFlussoRendicontazioneOutputEnvelopeBodyO
], "nodoInviaFlussoRendicontazioneOutputEnvelopeBody"));
// required attributes
const nodoInviaFlussoRendicontazioneOutputEnvelopeR = t.interface({
    Body: exports.nodoInviaFlussoRendicontazioneOutputEnvelopeBody
});
// optional attributes
const nodoInviaFlussoRendicontazioneOutputEnvelopeO = t.partial({});
exports.nodoInviaFlussoRendicontazioneOutputEnvelope = t.exact(t.intersection([
    nodoInviaFlussoRendicontazioneOutputEnvelopeR,
    nodoInviaFlussoRendicontazioneOutputEnvelopeO
], "nodoInviaFlussoRendicontazioneOutputEnvelope"));
// required attributes
const nodoInviaFlussoRendicontazioneOutputR = t.interface({
    Envelope: exports.nodoInviaFlussoRendicontazioneOutputEnvelope
});
// optional attributes
const nodoInviaFlussoRendicontazioneOutputO = t.partial({});
exports.nodoInviaFlussoRendicontazioneOutput = t.exact(t.intersection([
    nodoInviaFlussoRendicontazioneOutputR,
    nodoInviaFlussoRendicontazioneOutputO
], "nodoInviaFlussoRendicontazioneOutput"));
//# sourceMappingURL=nodoInviaFlussoRendicontazioneOutput.js.map