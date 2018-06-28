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
const nodoChiediElencoQuadraturePSPRisposta_ppt_1 = require("./nodoChiediElencoQuadraturePSPRisposta_ppt");
// required attributes
const nodoChiediElencoQuadraturePSPOutputEnvelopeBodyR = t.interface({});
// optional attributes
const nodoChiediElencoQuadraturePSPOutputEnvelopeBodyO = t.partial({
    nodoChiediElencoQuadraturePSPRisposta: nodoChiediElencoQuadraturePSPRisposta_ppt_1.nodoChiediElencoQuadraturePSPRisposta_ppt
});
exports.nodoChiediElencoQuadraturePSPOutputEnvelopeBody = t.exact(t.intersection([
    nodoChiediElencoQuadraturePSPOutputEnvelopeBodyR,
    nodoChiediElencoQuadraturePSPOutputEnvelopeBodyO
], "nodoChiediElencoQuadraturePSPOutputEnvelopeBody"));
// required attributes
const nodoChiediElencoQuadraturePSPOutputEnvelopeR = t.interface({
    Body: exports.nodoChiediElencoQuadraturePSPOutputEnvelopeBody
});
// optional attributes
const nodoChiediElencoQuadraturePSPOutputEnvelopeO = t.partial({});
exports.nodoChiediElencoQuadraturePSPOutputEnvelope = t.exact(t.intersection([
    nodoChiediElencoQuadraturePSPOutputEnvelopeR,
    nodoChiediElencoQuadraturePSPOutputEnvelopeO
], "nodoChiediElencoQuadraturePSPOutputEnvelope"));
// required attributes
const nodoChiediElencoQuadraturePSPOutputR = t.interface({
    Envelope: exports.nodoChiediElencoQuadraturePSPOutputEnvelope
});
// optional attributes
const nodoChiediElencoQuadraturePSPOutputO = t.partial({});
exports.nodoChiediElencoQuadraturePSPOutput = t.exact(t.intersection([
    nodoChiediElencoQuadraturePSPOutputR,
    nodoChiediElencoQuadraturePSPOutputO
], "nodoChiediElencoQuadraturePSPOutput"));
//# sourceMappingURL=nodoChiediElencoQuadraturePSPOutput.js.map