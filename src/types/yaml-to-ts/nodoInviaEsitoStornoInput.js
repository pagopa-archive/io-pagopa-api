"use strict";
/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */
exports.__esModule = true;
var t = require("io-ts");
var nodoInviaEsitoStornoHeader_1 = require("./nodoInviaEsitoStornoHeader");
var nodoInviaEsitoStorno_ppt_1 = require("./nodoInviaEsitoStorno_ppt");
// required attributes
var nodoInviaEsitoStornoInputEnvelopeBodyR = t.interface({
    nodoInviaEsitoStorno: nodoInviaEsitoStorno_ppt_1.nodoInviaEsitoStorno_ppt
});
// optional attributes
var nodoInviaEsitoStornoInputEnvelopeBodyO = t.partial({});
exports.nodoInviaEsitoStornoInputEnvelopeBody = t.exact(t.intersection([
    nodoInviaEsitoStornoInputEnvelopeBodyR,
    nodoInviaEsitoStornoInputEnvelopeBodyO
], "nodoInviaEsitoStornoInputEnvelopeBody"));
// required attributes
var nodoInviaEsitoStornoInputEnvelopeR = t.interface({
    Body: exports.nodoInviaEsitoStornoInputEnvelopeBody
});
// optional attributes
var nodoInviaEsitoStornoInputEnvelopeO = t.partial({
    Header: nodoInviaEsitoStornoHeader_1.nodoInviaEsitoStornoHeader
});
exports.nodoInviaEsitoStornoInputEnvelope = t.exact(t.intersection([nodoInviaEsitoStornoInputEnvelopeR, nodoInviaEsitoStornoInputEnvelopeO], "nodoInviaEsitoStornoInputEnvelope"));
// required attributes
var nodoInviaEsitoStornoInputR = t.interface({
    Envelope: exports.nodoInviaEsitoStornoInputEnvelope
});
// optional attributes
var nodoInviaEsitoStornoInputO = t.partial({});
exports.nodoInviaEsitoStornoInput = t.exact(t.intersection([nodoInviaEsitoStornoInputR, nodoInviaEsitoStornoInputO], "nodoInviaEsitoStornoInput"));
