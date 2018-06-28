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
const nodoChiediElencoQuadraturePSPHeader_1 = require("./nodoChiediElencoQuadraturePSPHeader");
const nodoChiediElencoQuadraturePSP_ppt_1 = require("./nodoChiediElencoQuadraturePSP_ppt");
// required attributes
const nodoChiediElencoQuadraturePSPInputEnvelopeBodyR = t.interface({
    nodoChiediElencoQuadraturePSP: nodoChiediElencoQuadraturePSP_ppt_1.nodoChiediElencoQuadraturePSP_ppt
});
// optional attributes
const nodoChiediElencoQuadraturePSPInputEnvelopeBodyO = t.partial({});
exports.nodoChiediElencoQuadraturePSPInputEnvelopeBody = t.exact(t.intersection([
    nodoChiediElencoQuadraturePSPInputEnvelopeBodyR,
    nodoChiediElencoQuadraturePSPInputEnvelopeBodyO
], "nodoChiediElencoQuadraturePSPInputEnvelopeBody"));
// required attributes
const nodoChiediElencoQuadraturePSPInputEnvelopeR = t.interface({
    Body: exports.nodoChiediElencoQuadraturePSPInputEnvelopeBody
});
// optional attributes
const nodoChiediElencoQuadraturePSPInputEnvelopeO = t.partial({
    Header: nodoChiediElencoQuadraturePSPHeader_1.nodoChiediElencoQuadraturePSPHeader
});
exports.nodoChiediElencoQuadraturePSPInputEnvelope = t.exact(t.intersection([
    nodoChiediElencoQuadraturePSPInputEnvelopeR,
    nodoChiediElencoQuadraturePSPInputEnvelopeO
], "nodoChiediElencoQuadraturePSPInputEnvelope"));
// required attributes
const nodoChiediElencoQuadraturePSPInputR = t.interface({
    Envelope: exports.nodoChiediElencoQuadraturePSPInputEnvelope
});
// optional attributes
const nodoChiediElencoQuadraturePSPInputO = t.partial({});
exports.nodoChiediElencoQuadraturePSPInput = t.exact(t.intersection([nodoChiediElencoQuadraturePSPInputR, nodoChiediElencoQuadraturePSPInputO], "nodoChiediElencoQuadraturePSPInput"));
//# sourceMappingURL=nodoChiediElencoQuadraturePSPInput.js.map