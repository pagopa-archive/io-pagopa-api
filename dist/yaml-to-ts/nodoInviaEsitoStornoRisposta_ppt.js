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
const nodoInviaEsitoStornoRisposta_ppt2R = t.interface({});
// optional attributes
const nodoInviaEsitoStornoRisposta_ppt2O = t.partial({
    esito: t.string
});
exports.nodoInviaEsitoStornoRisposta_ppt2 = t.exact(t.intersection([nodoInviaEsitoStornoRisposta_ppt2R, nodoInviaEsitoStornoRisposta_ppt2O], "nodoInviaEsitoStornoRisposta_ppt2"));
exports.nodoInviaEsitoStornoRisposta_ppt = t.intersection([risposta_ppt_1.risposta_ppt, exports.nodoInviaEsitoStornoRisposta_ppt2], "nodoInviaEsitoStornoRisposta_ppt");
//# sourceMappingURL=nodoInviaEsitoStornoRisposta_ppt.js.map