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
const cdInfoPagamentoResponse_ppt_1 = require("./cdInfoPagamentoResponse_ppt");
// required attributes
const cdInfoPagamentoOutputEnvelopeBodyR = t.interface({});
// optional attributes
const cdInfoPagamentoOutputEnvelopeBodyO = t.partial({
    cdInfoPagamentoResponse: cdInfoPagamentoResponse_ppt_1.cdInfoPagamentoResponse_ppt
});
exports.cdInfoPagamentoOutputEnvelopeBody = t.exact(t.intersection([cdInfoPagamentoOutputEnvelopeBodyR, cdInfoPagamentoOutputEnvelopeBodyO], "cdInfoPagamentoOutputEnvelopeBody"));
// required attributes
const cdInfoPagamentoOutputEnvelopeR = t.interface({
    Body: exports.cdInfoPagamentoOutputEnvelopeBody
});
// optional attributes
const cdInfoPagamentoOutputEnvelopeO = t.partial({});
exports.cdInfoPagamentoOutputEnvelope = t.exact(t.intersection([cdInfoPagamentoOutputEnvelopeR, cdInfoPagamentoOutputEnvelopeO], "cdInfoPagamentoOutputEnvelope"));
// required attributes
const cdInfoPagamentoOutputR = t.interface({
    Envelope: exports.cdInfoPagamentoOutputEnvelope
});
// optional attributes
const cdInfoPagamentoOutputO = t.partial({});
exports.cdInfoPagamentoOutput = t.exact(t.intersection([cdInfoPagamentoOutputR, cdInfoPagamentoOutputO], "cdInfoPagamentoOutput"));
//# sourceMappingURL=cdInfoPagamentoOutput.js.map