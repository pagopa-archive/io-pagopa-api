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
var cdInfoPagamentoHeader_1 = require("./cdInfoPagamentoHeader");
var cdInfoPagamento_ppt_1 = require("./cdInfoPagamento_ppt");
// required attributes
var cdInfoPagamentoInputEnvelopeBodyR = t.interface({
    cdInfoPagamento: cdInfoPagamento_ppt_1.cdInfoPagamento_ppt
});
// optional attributes
var cdInfoPagamentoInputEnvelopeBodyO = t.partial({});
exports.cdInfoPagamentoInputEnvelopeBody = t.exact(t.intersection([cdInfoPagamentoInputEnvelopeBodyR, cdInfoPagamentoInputEnvelopeBodyO], "cdInfoPagamentoInputEnvelopeBody"));
// required attributes
var cdInfoPagamentoInputEnvelopeR = t.interface({
    Body: exports.cdInfoPagamentoInputEnvelopeBody
});
// optional attributes
var cdInfoPagamentoInputEnvelopeO = t.partial({
    Header: cdInfoPagamentoHeader_1.cdInfoPagamentoHeader
});
exports.cdInfoPagamentoInputEnvelope = t.exact(t.intersection([cdInfoPagamentoInputEnvelopeR, cdInfoPagamentoInputEnvelopeO], "cdInfoPagamentoInputEnvelope"));
// required attributes
var cdInfoPagamentoInputR = t.interface({
    Envelope: exports.cdInfoPagamentoInputEnvelope
});
// optional attributes
var cdInfoPagamentoInputO = t.partial({});
exports.cdInfoPagamentoInput = t.exact(t.intersection([cdInfoPagamentoInputR, cdInfoPagamentoInputO], "cdInfoPagamentoInput"));
