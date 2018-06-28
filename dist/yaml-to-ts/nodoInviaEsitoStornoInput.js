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
const nodoInviaEsitoStornoHeader_1 = require("./nodoInviaEsitoStornoHeader");
const nodoInviaEsitoStorno_ppt_1 = require("./nodoInviaEsitoStorno_ppt");
// required attributes
const nodoInviaEsitoStornoInputEnvelopeBodyR = t.interface({
    nodoInviaEsitoStorno: nodoInviaEsitoStorno_ppt_1.nodoInviaEsitoStorno_ppt
});
// optional attributes
const nodoInviaEsitoStornoInputEnvelopeBodyO = t.partial({});
exports.nodoInviaEsitoStornoInputEnvelopeBody = t.exact(t.intersection([
    nodoInviaEsitoStornoInputEnvelopeBodyR,
    nodoInviaEsitoStornoInputEnvelopeBodyO
], "nodoInviaEsitoStornoInputEnvelopeBody"));
// required attributes
const nodoInviaEsitoStornoInputEnvelopeR = t.interface({
    Body: exports.nodoInviaEsitoStornoInputEnvelopeBody
});
// optional attributes
const nodoInviaEsitoStornoInputEnvelopeO = t.partial({
    Header: nodoInviaEsitoStornoHeader_1.nodoInviaEsitoStornoHeader
});
exports.nodoInviaEsitoStornoInputEnvelope = t.exact(t.intersection([nodoInviaEsitoStornoInputEnvelopeR, nodoInviaEsitoStornoInputEnvelopeO], "nodoInviaEsitoStornoInputEnvelope"));
// required attributes
const nodoInviaEsitoStornoInputR = t.interface({
    Envelope: exports.nodoInviaEsitoStornoInputEnvelope
});
// optional attributes
const nodoInviaEsitoStornoInputO = t.partial({});
exports.nodoInviaEsitoStornoInput = t.exact(t.intersection([nodoInviaEsitoStornoInputR, nodoInviaEsitoStornoInputO], "nodoInviaEsitoStornoInput"));
//# sourceMappingURL=nodoInviaEsitoStornoInput.js.map