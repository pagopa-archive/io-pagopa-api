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
const nodoInviaRichiestaRevocaHeader_1 = require("./nodoInviaRichiestaRevocaHeader");
const nodoInviaRichiestaRevoca_ppt_1 = require("./nodoInviaRichiestaRevoca_ppt");
// required attributes
const nodoInviaRichiestaRevocaInputEnvelopeBodyR = t.interface({
    nodoInviaRichiestaRevoca: nodoInviaRichiestaRevoca_ppt_1.nodoInviaRichiestaRevoca_ppt
});
// optional attributes
const nodoInviaRichiestaRevocaInputEnvelopeBodyO = t.partial({});
exports.nodoInviaRichiestaRevocaInputEnvelopeBody = t.exact(t.intersection([
    nodoInviaRichiestaRevocaInputEnvelopeBodyR,
    nodoInviaRichiestaRevocaInputEnvelopeBodyO
], "nodoInviaRichiestaRevocaInputEnvelopeBody"));
// required attributes
const nodoInviaRichiestaRevocaInputEnvelopeR = t.interface({
    Body: exports.nodoInviaRichiestaRevocaInputEnvelopeBody
});
// optional attributes
const nodoInviaRichiestaRevocaInputEnvelopeO = t.partial({
    Header: nodoInviaRichiestaRevocaHeader_1.nodoInviaRichiestaRevocaHeader
});
exports.nodoInviaRichiestaRevocaInputEnvelope = t.exact(t.intersection([
    nodoInviaRichiestaRevocaInputEnvelopeR,
    nodoInviaRichiestaRevocaInputEnvelopeO
], "nodoInviaRichiestaRevocaInputEnvelope"));
// required attributes
const nodoInviaRichiestaRevocaInputR = t.interface({
    Envelope: exports.nodoInviaRichiestaRevocaInputEnvelope
});
// optional attributes
const nodoInviaRichiestaRevocaInputO = t.partial({});
exports.nodoInviaRichiestaRevocaInput = t.exact(t.intersection([nodoInviaRichiestaRevocaInputR, nodoInviaRichiestaRevocaInputO], "nodoInviaRichiestaRevocaInput"));
//# sourceMappingURL=nodoInviaRichiestaRevocaInput.js.map