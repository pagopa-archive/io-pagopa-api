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
const nodoInviaRTHeader_1 = require("./nodoInviaRTHeader");
const nodoInviaRT_ppt_1 = require("./nodoInviaRT_ppt");
// required attributes
const nodoInviaRTInputEnvelopeBodyR = t.interface({
    nodoInviaRT: nodoInviaRT_ppt_1.nodoInviaRT_ppt
});
// optional attributes
const nodoInviaRTInputEnvelopeBodyO = t.partial({});
exports.nodoInviaRTInputEnvelopeBody = t.exact(t.intersection([nodoInviaRTInputEnvelopeBodyR, nodoInviaRTInputEnvelopeBodyO], "nodoInviaRTInputEnvelopeBody"));
// required attributes
const nodoInviaRTInputEnvelopeR = t.interface({
    Body: exports.nodoInviaRTInputEnvelopeBody
});
// optional attributes
const nodoInviaRTInputEnvelopeO = t.partial({
    Header: nodoInviaRTHeader_1.nodoInviaRTHeader
});
exports.nodoInviaRTInputEnvelope = t.exact(t.intersection([nodoInviaRTInputEnvelopeR, nodoInviaRTInputEnvelopeO], "nodoInviaRTInputEnvelope"));
// required attributes
const nodoInviaRTInputR = t.interface({
    Envelope: exports.nodoInviaRTInputEnvelope
});
// optional attributes
const nodoInviaRTInputO = t.partial({});
exports.nodoInviaRTInput = t.exact(t.intersection([nodoInviaRTInputR, nodoInviaRTInputO], "nodoInviaRTInput"));
//# sourceMappingURL=nodoInviaRTInput.js.map