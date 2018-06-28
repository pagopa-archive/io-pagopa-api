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
const esitoNodoVerificaRPTRisposta_ppt_1 = require("./esitoNodoVerificaRPTRisposta_ppt");
const t = require("io-ts");
// required attributes
const nodoVerificaRPTRisposta_pptR = t.interface({
    nodoVerificaRPTRisposta: esitoNodoVerificaRPTRisposta_ppt_1.esitoNodoVerificaRPTRisposta_ppt
});
// optional attributes
const nodoVerificaRPTRisposta_pptO = t.partial({});
exports.nodoVerificaRPTRisposta_ppt = t.exact(t.intersection([nodoVerificaRPTRisposta_pptR, nodoVerificaRPTRisposta_pptO], "nodoVerificaRPTRisposta_ppt"));
//# sourceMappingURL=nodoVerificaRPTRisposta_ppt.js.map