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
const nodoChiediInformativaPARisposta_ppt_1 = require("./nodoChiediInformativaPARisposta_ppt");
// required attributes
const nodoChiediInformativaPAOutputEnvelopeBodyR = t.interface({});
// optional attributes
const nodoChiediInformativaPAOutputEnvelopeBodyO = t.partial({
    nodoChiediInformativaPARisposta: nodoChiediInformativaPARisposta_ppt_1.nodoChiediInformativaPARisposta_ppt
});
exports.nodoChiediInformativaPAOutputEnvelopeBody = t.exact(t.intersection([
    nodoChiediInformativaPAOutputEnvelopeBodyR,
    nodoChiediInformativaPAOutputEnvelopeBodyO
], "nodoChiediInformativaPAOutputEnvelopeBody"));
// required attributes
const nodoChiediInformativaPAOutputEnvelopeR = t.interface({
    Body: exports.nodoChiediInformativaPAOutputEnvelopeBody
});
// optional attributes
const nodoChiediInformativaPAOutputEnvelopeO = t.partial({});
exports.nodoChiediInformativaPAOutputEnvelope = t.exact(t.intersection([
    nodoChiediInformativaPAOutputEnvelopeR,
    nodoChiediInformativaPAOutputEnvelopeO
], "nodoChiediInformativaPAOutputEnvelope"));
// required attributes
const nodoChiediInformativaPAOutputR = t.interface({
    Envelope: exports.nodoChiediInformativaPAOutputEnvelope
});
// optional attributes
const nodoChiediInformativaPAOutputO = t.partial({});
exports.nodoChiediInformativaPAOutput = t.exact(t.intersection([nodoChiediInformativaPAOutputR, nodoChiediInformativaPAOutputO], "nodoChiediInformativaPAOutput"));
//# sourceMappingURL=nodoChiediInformativaPAOutput.js.map