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
const nodoChiediQuadraturaPSPRisposta_ppt_1 = require("./nodoChiediQuadraturaPSPRisposta_ppt");
// required attributes
const nodoChiediQuadraturaPSPOutputEnvelopeBodyR = t.interface({});
// optional attributes
const nodoChiediQuadraturaPSPOutputEnvelopeBodyO = t.partial({
    nodoChiediQuadraturaPSPRisposta: nodoChiediQuadraturaPSPRisposta_ppt_1.nodoChiediQuadraturaPSPRisposta_ppt
});
exports.nodoChiediQuadraturaPSPOutputEnvelopeBody = t.exact(t.intersection([
    nodoChiediQuadraturaPSPOutputEnvelopeBodyR,
    nodoChiediQuadraturaPSPOutputEnvelopeBodyO
], "nodoChiediQuadraturaPSPOutputEnvelopeBody"));
// required attributes
const nodoChiediQuadraturaPSPOutputEnvelopeR = t.interface({
    Body: exports.nodoChiediQuadraturaPSPOutputEnvelopeBody
});
// optional attributes
const nodoChiediQuadraturaPSPOutputEnvelopeO = t.partial({});
exports.nodoChiediQuadraturaPSPOutputEnvelope = t.exact(t.intersection([
    nodoChiediQuadraturaPSPOutputEnvelopeR,
    nodoChiediQuadraturaPSPOutputEnvelopeO
], "nodoChiediQuadraturaPSPOutputEnvelope"));
// required attributes
const nodoChiediQuadraturaPSPOutputR = t.interface({
    Envelope: exports.nodoChiediQuadraturaPSPOutputEnvelope
});
// optional attributes
const nodoChiediQuadraturaPSPOutputO = t.partial({});
exports.nodoChiediQuadraturaPSPOutput = t.exact(t.intersection([nodoChiediQuadraturaPSPOutputR, nodoChiediQuadraturaPSPOutputO], "nodoChiediQuadraturaPSPOutput"));
//# sourceMappingURL=nodoChiediQuadraturaPSPOutput.js.map