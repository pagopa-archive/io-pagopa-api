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
const nodoTipoDatiPagamentoPA_ppt_1 = require("./nodoTipoDatiPagamentoPA_ppt");
const t = require("io-ts");
// required attributes
const esitoNodoAttivaRPTRisposta_ppt2R = t.interface({});
// optional attributes
const esitoNodoAttivaRPTRisposta_ppt2O = t.partial({
    esito: t.string,
    datiPagamentoPA: nodoTipoDatiPagamentoPA_ppt_1.nodoTipoDatiPagamentoPA_ppt
});
exports.esitoNodoAttivaRPTRisposta_ppt2 = t.exact(t.intersection([esitoNodoAttivaRPTRisposta_ppt2R, esitoNodoAttivaRPTRisposta_ppt2O], "esitoNodoAttivaRPTRisposta_ppt2"));
exports.esitoNodoAttivaRPTRisposta_ppt = t.intersection([risposta_ppt_1.risposta_ppt, exports.esitoNodoAttivaRPTRisposta_ppt2], "esitoNodoAttivaRPTRisposta_ppt");
//# sourceMappingURL=esitoNodoAttivaRPTRisposta_ppt.js.map