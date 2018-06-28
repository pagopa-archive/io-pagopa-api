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
const nodoInviaRTRisposta_ppt_1 = require("./nodoInviaRTRisposta_ppt");
// required attributes
const nodoInviaRTOutputEnvelopeBodyR = t.interface({});
// optional attributes
const nodoInviaRTOutputEnvelopeBodyO = t.partial({
    nodoInviaRTRisposta: nodoInviaRTRisposta_ppt_1.nodoInviaRTRisposta_ppt
});
exports.nodoInviaRTOutputEnvelopeBody = t.exact(t.intersection([nodoInviaRTOutputEnvelopeBodyR, nodoInviaRTOutputEnvelopeBodyO], "nodoInviaRTOutputEnvelopeBody"));
// required attributes
const nodoInviaRTOutputEnvelopeR = t.interface({
    Body: exports.nodoInviaRTOutputEnvelopeBody
});
// optional attributes
const nodoInviaRTOutputEnvelopeO = t.partial({});
exports.nodoInviaRTOutputEnvelope = t.exact(t.intersection([nodoInviaRTOutputEnvelopeR, nodoInviaRTOutputEnvelopeO], "nodoInviaRTOutputEnvelope"));
// required attributes
const nodoInviaRTOutputR = t.interface({
    Envelope: exports.nodoInviaRTOutputEnvelope
});
// optional attributes
const nodoInviaRTOutputO = t.partial({});
exports.nodoInviaRTOutput = t.exact(t.intersection([nodoInviaRTOutputR, nodoInviaRTOutputO], "nodoInviaRTOutput"));
//# sourceMappingURL=nodoInviaRTOutput.js.map