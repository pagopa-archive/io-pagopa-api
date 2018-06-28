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
const nodoVerificaRPTHeader_1 = require("./nodoVerificaRPTHeader");
const nodoVerificaRPT_ppt_1 = require("./nodoVerificaRPT_ppt");
// required attributes
const nodoVerificaRPTInputEnvelopeBodyR = t.interface({
    nodoVerificaRPT: nodoVerificaRPT_ppt_1.nodoVerificaRPT_ppt
});
// optional attributes
const nodoVerificaRPTInputEnvelopeBodyO = t.partial({});
exports.nodoVerificaRPTInputEnvelopeBody = t.exact(t.intersection([nodoVerificaRPTInputEnvelopeBodyR, nodoVerificaRPTInputEnvelopeBodyO], "nodoVerificaRPTInputEnvelopeBody"));
// required attributes
const nodoVerificaRPTInputEnvelopeR = t.interface({
    Body: exports.nodoVerificaRPTInputEnvelopeBody
});
// optional attributes
const nodoVerificaRPTInputEnvelopeO = t.partial({
    Header: nodoVerificaRPTHeader_1.nodoVerificaRPTHeader
});
exports.nodoVerificaRPTInputEnvelope = t.exact(t.intersection([nodoVerificaRPTInputEnvelopeR, nodoVerificaRPTInputEnvelopeO], "nodoVerificaRPTInputEnvelope"));
// required attributes
const nodoVerificaRPTInputR = t.interface({
    Envelope: exports.nodoVerificaRPTInputEnvelope
});
// optional attributes
const nodoVerificaRPTInputO = t.partial({});
exports.nodoVerificaRPTInput = t.exact(t.intersection([nodoVerificaRPTInputR, nodoVerificaRPTInputO], "nodoVerificaRPTInput"));
//# sourceMappingURL=nodoVerificaRPTInput.js.map