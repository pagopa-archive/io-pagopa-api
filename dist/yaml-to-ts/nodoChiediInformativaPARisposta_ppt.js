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
const risposta_ppt_1 = require("./risposta_ppt");
const t = require("io-ts");
// required attributes
const nodoChiediInformativaPARisposta_ppt2R = t.interface({});
// optional attributes
const nodoChiediInformativaPARisposta_ppt2O = t.partial({
    xmlInformativa: t.string
});
exports.nodoChiediInformativaPARisposta_ppt2 = t.exact(t.intersection([
    nodoChiediInformativaPARisposta_ppt2R,
    nodoChiediInformativaPARisposta_ppt2O
], "nodoChiediInformativaPARisposta_ppt2"));
exports.nodoChiediInformativaPARisposta_ppt = t.intersection([risposta_ppt_1.risposta_ppt, exports.nodoChiediInformativaPARisposta_ppt2], "nodoChiediInformativaPARisposta_ppt");
//# sourceMappingURL=nodoChiediInformativaPARisposta_ppt.js.map