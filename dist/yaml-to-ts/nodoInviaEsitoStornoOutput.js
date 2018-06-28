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
const nodoInviaEsitoStornoRisposta_ppt_1 = require("./nodoInviaEsitoStornoRisposta_ppt");
// required attributes
const nodoInviaEsitoStornoOutputEnvelopeBodyR = t.interface({});
// optional attributes
const nodoInviaEsitoStornoOutputEnvelopeBodyO = t.partial({
    nodoInviaEsitoStornoRisposta: nodoInviaEsitoStornoRisposta_ppt_1.nodoInviaEsitoStornoRisposta_ppt
});
exports.nodoInviaEsitoStornoOutputEnvelopeBody = t.exact(t.intersection([
    nodoInviaEsitoStornoOutputEnvelopeBodyR,
    nodoInviaEsitoStornoOutputEnvelopeBodyO
], "nodoInviaEsitoStornoOutputEnvelopeBody"));
// required attributes
const nodoInviaEsitoStornoOutputEnvelopeR = t.interface({
    Body: exports.nodoInviaEsitoStornoOutputEnvelopeBody
});
// optional attributes
const nodoInviaEsitoStornoOutputEnvelopeO = t.partial({});
exports.nodoInviaEsitoStornoOutputEnvelope = t.exact(t.intersection([nodoInviaEsitoStornoOutputEnvelopeR, nodoInviaEsitoStornoOutputEnvelopeO], "nodoInviaEsitoStornoOutputEnvelope"));
// required attributes
const nodoInviaEsitoStornoOutputR = t.interface({
    Envelope: exports.nodoInviaEsitoStornoOutputEnvelope
});
// optional attributes
const nodoInviaEsitoStornoOutputO = t.partial({});
exports.nodoInviaEsitoStornoOutput = t.exact(t.intersection([nodoInviaEsitoStornoOutputR, nodoInviaEsitoStornoOutputO], "nodoInviaEsitoStornoOutput"));
//# sourceMappingURL=nodoInviaEsitoStornoOutput.js.map