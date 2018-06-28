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
var nodoAttivaRPTHeader_1 = require("./nodoAttivaRPTHeader");
var nodoAttivaRPT_ppt_1 = require("./nodoAttivaRPT_ppt");
// required attributes
var nodoAttivaRPTInputEnvelopeBodyR = t.interface({
    nodoAttivaRPT: nodoAttivaRPT_ppt_1.nodoAttivaRPT_ppt
});
// optional attributes
var nodoAttivaRPTInputEnvelopeBodyO = t.partial({});
exports.nodoAttivaRPTInputEnvelopeBody = t.exact(t.intersection([nodoAttivaRPTInputEnvelopeBodyR, nodoAttivaRPTInputEnvelopeBodyO], "nodoAttivaRPTInputEnvelopeBody"));
// required attributes
var nodoAttivaRPTInputEnvelopeR = t.interface({
    Body: exports.nodoAttivaRPTInputEnvelopeBody
});
// optional attributes
var nodoAttivaRPTInputEnvelopeO = t.partial({
    Header: nodoAttivaRPTHeader_1.nodoAttivaRPTHeader
});
exports.nodoAttivaRPTInputEnvelope = t.exact(t.intersection([nodoAttivaRPTInputEnvelopeR, nodoAttivaRPTInputEnvelopeO], "nodoAttivaRPTInputEnvelope"));
// required attributes
var nodoAttivaRPTInputR = t.interface({
    Envelope: exports.nodoAttivaRPTInputEnvelope
});
// optional attributes
var nodoAttivaRPTInputO = t.partial({});
exports.nodoAttivaRPTInput = t.exact(t.intersection([nodoAttivaRPTInputR, nodoAttivaRPTInputO], "nodoAttivaRPTInput"));
