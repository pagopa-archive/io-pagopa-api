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
const nodoInviaRichiestaRevocaRisposta_ppt_1 = require("./nodoInviaRichiestaRevocaRisposta_ppt");
// required attributes
const nodoInviaRichiestaRevocaOutputEnvelopeBodyR = t.interface({});
// optional attributes
const nodoInviaRichiestaRevocaOutputEnvelopeBodyO = t.partial({
    nodoInviaRichiestaRevocaRisposta: nodoInviaRichiestaRevocaRisposta_ppt_1.nodoInviaRichiestaRevocaRisposta_ppt
});
exports.nodoInviaRichiestaRevocaOutputEnvelopeBody = t.exact(t.intersection([
    nodoInviaRichiestaRevocaOutputEnvelopeBodyR,
    nodoInviaRichiestaRevocaOutputEnvelopeBodyO
], "nodoInviaRichiestaRevocaOutputEnvelopeBody"));
// required attributes
const nodoInviaRichiestaRevocaOutputEnvelopeR = t.interface({
    Body: exports.nodoInviaRichiestaRevocaOutputEnvelopeBody
});
// optional attributes
const nodoInviaRichiestaRevocaOutputEnvelopeO = t.partial({});
exports.nodoInviaRichiestaRevocaOutputEnvelope = t.exact(t.intersection([
    nodoInviaRichiestaRevocaOutputEnvelopeR,
    nodoInviaRichiestaRevocaOutputEnvelopeO
], "nodoInviaRichiestaRevocaOutputEnvelope"));
// required attributes
const nodoInviaRichiestaRevocaOutputR = t.interface({
    Envelope: exports.nodoInviaRichiestaRevocaOutputEnvelope
});
// optional attributes
const nodoInviaRichiestaRevocaOutputO = t.partial({});
exports.nodoInviaRichiestaRevocaOutput = t.exact(t.intersection([nodoInviaRichiestaRevocaOutputR, nodoInviaRichiestaRevocaOutputO], "nodoInviaRichiestaRevocaOutput"));
//# sourceMappingURL=nodoInviaRichiestaRevocaOutput.js.map