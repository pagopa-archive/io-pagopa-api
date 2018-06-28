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
const nodoAttivaRPTRisposta_ppt_1 = require("./nodoAttivaRPTRisposta_ppt");
// required attributes
const nodoAttivaRPTOutputEnvelopeBodyR = t.interface({});
// optional attributes
const nodoAttivaRPTOutputEnvelopeBodyO = t.partial({
    nodoAttivaRPTRisposta: nodoAttivaRPTRisposta_ppt_1.nodoAttivaRPTRisposta_ppt
});
exports.nodoAttivaRPTOutputEnvelopeBody = t.exact(t.intersection([nodoAttivaRPTOutputEnvelopeBodyR, nodoAttivaRPTOutputEnvelopeBodyO], "nodoAttivaRPTOutputEnvelopeBody"));
// required attributes
const nodoAttivaRPTOutputEnvelopeR = t.interface({
    Body: exports.nodoAttivaRPTOutputEnvelopeBody
});
// optional attributes
const nodoAttivaRPTOutputEnvelopeO = t.partial({});
exports.nodoAttivaRPTOutputEnvelope = t.exact(t.intersection([nodoAttivaRPTOutputEnvelopeR, nodoAttivaRPTOutputEnvelopeO], "nodoAttivaRPTOutputEnvelope"));
// required attributes
const nodoAttivaRPTOutputR = t.interface({
    Envelope: exports.nodoAttivaRPTOutputEnvelope
});
// optional attributes
const nodoAttivaRPTOutputO = t.partial({});
exports.nodoAttivaRPTOutput = t.exact(t.intersection([nodoAttivaRPTOutputR, nodoAttivaRPTOutputO], "nodoAttivaRPTOutput"));
//# sourceMappingURL=nodoAttivaRPTOutput.js.map