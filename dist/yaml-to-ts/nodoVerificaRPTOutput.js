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
const nodoVerificaRPTRisposta_ppt_1 = require("./nodoVerificaRPTRisposta_ppt");
// required attributes
const nodoVerificaRPTOutputEnvelopeBodyR = t.interface({});
// optional attributes
const nodoVerificaRPTOutputEnvelopeBodyO = t.partial({
    nodoVerificaRPTRisposta: nodoVerificaRPTRisposta_ppt_1.nodoVerificaRPTRisposta_ppt
});
exports.nodoVerificaRPTOutputEnvelopeBody = t.exact(t.intersection([nodoVerificaRPTOutputEnvelopeBodyR, nodoVerificaRPTOutputEnvelopeBodyO], "nodoVerificaRPTOutputEnvelopeBody"));
// required attributes
const nodoVerificaRPTOutputEnvelopeR = t.interface({
    Body: exports.nodoVerificaRPTOutputEnvelopeBody
});
// optional attributes
const nodoVerificaRPTOutputEnvelopeO = t.partial({});
exports.nodoVerificaRPTOutputEnvelope = t.exact(t.intersection([nodoVerificaRPTOutputEnvelopeR, nodoVerificaRPTOutputEnvelopeO], "nodoVerificaRPTOutputEnvelope"));
// required attributes
const nodoVerificaRPTOutputR = t.interface({
    Envelope: exports.nodoVerificaRPTOutputEnvelope
});
// optional attributes
const nodoVerificaRPTOutputO = t.partial({});
exports.nodoVerificaRPTOutput = t.exact(t.intersection([nodoVerificaRPTOutputR, nodoVerificaRPTOutputO], "nodoVerificaRPTOutput"));
//# sourceMappingURL=nodoVerificaRPTOutput.js.map