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
var nodoInviaRTHeader_1 = require("./nodoInviaRTHeader");
var nodoInviaRT_ppt_1 = require("./nodoInviaRT_ppt");
// required attributes
var nodoInviaRTInputEnvelopeBodyR = t.interface({
    nodoInviaRT: nodoInviaRT_ppt_1.nodoInviaRT_ppt
});
// optional attributes
var nodoInviaRTInputEnvelopeBodyO = t.partial({});
exports.nodoInviaRTInputEnvelopeBody = t.exact(t.intersection([nodoInviaRTInputEnvelopeBodyR, nodoInviaRTInputEnvelopeBodyO], "nodoInviaRTInputEnvelopeBody"));
// required attributes
var nodoInviaRTInputEnvelopeR = t.interface({
    Body: exports.nodoInviaRTInputEnvelopeBody
});
// optional attributes
var nodoInviaRTInputEnvelopeO = t.partial({
    Header: nodoInviaRTHeader_1.nodoInviaRTHeader
});
exports.nodoInviaRTInputEnvelope = t.exact(t.intersection([nodoInviaRTInputEnvelopeR, nodoInviaRTInputEnvelopeO], "nodoInviaRTInputEnvelope"));
// required attributes
var nodoInviaRTInputR = t.interface({
    Envelope: exports.nodoInviaRTInputEnvelope
});
// optional attributes
var nodoInviaRTInputO = t.partial({});
exports.nodoInviaRTInput = t.exact(t.intersection([nodoInviaRTInputR, nodoInviaRTInputO], "nodoInviaRTInput"));
