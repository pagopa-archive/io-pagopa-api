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
var nodoChiediInformativaPAHeader_1 = require("./nodoChiediInformativaPAHeader");
var nodoChiediInformativaPA_ppt_1 = require("./nodoChiediInformativaPA_ppt");
// required attributes
var nodoChiediInformativaPAInputEnvelopeBodyR = t.interface({
    nodoChiediInformativaPA: nodoChiediInformativaPA_ppt_1.nodoChiediInformativaPA_ppt
});
// optional attributes
var nodoChiediInformativaPAInputEnvelopeBodyO = t.partial({});
exports.nodoChiediInformativaPAInputEnvelopeBody = t.exact(t.intersection([
    nodoChiediInformativaPAInputEnvelopeBodyR,
    nodoChiediInformativaPAInputEnvelopeBodyO
], "nodoChiediInformativaPAInputEnvelopeBody"));
// required attributes
var nodoChiediInformativaPAInputEnvelopeR = t.interface({
    Body: exports.nodoChiediInformativaPAInputEnvelopeBody
});
// optional attributes
var nodoChiediInformativaPAInputEnvelopeO = t.partial({
    Header: nodoChiediInformativaPAHeader_1.nodoChiediInformativaPAHeader
});
exports.nodoChiediInformativaPAInputEnvelope = t.exact(t.intersection([
    nodoChiediInformativaPAInputEnvelopeR,
    nodoChiediInformativaPAInputEnvelopeO
], "nodoChiediInformativaPAInputEnvelope"));
// required attributes
var nodoChiediInformativaPAInputR = t.interface({
    Envelope: exports.nodoChiediInformativaPAInputEnvelope
});
// optional attributes
var nodoChiediInformativaPAInputO = t.partial({});
exports.nodoChiediInformativaPAInput = t.exact(t.intersection([nodoChiediInformativaPAInputR, nodoChiediInformativaPAInputO], "nodoChiediInformativaPAInput"));
