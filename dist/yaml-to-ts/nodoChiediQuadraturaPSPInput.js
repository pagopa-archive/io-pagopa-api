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
const nodoChiediQuadraturaPSPHeader_1 = require("./nodoChiediQuadraturaPSPHeader");
const nodoChiediQuadraturaPSP_ppt_1 = require("./nodoChiediQuadraturaPSP_ppt");
// required attributes
const nodoChiediQuadraturaPSPInputEnvelopeBodyR = t.interface({
    nodoChiediQuadraturaPSP: nodoChiediQuadraturaPSP_ppt_1.nodoChiediQuadraturaPSP_ppt
});
// optional attributes
const nodoChiediQuadraturaPSPInputEnvelopeBodyO = t.partial({});
exports.nodoChiediQuadraturaPSPInputEnvelopeBody = t.exact(t.intersection([
    nodoChiediQuadraturaPSPInputEnvelopeBodyR,
    nodoChiediQuadraturaPSPInputEnvelopeBodyO
], "nodoChiediQuadraturaPSPInputEnvelopeBody"));
// required attributes
const nodoChiediQuadraturaPSPInputEnvelopeR = t.interface({
    Body: exports.nodoChiediQuadraturaPSPInputEnvelopeBody
});
// optional attributes
const nodoChiediQuadraturaPSPInputEnvelopeO = t.partial({
    Header: nodoChiediQuadraturaPSPHeader_1.nodoChiediQuadraturaPSPHeader
});
exports.nodoChiediQuadraturaPSPInputEnvelope = t.exact(t.intersection([
    nodoChiediQuadraturaPSPInputEnvelopeR,
    nodoChiediQuadraturaPSPInputEnvelopeO
], "nodoChiediQuadraturaPSPInputEnvelope"));
// required attributes
const nodoChiediQuadraturaPSPInputR = t.interface({
    Envelope: exports.nodoChiediQuadraturaPSPInputEnvelope
});
// optional attributes
const nodoChiediQuadraturaPSPInputO = t.partial({});
exports.nodoChiediQuadraturaPSPInput = t.exact(t.intersection([nodoChiediQuadraturaPSPInputR, nodoChiediQuadraturaPSPInputO], "nodoChiediQuadraturaPSPInput"));
//# sourceMappingURL=nodoChiediQuadraturaPSPInput.js.map