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
const cdInfoPagamentoHeader_1 = require("./cdInfoPagamentoHeader");
const cdInfoPagamento_ppt_1 = require("./cdInfoPagamento_ppt");
// required attributes
const cdInfoPagamentoInputEnvelopeBodyR = t.interface({
    cdInfoPagamento: cdInfoPagamento_ppt_1.cdInfoPagamento_ppt
});
// optional attributes
const cdInfoPagamentoInputEnvelopeBodyO = t.partial({});
exports.cdInfoPagamentoInputEnvelopeBody = t.exact(t.intersection([cdInfoPagamentoInputEnvelopeBodyR, cdInfoPagamentoInputEnvelopeBodyO], "cdInfoPagamentoInputEnvelopeBody"));
// required attributes
const cdInfoPagamentoInputEnvelopeR = t.interface({
    Body: exports.cdInfoPagamentoInputEnvelopeBody
});
// optional attributes
const cdInfoPagamentoInputEnvelopeO = t.partial({
    Header: cdInfoPagamentoHeader_1.cdInfoPagamentoHeader
});
exports.cdInfoPagamentoInputEnvelope = t.exact(t.intersection([cdInfoPagamentoInputEnvelopeR, cdInfoPagamentoInputEnvelopeO], "cdInfoPagamentoInputEnvelope"));
// required attributes
const cdInfoPagamentoInputR = t.interface({
    Envelope: exports.cdInfoPagamentoInputEnvelope
});
// optional attributes
const cdInfoPagamentoInputO = t.partial({});
exports.cdInfoPagamentoInput = t.exact(t.intersection([cdInfoPagamentoInputR, cdInfoPagamentoInputO], "cdInfoPagamentoInput"));
//# sourceMappingURL=cdInfoPagamentoInput.js.map