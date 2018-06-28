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
const nodoChiediInformativaPAHeader_1 = require("./nodoChiediInformativaPAHeader");
const nodoChiediInformativaPA_ppt_1 = require("./nodoChiediInformativaPA_ppt");
// required attributes
const nodoChiediInformativaPAInputEnvelopeBodyR = t.interface({
    nodoChiediInformativaPA: nodoChiediInformativaPA_ppt_1.nodoChiediInformativaPA_ppt
});
// optional attributes
const nodoChiediInformativaPAInputEnvelopeBodyO = t.partial({});
exports.nodoChiediInformativaPAInputEnvelopeBody = t.exact(t.intersection([
    nodoChiediInformativaPAInputEnvelopeBodyR,
    nodoChiediInformativaPAInputEnvelopeBodyO
], "nodoChiediInformativaPAInputEnvelopeBody"));
// required attributes
const nodoChiediInformativaPAInputEnvelopeR = t.interface({
    Body: exports.nodoChiediInformativaPAInputEnvelopeBody
});
// optional attributes
const nodoChiediInformativaPAInputEnvelopeO = t.partial({
    Header: nodoChiediInformativaPAHeader_1.nodoChiediInformativaPAHeader
});
exports.nodoChiediInformativaPAInputEnvelope = t.exact(t.intersection([
    nodoChiediInformativaPAInputEnvelopeR,
    nodoChiediInformativaPAInputEnvelopeO
], "nodoChiediInformativaPAInputEnvelope"));
// required attributes
const nodoChiediInformativaPAInputR = t.interface({
    Envelope: exports.nodoChiediInformativaPAInputEnvelope
});
// optional attributes
const nodoChiediInformativaPAInputO = t.partial({});
exports.nodoChiediInformativaPAInput = t.exact(t.intersection([nodoChiediInformativaPAInputR, nodoChiediInformativaPAInputO], "nodoChiediInformativaPAInput"));
//# sourceMappingURL=nodoChiediInformativaPAInput.js.map