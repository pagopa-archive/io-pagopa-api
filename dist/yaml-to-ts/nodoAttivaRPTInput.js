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
const nodoAttivaRPTHeader_1 = require("./nodoAttivaRPTHeader");
const nodoAttivaRPT_ppt_1 = require("./nodoAttivaRPT_ppt");
// required attributes
const nodoAttivaRPTInputEnvelopeBodyR = t.interface({
    nodoAttivaRPT: nodoAttivaRPT_ppt_1.nodoAttivaRPT_ppt
});
// optional attributes
const nodoAttivaRPTInputEnvelopeBodyO = t.partial({});
exports.nodoAttivaRPTInputEnvelopeBody = t.exact(t.intersection([nodoAttivaRPTInputEnvelopeBodyR, nodoAttivaRPTInputEnvelopeBodyO], "nodoAttivaRPTInputEnvelopeBody"));
// required attributes
const nodoAttivaRPTInputEnvelopeR = t.interface({
    Body: exports.nodoAttivaRPTInputEnvelopeBody
});
// optional attributes
const nodoAttivaRPTInputEnvelopeO = t.partial({
    Header: nodoAttivaRPTHeader_1.nodoAttivaRPTHeader
});
exports.nodoAttivaRPTInputEnvelope = t.exact(t.intersection([nodoAttivaRPTInputEnvelopeR, nodoAttivaRPTInputEnvelopeO], "nodoAttivaRPTInputEnvelope"));
// required attributes
const nodoAttivaRPTInputR = t.interface({
    Envelope: exports.nodoAttivaRPTInputEnvelope
});
// optional attributes
const nodoAttivaRPTInputO = t.partial({});
exports.nodoAttivaRPTInput = t.exact(t.intersection([nodoAttivaRPTInputR, nodoAttivaRPTInputO], "nodoAttivaRPTInput"));
//# sourceMappingURL=nodoAttivaRPTInput.js.map