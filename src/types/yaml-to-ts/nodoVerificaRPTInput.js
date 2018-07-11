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
var nodoVerificaRPTHeader_1 = require("./nodoVerificaRPTHeader");
var nodoVerificaRPT_ppt_1 = require("./nodoVerificaRPT_ppt");
// required attributes
var nodoVerificaRPTInputEnvelopeBodyR = t.interface({
    nodoVerificaRPT: nodoVerificaRPT_ppt_1.nodoVerificaRPT_ppt
});
// optional attributes
var nodoVerificaRPTInputEnvelopeBodyO = t.partial({});
exports.nodoVerificaRPTInputEnvelopeBody = t.exact(t.intersection([nodoVerificaRPTInputEnvelopeBodyR, nodoVerificaRPTInputEnvelopeBodyO], "nodoVerificaRPTInputEnvelopeBody"));
// required attributes
var nodoVerificaRPTInputEnvelopeR = t.interface({
    Body: exports.nodoVerificaRPTInputEnvelopeBody
});
// optional attributes
var nodoVerificaRPTInputEnvelopeO = t.partial({
    Header: nodoVerificaRPTHeader_1.nodoVerificaRPTHeader
});
exports.nodoVerificaRPTInputEnvelope = t.exact(t.intersection([nodoVerificaRPTInputEnvelopeR, nodoVerificaRPTInputEnvelopeO], "nodoVerificaRPTInputEnvelope"));
// required attributes
var nodoVerificaRPTInputR = t.interface({
    Envelope: exports.nodoVerificaRPTInputEnvelope
});
// optional attributes
var nodoVerificaRPTInputO = t.partial({});
exports.nodoVerificaRPTInput = t.exact(t.intersection([nodoVerificaRPTInputR, nodoVerificaRPTInputO], "nodoVerificaRPTInput"));
