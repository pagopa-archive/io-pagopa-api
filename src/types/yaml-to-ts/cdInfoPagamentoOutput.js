"use strict";
/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:variable-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */
exports.__esModule = true;
var t = require("io-ts");
var cdInfoPagamentoResponse_ppt_1 = require("./cdInfoPagamentoResponse_ppt");
// required attributes
var cdInfoPagamentoOutputEnvelopeBodyR = t.interface({});
// optional attributes
var cdInfoPagamentoOutputEnvelopeBodyO = t.partial({
    cdInfoPagamentoResponse: cdInfoPagamentoResponse_ppt_1.cdInfoPagamentoResponse_ppt
});
exports.cdInfoPagamentoOutputEnvelopeBody = t.exact(t.intersection([cdInfoPagamentoOutputEnvelopeBodyR, cdInfoPagamentoOutputEnvelopeBodyO], "cdInfoPagamentoOutputEnvelopeBody"));
// required attributes
var cdInfoPagamentoOutputEnvelopeR = t.interface({
    Body: exports.cdInfoPagamentoOutputEnvelopeBody
});
// optional attributes
var cdInfoPagamentoOutputEnvelopeO = t.partial({});
exports.cdInfoPagamentoOutputEnvelope = t.exact(t.intersection([cdInfoPagamentoOutputEnvelopeR, cdInfoPagamentoOutputEnvelopeO], "cdInfoPagamentoOutputEnvelope"));
// required attributes
var cdInfoPagamentoOutputR = t.interface({
    Envelope: exports.cdInfoPagamentoOutputEnvelope
});
// optional attributes
var cdInfoPagamentoOutputO = t.partial({});
exports.cdInfoPagamentoOutput = t.exact(t.intersection([cdInfoPagamentoOutputR, cdInfoPagamentoOutputO], "cdInfoPagamentoOutput"));
