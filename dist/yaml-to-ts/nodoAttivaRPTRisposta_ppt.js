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
const esitoNodoAttivaRPTRisposta_ppt_1 = require("./esitoNodoAttivaRPTRisposta_ppt");
const t = require("io-ts");
// required attributes
const nodoAttivaRPTRisposta_pptR = t.interface({
    nodoAttivaRPTRisposta: esitoNodoAttivaRPTRisposta_ppt_1.esitoNodoAttivaRPTRisposta_ppt
});
// optional attributes
const nodoAttivaRPTRisposta_pptO = t.partial({});
exports.nodoAttivaRPTRisposta_ppt = t.exact(t.intersection([nodoAttivaRPTRisposta_pptR, nodoAttivaRPTRisposta_pptO], "nodoAttivaRPTRisposta_ppt"));
//# sourceMappingURL=nodoAttivaRPTRisposta_ppt.js.map